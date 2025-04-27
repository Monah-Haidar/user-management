import { PrimaryButton } from "../../atoms/PrimaryButton";
import { DangerButton } from "../../atoms/DangerButton";
import { UserCardProps } from "./UserCard.type.ts";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { useDeleteUsers } from "../../../hooks/useDeleteUsers";

const UserCard = ({
    className = "",
    id,
    firstName,
    lastName,
    email,
    status,
    dateOfBirth,
}: UserCardProps) => {
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const deleteUser = useDeleteUsers();

    const getInitials = (firstName: string = "", lastName: string = "") => {
        return `${firstName.charAt(0)}${lastName.charAt(0)}`.toUpperCase();
    };

    const userData = {
        id,
        firstName,
        lastName,
        email,
        status,
        dateOfBirth,
    };

    const handleDelete = async () => {
        try {
            await deleteUser.mutate(id);
            setShowDeleteModal(false);
        } catch (error) {
            console.error('Error deleting user:', error);
        }
    };

    return (
        <>
            <div
                className={
                    `flex flex-col w-full p-4 bg-white shadow-lg rounded-md gap-4 dark:bg-gray-800 dark:text-gray-100 ` +
                    className
                }
            >
                <div>
                    <div className={`flex items-center justify-center`}>
                        <span
                            className={`p-4 w-16 h-16 flex items-center justify-center text-xl font-bold text-white rounded-full bg-primary`}
                        >
                            {getInitials(firstName, lastName)}
                        </span>
                    </div>

                    <div className={`flex flex-col gap-1`}>
                        <p
                            className={`text-xl font-semibold text-gray-800 dark:text-gray-200`}
                        >
                            {firstName} {lastName}
                        </p>
                        <p
                            className={`text-xs font-semibold text-gray-500 dark:text-gray-400 `}
                        >
                            Email: {email}
                        </p>
                        <p
                            className={`text-xs font-semibold text-gray-500 dark:text-gray-400 `}
                        >
                            Status: {status}
                        </p>
                        <p
                            className={`text-xs font-semibold text-gray-500 dark:text-gray-400 `}
                        >
                            Date of Birth: {dateOfBirth.toLocaleString()}
                        </p>
                    </div>
                </div>

                <div className={`flex items-center gap-x-2 justify-end`}>
                    <NavLink
                        to={`/dashboard/edit/${id}`}
                        state={{ user: userData }}
                    >
                        <PrimaryButton>Edit</PrimaryButton>
                    </NavLink>
                    <DangerButton onClick={() => setShowDeleteModal(true)}>Delete</DangerButton>
                </div>
            </div>

            {/* Delete Confirmation Modal */}
            {showDeleteModal && (
                <div className="fixed inset-0 bg-black/75 flex items-center justify-center z-50">
                    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-xl max-w-sm w-full m-4">
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4">
                            Confirm Delete
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300 mb-6">
                            Are you sure you want to delete {firstName} {lastName}? This action cannot be undone.
                        </p>
                        <div className="flex justify-end gap-3">
                            <button
                                onClick={() => setShowDeleteModal(false)}
                                className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-md dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600 cursor-pointer"
                            >
                                Cancel
                            </button>
                            <button
                                onClick={handleDelete}
                                className="px-4 py-2 text-sm font-medium text-white bg-red-600 hover:bg-red-500 rounded-md cursor-pointer"
                            >
                                Delete
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default React.memo(UserCard);
