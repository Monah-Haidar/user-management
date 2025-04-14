export enum Status {
    Active = 'active',
    Locked = 'locked',
}

export interface UserCardProps {
    className?: string;
    firstName: string;
    lastName: string;
    email: string;
    status: Status;
    dateOfBirth: Date;
}