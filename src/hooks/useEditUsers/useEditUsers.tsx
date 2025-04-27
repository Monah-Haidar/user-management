import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useAuthStore } from "../../stores/authStore";
import { User } from "../useUsers/useUsers.type";
import axios from "axios";
import { toast } from "react-toastify";

interface EditUserContext { 
    previousUsers: { users: User[] }
}

interface QueryData {
    result: {
        data: {
            users: User[]
        }
    }
}

interface EditUserPayload {
    id: string;
    data: Omit<User, 'id'>;
}

const useEditUsers = () => {
    const queryClient = useQueryClient();
    const accessToken = useAuthStore((state) => state.accessToken);

    return useMutation<any, Error, EditUserPayload, EditUserContext>({
        mutationFn: ({ id, data }) =>
            axios.put<EditUserPayload>(`/api/users/${id}`, data, {
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                    "Content-Type": "application/json",
                },
            }).then((res) => res.data),

        onMutate: async (newUser) => {
            await queryClient.cancelQueries({ queryKey: ["users"] });

            const previousData = queryClient.getQueryData<QueryData>(["users"]);

            const optimisticUser: User = {
                id: newUser.id,
                firstName: newUser.data.firstName,
                lastName: newUser.data.lastName || "",
                email: newUser.data.email,
                status: newUser.data.status,
                dateOfBirth: newUser.data.dateOfBirth,
            };

            queryClient.setQueryData<QueryData>(["users"], old => ({
                result: {
                    data: {
                        users: old?.result.data.users.map(user => 
                            user.id === newUser.id ? optimisticUser : user
                        ) || []
                    },
                    message: ''
                }
            }));

            return { previousUsers: previousData?.result.data || { users: [] } };
        },

        

        onError: (_error, _newUser, context) => {
            if (context?.previousUsers) {
                queryClient.setQueryData<QueryData>(["users"], {
                    result: {
                        data: {
                            users: context.previousUsers.users || [],
                        },
                    },
                });
            }
            toast.error("Failed to edit user. Please try again.");
        },

        onSuccess: (data) => {
            toast.success(data.result.message || "User deleted successfully");
        },

        onSettled: () => {
            queryClient.invalidateQueries({ queryKey: ["users"] });
        },
    });
}

export default useEditUsers;