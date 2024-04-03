import { ErrorMessage, Field, Form, Formik } from "formik";
import *  as  Yup from "yup";
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';


type SearchProps = {
	handleSubmit: () => void
}

function Search( {handleSubmit}: SearchProps) {
	const noSpecialCharacterRegex = /^[a-zA-ZáéíóúñÑ\s0-9]*$/g;


	//CONFIGURACIÓN PARA YUP Y FORMIK - COMIENZO

	const initialValues = {
		searchText: "",
	};
	
	const registerSchema = Yup.object({
		searchText: Yup.string()
		.required("Escribe tu búsqueda")
		.matches(noSpecialCharacterRegex, "No se admiten caracteres especiales")
		.max(50, "Máximo 50 caracteres"),
	});

	//CONFIGURACIÓN PARA YUP Y FORMIK - FIN




	return (
		<Formik initialValues={initialValues} validationSchema={registerSchema} onSubmit={handleSubmit}>
			<Form name="searchBar" action="" encType="multipart/form-data" className="">
				<div className="flex bg-[#94B447]">

					<button 
						className=""
						type="submit"
					>
						<SearchOutlinedIcon />
					</button>

					<div className="">
						<Field type="email" id="searchText" name="searchText" placeholder="Buscar" className="" />
						<ErrorMessage name="searchText" >
							{errorMsg => <p className="">{errorMsg}</p>}
						</ErrorMessage>
					</div>

				</div>
			</Form>
		</Formik>
	)
}

export default Search