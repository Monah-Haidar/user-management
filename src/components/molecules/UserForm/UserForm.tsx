import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Status } from "../UserCard";

const schema = z.object({
    firstName: z
        .string({
            required_error: "First name is required",
            invalid_type_error: "First name must be a string",
        })
        .min(3, { message: "First name must be at least 3 characters long" })
        .max(20, { message: "First name must be at most 20 characters long" }),

    lastName: z
        .string({
            invalid_type_error: "Last name must be a string",
        })
        .min(3, { message: "Last name must be at least 3 characters long" })
        .max(20, { message: "Last name must be at most 20 characters long" })
        .optional(),

    email: z
        .string({
            required_error: "Email is required",
            invalid_type_error: "Email must be a string",
        })
        .email({ message: "Invalid email address" }),

    dateOfBirth: z.date({
        required_error: "Please select a date and time",
        invalid_type_error: "That's not a date!",
    }),

    status: z.enum([Status.Active, Status.Locked], {
        required_error: "Status is required",
        invalid_type_error: "Status must be either active or locked",
    }),
});

const UserForm = () => {
    return <div>UserForm</div>;
};

export default UserForm;
