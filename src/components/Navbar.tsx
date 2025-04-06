import PrimaryButton from "./atoms/PrimaryButton.tsx";
import DangerButton from "./atoms/DangerButton.tsx";
import {IoMoonOutline} from "react-icons/io5";
import {IoMenu} from "react-icons/io5";


const Navbar = () => {


    return (
        <nav className={`py-4 px-6 h-16 flex items-center justify-between bg-primary`}>
            <h1 className={`text-white text-xl`}>User Management</h1>
            <div className="hidden sm:flex items-center justify-between gap-4">
                <PrimaryButton className={``}>Create User</PrimaryButton>
                <DangerButton className={``}>Logout</DangerButton>
                <span className={`px-4 py-2 cursor-pointer`}><IoMoonOutline className={`text-white`}/></span>
            </div>
            <div className={`cursor-pointer flex sm:hidden`}><IoMenu className={`text-white text-3xl`}/></div>
        </nav>
    );
};

export default Navbar;