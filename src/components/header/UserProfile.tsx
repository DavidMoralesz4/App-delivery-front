import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';
import { UserActualRoleType, UserType, useUserContext } from '../../context/UserContext';
import { Link } from "react-router-dom";

type UserProfileProps = {
	handleLogOutClick: () => void
}

function UserProfile( {handleLogOutClick}: UserProfileProps) {
	const {userData, setUserData} = useUserContext();

	
	function changeActualRole(newRole: UserActualRoleType) {

		const newUserData: UserType = {
			userName: userData.userName,
			userRoles: userData.userRoles,
			userActualRole: newRole
		}

		setUserData(newUserData);
	}




	return (
		<>
			<div className="">
				<p>{userData.userName}</p>

				<div>
					<ArrowRightIcon />
				</div>
			</div>


			<div className="">

				{
					// SECCIÓN DE CAMBIO DE ROL. SÓLO SE MUESTRA SI EL USUARIO TIENE MÁS DE UN ROL

					userData.userRoles !== "c" && userData.userRoles !== "r" && userData.userRoles !== "d"					
							?(							
								<div className="">
									<p className="">- Tu Perfil -</p>

										userData.userRoles === "cr" && (
											<button type="button" onClick={() => changeActualRole("c")} className="" >
												Cliente
											</button>
										
											<button type="button" onClick={() => changeActualRole("r")} className="" >
												Restaurante
											</button>
										)

										userData.userRoles === "cd" && (
											<button type="button" onClick={() => changeActualRole("c")} className="" >
												Cliente
											</button>
										
											<button type="button" onClick={() => changeActualRole("d")} className="" >
												Repartidor
											</button>
										)

										userData.userRoles === "rd" && (
											<button type="button" onClick={() => changeActualRole("r")} className="" >
												Restaurante
											</button>
										
											<button type="button" onClick={() => changeActualRole("d")} className="" >
												Repartidor
											</button>
										)

										userData.userRoles === "crd" && (
											<button type="button" onClick={() => changeActualRole("c")} className="" >
												Cliente
											</button>

											<button type="button" onClick={() => changeActualRole("r")} className="" >
												Restaurante
											</button>
										
											<button type="button" onClick={() => changeActualRole("d")} className="" >
												Repartidor
											</button>
										)
								</div>
							)
							:	null
				}

				<Link to="/mis-datos" className="">
					Mis Datos
				</Link>

				<div className="">
					<PowerSettingsNewIcon />

					<button type="button" onClick={() => handleLogOutClick()} className="" >
						Deslogarme
					</button>
				</div>


			</div>

		</>
	)
}

export default UserProfile
