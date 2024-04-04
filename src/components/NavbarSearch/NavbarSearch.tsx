import { useUserContext } from "../../context/UserContext";
import Search from "../header/Search";

const NavbarSearch = () => {
  const { userData } = useUserContext();

  return (
    <nav className="flex justify-center items-center ">
      {userData.userActualRole === "v" || userData.userActualRole === "u" ? (
        <Search handleSubmit={() => console.log("Search Submit")} />
      ) : null}
    </nav>
  );
};

export default NavbarSearch;
