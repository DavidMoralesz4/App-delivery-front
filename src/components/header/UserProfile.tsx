import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { UserActualRoleType, UserType, useUserContext } from '../../context/UserContext';
import { Link } from "react-router-dom";
import { useLayoutEffect, useRef, useState } from "react";

type UserProfileProps = {
	handleLogOutClick: () => void
}

function UserProfile( {handleLogOutClick}: UserProfileProps) {
	const {userData, setUserData} = useUserContext();
	const [showOptions, setShowOptions] = useState(false);
	
	//CLASES PARA EL CONTENEDOR FLOTANTE CON LAS OPCIONES, VARÍAN SEGÚN EL ESTADO showOptions
	let optionsStyles = "";

	if (showOptions === true) {
		optionsStyles = "visible absolute top-[4rem] w-[12vw] overflow-hidden bg-colorYellowBg pb-2 border-2 border-black border-solid rounded-xl shadow-lg text-center";
	} else {
		optionsStyles = "invisible absolute top-[2rem]";
	}

	//CLASES PARA EL ROL SELECCIONADO, VARÍAN SEGÚN EL ESTADO showOptions
	
	let selectedRoleStyles = "text-xl text-[#60A5FA]";

	const clientRoleElement = useRef(null);
	const restaurantRoleElement = useRef(null);
	const deliveryRoleElement = useRef(null);


	function changeActualRole(newRole: UserActualRoleType) {

		const newUserData: UserType = {
			userName: userData.userName,
			userRoles: userData.userRoles,
			userActualRole: newRole
		}

		setUserData(newUserData);
	}

	function changeOptionsVisibility() {
		if (showOptions === true) {
			setShowOptions(false);
		} else {
			setShowOptions(true);
		}
	}


	//USAMOS useLayoutEffect PARA RESALTAR EL BOTÓN DE CAMBIO DE ROL QUE CORRESPONDA AL ROL ACTUAL
	useLayoutEffect( () => {
		if (userData.userRoles !== "c") {

			//ELIMINAMOS LA CLASE CON EL TEXTO RESALTADO DE TODOS LOS BOTONES DE CAMBIO DE ROL (PARA QUE NO SE VAYAN SUMANDO Y ACABEMOS CON TODOS RESALTADOS)
			if (clientRoleElement.current !== null) {
				(clientRoleElement.current as HTMLButtonElement).classList.remove("text-[#3B82F6]");
			} 

			if (restaurantRoleElement.current !== null) {
				(restaurantRoleElement.current as HTMLButtonElement).classList.remove("text-[#3B82F6]");
			} 

			if (deliveryRoleElement.current !== null) {
				(deliveryRoleElement.current as HTMLButtonElement).classList.remove("text-[#3B82F6]");
			} 


			//AÑADIMOS UNA CLASE CON EL TEXTO RESALTADO PARA EL BOTÓN DE CAMBIO DE ROL QUE COINCIDA CON EL ACTUAL
			if (userData.userActualRole === "c" && clientRoleElement.current !== null){
				(clientRoleElement.current as HTMLButtonElement).classList.add("text-[#3B82F6]");

			} else if (userData.userActualRole === "r" && restaurantRoleElement.current !== null){
				(restaurantRoleElement.current as HTMLButtonElement).classList.add("text-[#3B82F6]");

			} else if (userData.userActualRole === "d" && deliveryRoleElement.current !== null){
				(deliveryRoleElement.current as HTMLButtonElement).classList.add("text-[#3B82F6]");
			}
		}
	});


	return (
		<>
			<div className="relative select-none">
				
				<div className="flex items-center cursor-pointer"
					onClick={changeOptionsVisibility}
				>
					<p className="font-josefin text-[26px]">
						{userData.userName}
					</p>

					<div className="text-[50px] pb-2">
						{
							showOptions === false
								?	<ArrowRightIcon fontSize="inherit" />
								:	<ArrowDropDownIcon fontSize="inherit" />	
						}
					</div>
				</div>


			
				<div className={optionsStyles}>

					{
						// SECCIÓN DE CAMBIO DE ROL. SÓLO SE MUESTRA SI EL USUARIO TIENE MÁS DE UN ROL (No es sólo "Cliente")

						userData.userRoles !== "c"
								?(							
									<div className="flex flex-col bg-[#A7F3D0]">
										<p className="text-2xl bg-[#D1D5DB] pt-2">Tu Perfil</p>

											{
												userData.userRoles === "cr" && (
													<>
														<button type="button" onClick={() => changeActualRole("c")} className="" >
															Cliente
														</button>
													
														<button type="button" onClick={() => changeActualRole("r")} className="" >
															Restaurante
														</button>
													</>
												)
											}

											{
												userData.userRoles === "cd" && (
													<>
														<button type="button" onClick={() => changeActualRole("c")} className="" >
															Cliente
														</button>
													
														<button type="button" onClick={() => changeActualRole("d")} className="" >
															Repartidor
														</button>
													</>
												)
											}

											{
												userData.userRoles === "crd" && (
													<>
														<button type="button" id="client" ref={clientRoleElement} onClick={() => changeActualRole("c")} className="text-lg" >
															Cliente
														</button>
		
														<button type="button" id="restaurant" ref={restaurantRoleElement} onClick={() => changeActualRole("r")} className="text-lg" >
															Restaurante
														</button>
													
														<button type="button" id="delivery" ref={deliveryRoleElement} onClick={() => changeActualRole("d")} className="text-lg" >
															Repartidor
														</button>
													</>
												)
											}
									</div>

								)
								:	null
					}

					<Link to="/mis-datos" className="text-xl">
						Mis Datos
					</Link>

					<div className="text-xl">
						<button type="button" onClick={() => handleLogOutClick()} className="relative" >
							Deslogarme

							<div className="absolute -left-8 bottom-1">
								<PowerSettingsNewIcon />
							</div>
						</button>
					</div>

				</div>
			
			</div>
		</>
	)
}

export default UserProfile
