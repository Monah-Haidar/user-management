import axios, {CanceledError} from "axios";
import {useEffect, useState} from "react";
import useAuthStore from "../../stores/authStore/store.ts";
import { User } from './useUsers.type.ts'


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
                signal: controller.signal,
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