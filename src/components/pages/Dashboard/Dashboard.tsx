import {TextInput} from "../../atoms/TextInput";
import {UserCard} from "../../molecules/UserCard";
import {useUsers} from "../../../hooks/useUsers";
import {useSearch} from "../../../hooks/useSearch";
import React, {useCallback, useMemo, useState} from "react";


function Dashboard() {

    const [keyword, setKeyword] = useState("");

    const {users, isLoading} = useUsers();
    const {searchedUsers, isLoading: searchIsLoading} = useSearch(keyword);



    // const hasKeyword = keyword.trim().length > 0;

    // const displayUsers = hasKeyword ? searchedUsers : users;

    const displayUsers = useMemo(() => {
        return keyword.trim().length > 0 ? searchedUsers : users;
    }, [keyword, searchedUsers, users]);



    const handleSearchChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        setKeyword(e.target.value);
    }, []);

    return (
        <>


            <div className={`section-padding`}>
                <TextInput
                    placeholder='Search users...'
                    value={keyword}
                    onChange={handleSearchChange}
                />

            </div>

            {(searchIsLoading || isLoading) && <p className={`col-span-full text-center text-gray-500 text-xl`}>Loading...</p>}

            <div
                className="section-padding mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {displayUsers.map((user) => (
                    <UserCard key={user.id} firstName={user.firstName} lastName={user.lastName} email={user.email} status={user.status}
                              dateOfBirth={user.dateOfBirth}/>
                ))}
            </div>

        </>
    )
}

export default Dashboard;
