export enum Status {
    Active = 'active',
    Locked = 'locked',
}

export interface UserCardProps {
    id: string;
    className?: string;
    firstName: string;
    lastName: string;
    email: string;
    status: Status;
    dateOfBirth: string;
}