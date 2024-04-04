import { NavLink } from "react-router-dom";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import NavbarSearch from "./NavbarSearch/NavbarSearch";
import UserProfile from "./UserProfile";
import { useUserContext } from "../../context/UserContext";
import MainNav from "./MainNav";

type HeaderProps = {
  handleLoginClick: () => void
}

function Header( {handleLoginClick}: HeaderProps) {
  const {userData} = useUserContext();



  return (
    <>
      <header className="flex w-[100%]  justify-between items-center pt-5">
        <ul className="flex items-center gap-6">
          <li className="px-20 font-josefin text-[40px] font-bold relative">
            <NavLink to="/inicio">Eatsquality</NavLink>
          </li>
        </ul>

        <div className="">
          <MainNav /> 
        </div>


        <ul className="flex items-center gap-3 pr-20">
          <li className="font-josefin text-[26px]">

            {
              userData.userActualRole === "v"
                ? <button type="button" onClick={handleLoginClick}
                    className="bg-colorYellowBg rounded-full py-2 px-6"
                  >
                    Iniciar Sesión
                  </button>

                : <UserProfile handleLogOutClick={() => console.log("Logout")}/>
            }

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
