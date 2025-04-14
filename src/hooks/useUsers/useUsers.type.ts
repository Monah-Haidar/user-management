import {Status} from "../../components/molecules/UserCard";


export interface User {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    status: Status;
    dateOfBirth: Date;
}