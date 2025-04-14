import axios, {CanceledError} from "axios";
import {useEffect, useState} from "react";
import {Status} from "../components/molecules/UserCard";
import useAuthStore from "../stores/authStore/store.ts";

interface User {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    status: Status;
    dateOfBirth: Date;
}

interface FetchResponse {
    users: User[];
}

const useUsers = () => {

    const accessToken = useAuthStore(state => state.accessToken);

    const [users, setUsers] = useState<User[]>([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {

        if (!accessToken) return;

        const controller = new AbortController();

        setIsLoading(true);
        axios
            .get<FetchResponse>('/api/users', {
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                },
            })
            .then((res) => {
                setIsLoading(false);
                setUsers(res.data.result.data.users);
            })
            .catch((err) => {
                if (err instanceof CanceledError) return;
                setIsLoading(false);
            });

        return () => controller.abort();
    }, [accessToken]);



    return {users, isLoading};
};

export default useUsers;