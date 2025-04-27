import { Status } from "../../components/molecules/UserCard";

export interface User {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    status: Status;
    dateOfBirth: string;
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
