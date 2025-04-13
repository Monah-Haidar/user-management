import {Navbar} from "../components/molecules/Navbar";
import {Outlet} from "react-router-dom";

const Layout = () => {
    return (
        <>
            <Navbar />
            <div id="main">
                <Outlet />
            </div>
        </>
    );
};

export default Layout;