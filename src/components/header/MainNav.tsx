import { NavLink } from "react-router-dom";
import { useUserContext } from "../../context/UserContext"


function MainNav() {
	const {userData} = useUserContext();
	const activeClassName = "underline underline-offset-4";

	return (
		<div className="">
			<ul className="flex justify-center items-center gap-8 pr-[120px]">

				{/* // OPCIONES DE VISITANTE	 */}
				{
					userData.userActualRole === "v" && (
						<>
							<li className="font-josefin text-[19px]">
								<NavLink
									to="/inicio/pizza"
									className={({ isActive }) =>
										isActive ? activeClassName : undefined
									}
								>
									Pizzas
								</NavLink>
							</li>
		
							<li className="font-josefin text-[19px]">
								<NavLink
									to="/inicio/hamburguesas"
									className={({ isActive }) =>
										isActive ? activeClassName : undefined
									}
								>
									Hamburguesas
								</NavLink>
							</li>

							<li className="font-josefin text-[19px]">
								<NavLink
									to="/inicio/asiaticas"
									className={({ isActive }) =>
										isActive ? activeClassName : undefined
									}
								>
									Comida Asiática
								</NavLink>
							</li>
						</>
					)
				}


				{/* // OPCIONES DE CLIENTE	 */}
				{
					userData.userActualRole === "c" && (
						<>
							<li className="font-josefin text-[19px]">
								<NavLink
									to="/inicio/pizza"
									className={({ isActive }) =>
										isActive ? activeClassName : undefined
									}
								>
									Pizzas
								</NavLink>
							</li>
		
							<li className="font-josefin text-[19px]">
								<NavLink
									to="/inicio/hamburguesas"
									className={({ isActive }) =>
										isActive ? activeClassName : undefined
									}
								>
									Hamburguesas
								</NavLink>
							</li>
		
							<li className="font-josefin text-[19px]">
								<NavLink
									to="/mis-pedidos"
									className={({ isActive }) =>
										isActive ? activeClassName : undefined
									}
								>
									Mis Pedidos
								</NavLink>
							</li>
						</>
					)
				}


				{/* // OPCIONES DE RESTAURANTE	 */}
				{
					userData.userActualRole === "r" && (
						<>
							<li className="font-josefin text-[19px]">
								<NavLink
									to="/mi-restaurante"
									className={({ isActive }) =>
										isActive ? activeClassName : undefined
									}
								>
									Mi Restaurante
								</NavLink>
							</li>
		
							<li className="font-josefin text-[19px]">
								<NavLink
									to="/pedidos-restaurante"
									className={({ isActive }) =>
										isActive ? activeClassName : undefined
									}
								>
									Pedidos Recibidos
								</NavLink>
							</li>
						</>
					)
				}


				{/* // OPCIONES DE DELIVERY	 */}
				{
					userData.userActualRole === "d" && (
						<>
							<li className="font-josefin text-[19px]">
								<NavLink
									to="/pedidos-delivery"
									className={({ isActive }) =>
										isActive ? activeClassName : undefined
									}
								>
									Pedidos Recibidos
								</NavLink>
							</li>
						</>
					)
				}


			</ul>
		</div>
	)
}

export default MainNav
