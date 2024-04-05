import { useUserContext } from "../../../context/UserContext";
import Search from "../Search";

const NavbarSearch = () => {
  const { userData } = useUserContext();

  return (
    <nav className="flex justify-center items-center ">
      {userData.userActualRole === "v" || userData.userActualRole === "c" ? (
        <Search handleSubmit={() => console.log("Search Submit")} />
      ) : null}
    </nav>
  );
};

export default NavbarSearch;
