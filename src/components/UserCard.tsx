import PrimaryButton from "./atoms/PrimaryButton.tsx";
import DangerButton from "./atoms/DangerButton.tsx";

export enum Status {
    Active = 'active',
    Locked = 'locked',
}

interface Props {
    className?: string;
    name: string;
    email: string;
    status: Status;
    dateOfBirth: Date;
}

const UserCard = ({className = '', name, email, status, dateOfBirth}: Props) => {

    const getInitials = (name: string) => {
        const [first = '', last = ''] = name.trim().split(' ');
        return `${first.charAt(0)}${last.charAt(0)}`.toUpperCase();
    };


    return (
        <div className={`flex flex-col w-full p-4 bg-white shadow-lg rounded-md gap-4` + className}>
            <div>
                <div className={`flex items-center justify-center`}>
                    <span
                        className={`p-4 w-16 h-16 flex items-center justify-center text-xl font-bold text-white rounded-full bg-primary`}>
                        {getInitials(name)}
                    </span>
                </div>

                <div className={`flex flex-col gap-1`}>
                    <p className={`text-xl font-semibold text-gray-800`}>{name}</p>
                    <p className={`text-xs font-semibold text-gray-500`}>Email: {email}</p>
                    <p className={`text-xs font-semibold text-gray-500`}>Status: {status}</p>
                    <p className={`text-xs font-semibold text-gray-500`}>Date of
                        Birth: {dateOfBirth.toLocaleDateString()}</p>
                </div>

            </div>


            <div className={`flex items-center gap-x-2 justify-end`}>
                <PrimaryButton className={``}>Edit</PrimaryButton>
                <DangerButton className={``}>Delete</DangerButton>
            </div>
        </div>
    );
};

export default UserCard;