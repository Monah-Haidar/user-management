import { Status } from "../../components/molecules/UserCard";

export interface User {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    status: Status;
    dateOfBirth: Date;
}

export interface FetchResponse {
    status: number;
    result: {
        data: {
            users: User[];
        }
        message: string;
    };
}
