import {IoMoonOutline} from "react-icons/io5";
import {IoMenu} from "react-icons/io5";


const Navbar = () => {
    
    return (
        <nav className={`py-4 px-6 h-16 flex items-center justify-between bg-primary`}>
            <h1 className={`text-white text-xl`}>User Management</h1>
            <div className="hidden sm:flex items-center justify-between gap-4">
                <button
                    className={
                        `inline-flex items-center rounded-sm border border-transparent bg-white px-4 py-2 text-sm font-semibold text-primary cursor-pointer transition duration-150 ease-in-out hover:bg-neutral-400`}
                >
                    Create User
                </button>
                <button
                    className={
                        `inline-flex items-center rounded-sm border border-transparent bg-red-600 px-4 py-2 text-sm font-semibold text-white cursor-pointer transition duration-150 ease-in-out hover:bg-red-400 hover:text-white`}
                >
                    Logout
                </button>

                <span className={`px-4 py-2 cursor-pointer`}><IoMoonOutline className={`text-white`}/></span>
            </div>
            <div className={`cursor-pointer flex sm:hidden`}><IoMenu className={`text-white text-3xl`}/></div>
        </nav>
    );
};

export default Navbar;