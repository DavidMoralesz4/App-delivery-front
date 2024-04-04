import { NavLink } from "react-router-dom";
import { useUserContext } from "../../context/UserContext"


function MainNav() {
	const {userData} = useUserContext();
	const activeClassName = "underline underline-offset-4";

	return (
		<div className="">

			{/* // OPCIONES DE VISITANTE	 */}
			{
				userData.userActualRole === "v" && (
					<ul className="flex justify-center items-center gap-5 pr-[120px]">
          <li className="font-josefin text-[19px]">
            <NavLink
              to="/pizza"
              className={({ isActive }) =>
                isActive ? activeClassName : undefined
              }
            >
              Pizzas
            </NavLink>
          </li>

          <li className="font-josefin text-[19px]">
            <NavLink
              to="/hamburguesas"
              className={({ isActive }) =>
                isActive ? activeClassName : undefined
              }
            >
              Hamburguesas
            </NavLink>
          </li>

          <li className="font-josefin text-[19px]">
            <NavLink
              to="/conocenos"
              className={({ isActive }) =>
                isActive ? activeClassName : undefined
              }
            >
              Conócenos
            </NavLink>
          </li>
        </ul>
				)
			}
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
        </ul>
			
		</div>
	)
}

export default MainNav
