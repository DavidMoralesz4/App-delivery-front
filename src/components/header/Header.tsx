import { NavLink } from "react-router-dom";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import NavbarSearch from "../NavbarSearch/NavbarSearch";
import UserProfile from "./UserProfile";

function Header() {
  const activeClassName = "underline underline-offset-4";

  return (
    <>
      <header className="flex w-[100%]  justify-between items-center pt-5">
        <ul className="flex items-center gap-6">
          <li className="px-20 font-josefin text-[40px] font-bold relative">
            <NavLink to="/">Eatsquality</NavLink>
          </li>
        </ul>

        <ul className="flex justify-center items-center gap-5 pr-[120px]">
          <li className="font-josefin text-[19px]">
            <NavLink
              to="/pide"
              className={({ isActive }) =>
                isActive ? activeClassName : undefined
              }
            >
              Pide
            </NavLink>
          </li>

          <li className="font-josefin text-[19px]">
            <NavLink
              to="/mi-orden"
              className={({ isActive }) =>
                isActive ? activeClassName : undefined
              }
            >
              Mi orden
            </NavLink>
          </li>

          <li className="font-josefin text-[19px]">
            <NavLink
              to="/factura"
              className={({ isActive }) =>
                isActive ? activeClassName : undefined
              }
            >
              Factura
            </NavLink>
          </li>
          {/* <div className="">
            {userData.userActualRole === "v" ||
            userData.userActualRole === "u" ? (
              <Search handleSubmit={() => console.log("Search Submit")} />
            ) : null}
          </div> */}
        </ul>

        <ul className="flex items-center gap-3 pr-20">
          <li className="font-josefin text-[26px]">
            <NavLink to="" id="email">
              Bienvenid@
            </NavLink>
            <UserProfile handleLogOutClick={() => console.log("Logout")}/>
          </li>

          <li className="h-8 w-8">
            <NavLink to="" className="flex ">
              <ShoppingCartIcon />
              <div className="">0</div>
            </NavLink>
          </li>
        </ul>
      </header>
      <NavbarSearch />
    </>
  );
}

export default Header;
