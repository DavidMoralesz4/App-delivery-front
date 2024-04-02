import { ErrorMessage, Field, Form, Formik } from "formik";
import *  as  Yup from "yup";

type RegisterUserProps = {
	handleSubmit: () => void
}

function RegisterUser( {handleSubmit}: RegisterUserProps) {
	const lowerCaseRegex = /[a-z]/g;
	const upperCaseRegex = /[A-Z]/g;
	const noSpaceAtStartRegex = /^\S/g;
	const noSpaceEndingRegex = /\S$/g;
	const noSpacesRegex = /^\S*$/g;
	const numberRegex = /[0-9]/g;
	const noNumberRegex = /^\D*$/g;
	const specialCharacterRegex = /[!@#$%^&_*-]/g;
	const noSpecialCharacterRegex = /^[a-zA-ZáéíóúñÑ\s0-9]*$/g;
	const phoneRegex = /^\d{10}$/;
	const zipCodeRegex = /^\d{4}$/;


	const initialValues = {
		userName: "",
		userLastName: "",
		userEmail: "",
		userAddress: "",
		userZipCode: "",
		userPhoneNumber: "",
		userPassword: "",
		userPasswordConfirm: ""
	};

	const registerSchema = Yup.object({
		userName: Yup.string()
			.required("Debes completar este campo")
			.max(30, "Máximo 30 caracteres")
			.matches(noSpaceAtStartRegex, "No puede comenzar con un espacio")
			.matches(noSpaceEndingRegex, "No puede terminar con un espacio")
			.matches(noSpecialCharacterRegex, "No se admiten caracteres especiales")
			.matches(noNumberRegex, "No se admiten números")
			.min(2, "Al menos 2 caracteres"),

		userLastName: Yup.string()
			.required("Debes completar este campo")
			.max(30, "Máximo 30 caracteres")
			.matches(noSpaceAtStartRegex, "No puede comenzar con un espacio")
			.matches(noSpaceEndingRegex, "No puede terminar con un espacio")
			.matches(noSpecialCharacterRegex, "No se admiten caracteres especiales")
			.matches(noNumberRegex, "No se admiten números")
			.min(2, "Al menos 2 caracteres"),

		userEmail: Yup.string()
			.required("Debes completar este campo")
			.email("El formato no coincide con un email")
			.max(30, "Máximo 30 caracteres"),

		userAddress: Yup.string()
			.required("Debes completar este campo")
			.matches(noSpaceAtStartRegex, "No puede comenzar con un espacio")
			.matches(noSpaceEndingRegex, "No puede terminar con un espacio")
			.max(50, "Máximo 50 caracteres"),

		userZipCode: Yup.string()
			.required("Debes completar este campo")
			.matches(zipCodeRegex, "Debe tener 4 dígitos"),
			.matches(zipCodeRegex, "Debe tener 4 dígitos"),
		
		userPhoneNumber: Yup.string()
			.required("Debes completar este campo")
			.matches(phoneRegex, "Debe tener 10 dígitos"),		
			.matches(phoneRegex, "Debe tener 10 dígitos"),		

		userPassword: Yup.string()
			.required("Debes completar este campo")
			.max(15, "Máximo 15 caracteres")
			.matches(noSpacesRegex, "No se admiten espacios")
			.matches(lowerCaseRegex, "Debe tener al menos una letra minúscula")
			.matches(upperCaseRegex, "Debe tener al menos una letra mayúscula")
			.matches(numberRegex, "Debe tener al menos un número")
			.matches(specialCharacterRegex, "Debe tener al menos una carácter especial")
			.min(8, "Al menos 8 caracteres"),

		userPasswordConfirm: Yup.string()
			.required("Debes confirmar tu contraseña")
			.oneOf([Yup.ref("userPassword")], "Las contraseñas no coinciden")
	});


	return (
		<>
			<div className="">

				<Formik initialValues={initialValues} validationSchema={registerSchema} onSubmit={handleSubmit}>
					<Form name="registerUserForm" action="" encType="multipart/form-data" className="">
						<div className="">


							<div className="">
								<label htmlFor="userName">Nombre</label>
								<Field type="text" id="userName" name="userName" placeholder="" className="" />
								<ErrorMessage name="userName" >
									{errorMsg => <p className="">{errorMsg}</p>}
								</ErrorMessage>
							</div>


							<div className="">
								<label htmlFor="userLastName">Apellidos</label>
								<Field type="text" id="userLastName" name="userLastName" placeholder="" className="" />
								<ErrorMessage name="userLastName" >
									{errorMsg => <p className="">{errorMsg}</p>}
								</ErrorMessage>
							</div>

							
							<div className="">
								<label htmlFor="userAddress">Dirección</label>
								<Field type="text" id="userAddress" name="userAddress" placeholder="" className="" />
								<ErrorMessage name="userAddress" >
									{errorMsg => <p className="">{errorMsg}</p>}
								</ErrorMessage>
							</div>


							<div className="">
								<label htmlFor="userZipCode">Código Postal</label>
								<Field type="string" id="userZipCode" name="userZipCode" placeholder="" className="" />
								<ErrorMessage name="userZipCode" >
									{errorMsg => <p className="">{errorMsg}</p>}
								</ErrorMessage>
							</div>


							<div className="">
								<label htmlFor="userPhoneNumber">Teléfono</label>
								<Field type="tel" id="userPhoneNumber" name="userPhoneNumber" placeholder="" className="" />
								<ErrorMessage name="userPhoneNumber" >
									{errorMsg => <p className="">{errorMsg}</p>}
								</ErrorMessage>
							</div>


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
								<ErrorMessage name="userPassword" >
									{errorMsg => <p className="">{errorMsg}</p>}
								</ErrorMessage>
							</div>


							<div className="">
								<label htmlFor="userPasswordConfirm">Confirma contraseña</label>
								<Field type="password" id="userPasswordConfirm" name="userPasswordConfirm" placeholder="" className="" />
								<ErrorMessage name="userPasswordConfirm" >
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
		</>
	);
}

export default RegisterUser
