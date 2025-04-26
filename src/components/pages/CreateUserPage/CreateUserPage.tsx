import { CreateUserForm } from "../../molecules/CreateUserForm";

const CreateUserPage = () => {
    return (
        <>
            <section className="section-padding flex justify-center bg-gray-100 dark:bg-gray-900 min-h-screen">
                <div
                    className={`p-6 mt-4 w-lg h-fit bg-white shadow-lg dark:bg-gray-800 rounded-md`}
                >
                    <div className={`flex flex-col gap-1 mb-6 text-center`}>
                        <h1
                            className={`text-3xl font-bold text-gray-800 dark:text-gray-200`}
                        >
                            Create User
                        </h1>
                        <p className={`text-gray-600 dark:text-gray-400`}>
                            Fill in the details to create a new user.
                        </p>
                    </div>
                    <CreateUserForm />
                </div>
            </section>
        </>
    );
};

export default CreateUserPage;
