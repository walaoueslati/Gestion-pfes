import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar"
const NavbarLayout = () => {
  return (
    <div>
        <Navbar showUserMenu={false} showSidebarToggle={false} />

        <div>
            <Outlet/>
        </div>
    </div>
  )
}

export default NavbarLayout