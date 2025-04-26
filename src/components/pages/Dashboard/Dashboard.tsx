import { TextInput } from "../../atoms/TextInput";
import { UserCard } from "../../molecules/UserCard";
import { useUsers } from "../../../hooks/useUsers";
import { useSearch } from "../../../hooks/useSearch";
import React, { useCallback, useMemo, useState } from "react";
import { User } from "../../../hooks/useUsers/useUsers.type";

function Dashboard() {
    const [keyword, setKeyword] = useState("");

    const { data: userData, isLoading: loadingUsers } = useUsers();
    const users = userData?.result.data.users || [];

    const { data: searchedUserData, isLoading: searchIsLoading } = useSearch(keyword);
    const searchedUsers = searchedUserData?.result.data.users || [];

    const handleSearchChange = useCallback(
        (e: React.ChangeEvent<HTMLInputElement>) => {
            setKeyword(e.target.value);
        },
        []
    );

    const displayUsers = useMemo(() => {
        return keyword.trim().length > 0 ? searchedUsers : users;
    }, [keyword, searchedUsers, users]);

    const showLoading = searchIsLoading || (loadingUsers && !keyword.trim());
    const showNotFound = !showLoading && displayUsers.length === 0 && (keyword.trim().length > 0 || users.length === 0);

    return (
        <div className={`bg-gray-100 dark:bg-gray-900 min-h-screen`}>
            <div className={`section-padding`}>
                <TextInput
                    placeholder="Search users..."
                    value={keyword}
                    onChange={handleSearchChange}
                />
            </div>

            {showLoading && (
                <p className={`col-span-full text-center text-gray-500 text-xl`}>
                    Loading...
                </p>
            )}

            {showNotFound && (
                <p className={`col-span-full text-center text-gray-500 text-xl`}>
                    User not found...
                </p>
            )}

            <div className="section-padding mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {displayUsers.map((user: User) => (
                    <UserCard
                        key={user.id}
                        id={user.id}
                        firstName={user.firstName}
                        lastName={user.lastName}
                        email={user.email}
                        status={user.status}
                        dateOfBirth={user.dateOfBirth}
                    />
                ))}
            </div>
        </div>
    );
}

export default Dashboard;
