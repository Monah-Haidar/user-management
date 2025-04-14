import {TextInput} from "../../atoms/TextInput";
import {UserCard, Status} from "../../molecules/UserCard";


function Dashboard() {

    const users = [
        {
            name: "John Doe",
            email: "john.doe@example.com",
            status: Status.Active,
            dateOfBirth: new Date("1990-05-15"),
        },
        {
            name: "Jane Smith",
            email: "jane.smith@example.com",
            status: Status.Locked,
            dateOfBirth: new Date("1988-10-22"),
        },
        {
            name: "Alice Johnson",
            email: "alice.johnson@example.com",
            status: Status.Active,
            dateOfBirth: new Date("1995-02-10"),
        },
        {
            name: "Bob",
            email: "bob.martin@example.com",
            status: Status.Locked,
            dateOfBirth: new Date("1980-08-05"),
        },
        {
            name: "Charlie Brown",
            email: "charlie.brown@example.com",
            status: Status.Active,
            dateOfBirth: new Date("1992-11-30"),
        },
        {
            name: "David Lee",
            email: "david.lee@example.com",
            status: Status.Locked,
            dateOfBirth: new Date("1987-07-14"),
        },
        {
            name: "Eve",
            email: "eve.green@example.com",
            status: Status.Active,
            dateOfBirth: new Date("1993-09-21"),
        },
        {
            name: "Frank White",
            email: "frank.white@example.com",
            status: Status.Active,
            dateOfBirth: new Date("1994-01-25"),
        },
        {
            name: "Grace Black",
            email: "grace.black@example.com",
            status: Status.Locked,
            dateOfBirth: new Date("1985-03-17"),
        },
        {
            name: "Hannah",
            email: "hannah.purple@example.com",
            status: Status.Active,
            dateOfBirth: new Date("1996-12-03"),
        },

    ]

    return (
        <>
            <div className={`section-padding`}><TextInput placeholder='Search users...' /></div>

            <div
                className="section-padding mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {users.map((user, index) => (
                    <UserCard key={index} name={user.name} email={user.email} status={user.status}
                              dateOfBirth={user.dateOfBirth}/>
                ))}
            </div>
        </>
    )
}

export default Dashboard;
