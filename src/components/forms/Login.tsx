import { ErrorMessage, Field, Form, Formik } from "formik";
import *  as  Yup from "yup";
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined';
import { useState } from "react";


type LoginProps = {
	handleSubmit: () => void
}

function Login( {handleSubmit}: LoginProps) {
	const [passwordVisible, setPasswordVisible] = useState(false);

	//CONFIGURACIÓN PARA YUP Y FORMIK - COMIENZO

	const initialValues = {
		userEmail: "",
		userPassword: "",
	};
	
	const registerSchema = Yup.object({
		userEmail: Yup.string()
		.required("Debes completar este campo")
		.email("El formato no coincide con un email")
		.max(30, "Máximo 30 caracteres"),

		userPassword: Yup.string()
		.required("Debes completar este campo")
		.max(15, "Máximo 15 caracteres")
		.min(8, "Al menos 8 caracteres"),
	});

	//CONFIGURACIÓN PARA YUP Y FORMIK - FIN


	// Cambia la visibilidad del password

	function setPasswordVisibility () {
		const passwordElement = document.getElementById("userPassword") as HTMLInputElement;

		if (passwordElement.type === "password") {
			passwordElement.type = "text";
			setPasswordVisible(true);

		} else {
			passwordElement.type = "password";
			setPasswordVisible(false);
		}
	}


	return (
		<div className="">

			<Formik initialValues={initialValues} validationSchema={registerSchema} onSubmit={handleSubmit}>
				<Form name="loginForm" action="" encType="multipart/form-data" className="">
					<div className="">

						<div className="">
							<label htmlFor="userEmail">Correo Electrónico</label>
							<Field type="email" id="userEmail" name="userEmail" placeholder="" className="" />
							<ErrorMessage name="userEmail" >
								{errorMsg => <p className="">{errorMsg}</p>}
							</ErrorMessage>
						</div>


						<div className="">
							<label htmlFor="userPassword">Contraseña</label>
							<Field type="password" id="userPassword" name="userPassword" placeholder="" className="" />

							<button type="button" onClick={setPasswordVisibility} >
								
								{
									passwordVisible === false
										? 	(
												<RemoveRedEyeOutlinedIcon />
											)
										:	(
												<VisibilityOffOutlinedIcon />
											)
								}

							</button>

							<ErrorMessage name="userPassword" >
								{errorMsg => <p className="">{errorMsg}</p>}
							</ErrorMessage>
						</div>


						<button 
							className=""
							type="submit"
						>
							Resgistrarme
						</button>

					</div>
				</Form>
			</Formik>

		</div>
	)
}

export default Login
