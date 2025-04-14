import {PrimaryButton} from "../../atoms/PrimaryButton";
import {DangerButton} from "../../atoms/DangerButton";
import { UserCardProps } from "./UserCard.type.ts";
import React from "react";


const UserCard = ({className = '', firstName, lastName, email, status, dateOfBirth}: UserCardProps) => {

    const getInitials = (firstName: string = '', lastName: string = '') => {
        return `${firstName.charAt(0)}${lastName.charAt(0)}`.toUpperCase();
    };


    return (
        <div className={`flex flex-col w-full p-4 bg-white shadow-lg rounded-md gap-4 dark:bg-gray-800 dark:text-gray-100 ` + className}>
            <div>
                <div className={`flex items-center justify-center`}>
                    <span
                        className={`p-4 w-16 h-16 flex items-center justify-center text-xl font-bold text-white rounded-full bg-primary`}>
                        {getInitials(firstName, lastName)}
                    </span>
                </div>

                <div className={`flex flex-col gap-1`}>
                    <p className={`text-xl font-semibold text-gray-800 dark:text-gray-200`}>{firstName} {lastName}</p>
                    <p className={`text-xs font-semibold text-gray-500 dark:text-gray-400 `}>Email: {email}</p>
                    <p className={`text-xs font-semibold text-gray-500 dark:text-gray-400 `}>Status: {status}</p>
                    <p className={`text-xs font-semibold text-gray-500 dark:text-gray-400 `}>Date of
                        Birth: {dateOfBirth}</p>
                </div>

            </div>


            <div className={`flex items-center gap-x-2 justify-end`}>
                <PrimaryButton className={``}>Edit</PrimaryButton>
                <DangerButton className={``}>Delete</DangerButton>
            </div>
        </div>
    );
};

export default React.memo(UserCard);