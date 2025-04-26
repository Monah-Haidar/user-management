import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import useAuthStore from "../../stores/authStore/store";
import { FetchResponse } from './useUsers.type.ts';


const useUsers = () => {

    const accessToken = useAuthStore(state => state.accessToken);
    
    return useQuery({
        queryKey: ['users'],
        queryFn: () => 
            axios
            .get<FetchResponse>('/api/users', {
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                    'Content-Type': 'application/json',
                },
            })
            .then(res => res.data),            
        staleTime: 1000 * 60 * 60 * 24, // 24 hours
        enabled: !!accessToken,
    })
    
};

export default useUsers;