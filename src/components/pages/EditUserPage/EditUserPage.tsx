import { EditUserForm } from "../../molecules/EditUserForm";

const EditUserPage = () => {
    return (
        <>
            <section className="section-padding flex justify-center bg-gray-100 dark:bg-gray-900 min-h-screen">
                <div
                    className={`p-6 mt-4 w-lg h-fit bg-white shadow-lg dark:bg-gray-800 rounded-md`}
                >
                    <h1
                        className={`mb-6 text-center text-3xl font-bold text-gray-800 dark:text-gray-200`}
                    >
                        Edit User
                    </h1>

                    <EditUserForm />
                </div>
            </section>
        </>
    );
};

export default EditUserPage;
