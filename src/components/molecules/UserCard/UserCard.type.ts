export enum Status {
    Active = 'active',
    Locked = 'locked',
}

export interface UserCardProps {
    className?: string;
    name: string;
    email: string;
    status: Status;
    dateOfBirth: Date;
}