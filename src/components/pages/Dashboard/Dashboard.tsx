import {TextInput} from "../../atoms/TextInput";
import {UserCard} from "../../molecules/UserCard";
import useUsers from "../../../hooks/useUsers.ts";


function Dashboard() {
    const {users, isLoading} = useUsers();


    console.log("Dashboard", users);



    return (
        <>
            <div className={`section-padding`}><TextInput placeholder='Search users...' /></div>

            <div
                className="section-padding mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {users.map((user, index) => (
                    <UserCard key={index} firstName={user.firstName} lastName={user.lastName} email={user.email} status={user.status}
                              dateOfBirth={user.dateOfBirth}/>
                ))}
            </div>
        </>
    )
}

export default Dashboard;
