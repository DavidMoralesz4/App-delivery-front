import { ErrorMessage, Field, Form, Formik } from "formik";
import *  as  Yup from "yup";

type RegisterRestaurantProps = {
	handleSubmit: () => void
}

function RegisterRestaurant( {handleSubmit}: RegisterRestaurantProps) {
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
		restaurantName: "",
		restaurantAddress: "",
		restaurantZipCode: "",
		restaurantPhoneNumber: "",
		restaurantImg: "",
		restaurantOpeningHour: "",
		restaurantClosingHour: ""
	};

	const registerSchema = Yup.object({
		restaurantName: Yup.string()
			.required("Debes completar este campo")
			.max(30, "Máximo 30 caracteres")
			.matches(noSpaceAtStartRegex, "No puede comenzar con un espacio")
			.matches(noSpaceEndingRegex, "No puede terminar con un espacio")
			.matches(noSpecialCharacterRegex, "No se admiten caracteres especiales")
			.matches(noNumberRegex, "No se admiten números")
			.min(2, "Al menos 2 caracteres"),

		restaurantAddress: Yup.string()
			.required("Debes completar este campo")
			.matches(noSpaceAtStartRegex, "No puede comenzar con un espacio")
			.matches(noSpaceEndingRegex, "No puede terminar con un espacio")
			.max(50, "Máximo 50 caracteres"),

		restaurantZipCode: Yup.string()
			.required("Debes completar este campo")
			.matches(zipCodeRegex, "El formato debe ser A0000AAA"),
		
		restaurantPhoneNumber: Yup.string()
			.required("Debes completar este campo")
			.matches(phoneRegex, "El formato debe ser +00 000000000"),		

		restaurantImg: Yup.string()
			.required("Debes completar este campo"),

		restaurantOpeningHour: Yup.string()
			.required("Debes completar este campo"),
		
		restaurantClosingHour: Yup.string()
		.required("Debes completar este campo"),
	});


	return (
		<>
			<div className="">

				<Formik initialValues={initialValues} validationSchema={registerSchema} onSubmit={handleSubmit}>
					<Form name="registerRestaurantForm" action="" encType="multipart/form-data" className="">
						
						<div className="">


							<div className="">
								<label htmlFor="restaurantName">Nombre del negocio</label>
								<Field type="text" id="restaurantName" name="restaurantName" placeholder="" className="" />
								<ErrorMessage name="restaurantName" >
									{errorMsg => <p className="">{errorMsg}</p>}
								</ErrorMessage>
							</div>


							<div className="">
								<label htmlFor="restaurantAddress">Dirección</label>
								<Field type="text" id="restaurantAddress" name="restaurantAddress" placeholder="" className="" />
								<ErrorMessage name="restaurantAddress" >
									{errorMsg => <p className="">{errorMsg}</p>}
								</ErrorMessage>
							</div>


							<div className="">
								<label htmlFor="restaurantZipCode">Código Postal</label>
								<Field type="number" id="restaurantZipCode" name="restaurantZipCode" placeholder="" className="" />
								<ErrorMessage name="restaurantZipCode" >
									{errorMsg => <p className="">{errorMsg}</p>}
								</ErrorMessage>
							</div>


							<div className="">
								<label htmlFor="restaurantPhoneNumber">Teléfono</label>
								<Field type="tel" id="restaurantPhoneNumber" name="restaurantPhoneNumber" placeholder="" className="" />
								<ErrorMessage name="restaurantPhoneNumber" >
									{errorMsg => <p className="">{errorMsg}</p>}
								</ErrorMessage>
							</div>


							<div className="">
								<label htmlFor="restaurantImg">Seleccione su logo</label>
								<Field type="file" id="restaurantImg" name="restaurantImg" placeholder="" className="" />
								<ErrorMessage name="restaurantImg" >
									{errorMsg => <p className="">{errorMsg}</p>}
								</ErrorMessage>
							</div>


							<div className="">
								<label htmlFor="restaurantOpeningHour">Hora de apertura</label>
								<Field type="time" id="restaurantOpeningHour" name="restaurantOpeningHour" placeholder="" className="" />
								<ErrorMessage name="restaurantOpeningHour" >
									{errorMsg => <p className="">{errorMsg}</p>}
								</ErrorMessage>
							</div>


							<div className="">
								<label htmlFor="restaurantClosingHour">Hora de cierre</label>
								<Field type="time" id="restaurantClosingHour" name="restaurantClosingHour" placeholder="" className="" />
								<ErrorMessage name="restaurantClosingHour" >
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

export default RegisterRestaurant
