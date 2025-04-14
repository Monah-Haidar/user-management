import {TextInput} from "../../atoms/TextInput";
import {UserCard} from "../../molecules/UserCard";
import {useUsers} from "../../../hooks/useUsers";
import {Navbar} from "../../molecules/Navbar";
import useSearch from "../../../hooks/useSearch.ts";
import {useState} from "react";


function Dashboard() {

    const [keyword, setKeyword] = useState("");

    const {users, isLoading} = useUsers();
    const {searchedUsers} = useSearch(keyword);


    const hasKeyword = keyword.trim().length > 0;

    const displayUsers = hasKeyword ? searchedUsers : users;

    return (
        <>
            <Navbar />

            <div className={`section-padding`}>
                <TextInput
                    placeholder='Search users...'
                    value={keyword}
                    onChange={(e) => setKeyword(e.target.value)}
                />

            </div>

            <div
                className="section-padding mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {displayUsers.map((user, index) => (
                    <UserCard key={index} firstName={user.firstName} lastName={user.lastName} email={user.email} status={user.status}
                              dateOfBirth={user.dateOfBirth}/>
                ))}
            </div>
        </>
    )
}

export default Dashboard;
