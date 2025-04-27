import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { useAuthStore } from "../../stores/authStore";
import { User } from "../useUsers/useUsers.type";
import { FormData } from "../../components/molecules/CreateUserForm/CreateUserForm";

interface AddUsersContext { 
    previousUsers: { users: User[] }
}

interface QueryData {
    result: {
        data: {
            users: User[]
        }
    }
}

const useAddUsers = () => {
    const accessToken = useAuthStore((state) => state.accessToken);
    const queryClient = useQueryClient();

    return useMutation<any, Error, FormData, AddUsersContext>({
        mutationFn: (data) =>
            axios.post('/api/users', data, {
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                    'Content-Type': 'application/json',
                },
            })
            .then((res) => res.data),

        onMutate: async (newUser) => {
            await queryClient.cancelQueries({ queryKey: ["users"] });

            const previousData = queryClient.getQueryData<QueryData>(["users"]);

            const optimisticUser: User = {
                id: -1, // Temporary ID that will be replaced by the server response
                firstName: newUser.firstName,
                lastName: newUser.lastName || "",
                email: newUser.email,
                status: newUser.status,
                dateOfBirth: newUser.dateOfBirth,
            };

            queryClient.setQueryData<QueryData>(["users"], old => ({
                result: {
                    data: {
                        users: [...(old?.result.data.users || []), optimisticUser]
                    }
                }
            }));

            return { previousUsers: previousData?.result.data || { users: [] } };
        },



        onError: (_error, _newUser, context) => {
            if (context?.previousUsers) {
                queryClient.setQueryData<QueryData>(["users"], {
                    result: {
                        data: context.previousUsers
                    }
                });
            }
        },

        onSettled: () => {
            queryClient.invalidateQueries({ queryKey: ["users"] });
        },
    });
};

export default useAddUsers;