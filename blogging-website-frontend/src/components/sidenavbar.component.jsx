import { Outlet } from "react-router-dom";

const SideNav = () => {
    return (
        <>
            <h1>This is a side nav bar</h1>

            <Outlet />
        </>
    )
}

export default SideNav;
