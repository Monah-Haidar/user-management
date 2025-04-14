import {IoMoonOutline, IoSunnyOutline} from "react-icons/io5";
import {IoMenu} from "react-icons/io5";
import useAuthStore from "../../../stores/authStore/store";
import useThemeStore from "../../../stores/themeStore/store";


const Navbar = () => {
    const logout = useAuthStore(state => state.logout);
    const accessToken = useAuthStore(state => state.accessToken);

    const theme = useThemeStore(state => state.theme);
    const toggleTheme = useThemeStore(state => state.toggleTheme);


    return (
        <nav className={`py-4 px-6 h-16 flex items-center justify-between bg-primary dark:bg-gray-800`}>
            <h1 className={`text-white text-xl dark:text-white`}>User Management</h1>
            <div className="hidden sm:flex items-center justify-between gap-4">
                {accessToken && (
                    <>
                        <button
                            className={
                                `inline-flex items-center rounded-sm border border-transparent bg-white px-4 py-2 text-sm font-semibold text-primary cursor-pointer transition duration-150 ease-in-out hover:bg-neutral-400 dark:hover:bg-neutral-600 `}
                        >
                            Create User
                        </button>
                        <button
                            className={
                                `inline-flex items-center rounded-sm border border-transparent bg-red-600 px-4 py-2 text-sm font-semibold text-white cursor-pointer transition duration-150 ease-in-out hover:bg-red-400 hover:text-white`}
                            onClick={logout}
                        >
                            Logout
                        </button>
                    </>

                )}
                {/*<span className={`px-4 py-2 cursor-pointer`}><IoMoonOutline className={`text-white`}/></span>*/}
                <span className="px-4 py-2 cursor-pointer" onClick={toggleTheme}>
                  {theme === 'dark' ? (
                      <IoSunnyOutline className="text-white"/>
                  ) : (
                      <IoMoonOutline className="text-white"/>
                  )}
                </span>
            </div>
            <div className={`cursor-pointer flex sm:hidden`}><IoMenu className={`text-white text-3xl`}/></div>
        </nav>
    );
};

export default Navbar;