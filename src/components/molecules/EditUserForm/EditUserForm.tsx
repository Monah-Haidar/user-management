import { FieldValues, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Status } from "../UserCard";
import { TextInput } from "../../atoms/TextInput";
import { schema, FormData } from "../CreateUserForm/CreateUserForm";

const EditUserForm = () => {
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
    } = useForm<FormData>({
        resolver: zodResolver(schema),
    });

    const onSubmit = (data: FieldValues) => {
        console.log(data);
    };

    return (
        <>
            <form
                className={`flex flex-col gap-4 w-full rounded-lg `}
                onSubmit={handleSubmit(onSubmit)}
            >
                <div className={`flex flex-col w-full`}>
                    <label
                        htmlFor="firstName"
                        className={`text-base text-gray-800 dark:text-gray-200`}
                    >
                        First Name
                    </label>
                    <TextInput type="text" {...register("firstName")} />
                    {errors.firstName && (
                        <p
                            className={`p-1 text-sm text-red-800 dark:text-red-100`}
                        >
                            {errors.firstName.message}
                        </p>
                    )}
                </div>

                <div className={`flex flex-col w-full`}>
                    <label
                        htmlFor="lastName"
                        className={`text-base text-gray-800 dark:text-gray-200`}
                    >
                        Last Name
                    </label>
                    <TextInput type="text" {...register("lastName")} />
                    {errors.lastName && (
                        <p
                            className={`p-1 text-sm text-red-800 dark:text-red-100`}
                        >
                            {errors.lastName.message}
                        </p>
                    )}
                </div>

                <div className={`flex flex-col w-full`}>
                    <label
                        htmlFor="email"
                        className={`text-base text-gray-800 dark:text-gray-200`}
                    >
                        Email
                    </label>
                    <TextInput type="email" {...register("email")} />
                    {errors.email && (
                        <p
                            className={`p-1 text-sm text-red-800 dark:text-red-100`}
                        >
                            {errors.email.message}
                        </p>
                    )}
                </div>

                <div className={`flex flex-col w-full`}>
                    <label
                        htmlFor="dateOfBirth"
                        className={`text-base text-gray-800 dark:text-gray-200`}
                    >
                        Date of Birth
                    </label>
                    <TextInput type="date" {...register("dateOfBirth")} />
                    {errors.dateOfBirth && (
                        <p
                            className={`p-1 text-sm text-red-800 dark:text-red-100`}
                        >
                            {errors.dateOfBirth.message}
                        </p>
                    )}
                </div>

                <div className={`flex flex-col w-full`}>
                    <label
                        htmlFor="status"
                        className={`text-base text-gray-800 dark:text-gray-200`}
                    >
                        Status
                    </label>

                    <select
                        {...register("status")}
                        className={`px-4 py-2 rounded-sm border border-gray-300 focus:border-primary focus:ring-primary outline outline-none placeholder-gray-500 placeholder-opacity-100   bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 dark:placeholder-gray-400`}
                    >
                        <option value={Status.Active}>Active</option>
                        <option value={Status.Locked}>Locked</option>
                    </select>

                    {errors.status && (
                        <p
                            className={`p-1 text-sm text-red-800 dark:text-red-100`}
                        >
                            {errors.status.message}
                        </p>
                    )}
                </div>

                <div className={`flex justify-center items-center mt-4`}>
                    <button
                        type="submit"
                        className={`inline-flex items-center rounded-sm border border-transparent bg-primary px-4 py-2 text-sm font-semibold text-white cursor-pointer transition duration-150 ease-in-out hover:bg-blue-400`}
                    >
                        {isSubmitting ? "Submitting..." : "Create User"}
                    </button>
                </div>
            </form>
        </>
    );
};

export default EditUserForm;
