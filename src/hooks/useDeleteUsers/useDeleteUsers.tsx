import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useAuthStore } from "../../stores/authStore";
import axios from "axios";
import { User } from "../useUsers/useUsers.type";

interface QueryData {
    result: {
        data: {
            users: User[];
        };
    };
}

interface DeleteResponse {
    status: number;
    result: {
        data: {};
        message: string;
    };
}

interface DeleteContext {
    previousUsers: {
        users: User[];
    };
}

const useDeleteUsers = () => {
    const queryClient = useQueryClient();
    const accessToken = useAuthStore((state) => state.accessToken);

    return useMutation<DeleteResponse, Error, string, DeleteContext>({
        mutationFn: (id: string) =>
            axios.delete<DeleteResponse>(`/api/users/${id}`, {
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                    "Content-Type": "application/json",
                },
            }).then((res) => res.data),

        onMutate: async (id) => {
            await queryClient.cancelQueries({ queryKey: ["users"] });

            const previousData = queryClient.getQueryData<QueryData>(["users"]);

            queryClient.setQueryData<QueryData>(["users"], (old) => ({
                result: {
                    data: {
                        users:
                            old?.result.data.users.filter(
                                (user) => user.id !== id
                            ) || [],
                    },
                },
            }));

            return {
                previousUsers: previousData?.result.data || { users: [] },
            };
        },

        onError: (_err, _id, context) => {
            if (!context) return;
            queryClient.setQueryData<QueryData>(["users"], () => ({
                result: {
                    data: {
                        users: context.previousUsers.users || [],
                    },
                },
            }));
        },

        onSettled: () => {
            queryClient.invalidateQueries({ queryKey: ["users"] });
        },
    });
};

export default useDeleteUsers;
