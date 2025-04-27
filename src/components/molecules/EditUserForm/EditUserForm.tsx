import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Navigate, NavLink, useLocation, useNavigate } from "react-router-dom";
import { useEditUsers } from "../../../hooks/useEditUsers";
import { TextInput } from "../../atoms/TextInput";
import { FormData, schema } from "../CreateUserForm/CreateUserForm";
import { Status } from "../UserCard";

const EditUserForm = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const userData = location.state?.user;

    if (!userData) {
        return <Navigate to="/dashboard" replace />;
    }

    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting, isDirty },
    } = useForm<FormData>({
        resolver: zodResolver(schema),
        defaultValues: {
            firstName: userData.firstName,
            lastName: userData.lastName || "",
            email: userData.email,
            dateOfBirth: userData.dateOfBirth,
            status: userData.status,
        },
    });

    const editUser = useEditUsers();

    const onSubmit = async (data: FormData) => {
     
        const payload = {
            firstName: data.firstName,
            lastName: data.lastName || "",
            email: data.email,
            status: data.status,
            dateOfBirth: data.dateOfBirth,
        };
        
        await editUser.mutateAsync({
            id: userData.id.toString(),
            data: payload,
        });

        navigate('/dashboard');
       
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

                <div className={`flex justify-center items-center mt-4 gap-4`}>
                    <NavLink to={`/dashboard`}>
                        <button
                            className={`inline-flex items-center rounded-sm border border-transparent bg-red-600 px-4 py-2 text-sm font-semibold text-white cursor-pointer transition duration-150 ease-in-out hover:bg-red-400 hover:text-white`}
                        >
                            Cancel
                        </button>
                    </NavLink>
                    <button
                        type="submit"
                        disabled={isSubmitting || !isDirty}
                        className={`inline-flex items-center rounded-sm border border-transparent bg-primary px-4 py-2 text-sm font-semibold text-white cursor-pointer transition duration-150 ease-in-out hover:bg-blue-400 ${
                            (isSubmitting || !isDirty) ? 'opacity-50 cursor-not-allowed' : ''
                        }`}
                    >
                        {isSubmitting ? "Updating..." : "Update User"}
                    </button>
                </div>
            </form>
        </>
    );
};

export default EditUserForm;
