import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";

type SearchProps = {
  handleSubmit: () => void;
};

function Search({ handleSubmit }: SearchProps) {
  const noSpecialCharacterRegex = /^[a-zA-ZáéíóúñÑ\s0-9]*$/g;

  //CONFIGURACIÓN PARA YUP Y FORMIK - COMIENZO

  const initialValues = {
    searchText: ""
  };

  const registerSchema = Yup.object({
    searchText: Yup.string()
      .required("Escribe tu búsqueda")
      .matches(noSpecialCharacterRegex, "No se admiten caracteres especiales")
      .max(50, "Máximo 50 caracteres")
  });

  //CONFIGURACIÓN PARA YUP Y FORMIK - FIN

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={registerSchema}
      onSubmit={handleSubmit}
    >
      <Form
        name="searchBar"
        action=""
        encType="multipart/form-data"
        className=""
      >
        <div className="flex justify-center items-center w-22 h-22 bg-colorYellowBg rounded-[20px] mt-3">
          <button className="px-3" type="submit">
            <SearchOutlinedIcon />
          </button>

          <div className="">
            <Field
              type="text"
              id="searchText"
              name="searchText"
              placeholder="Buscar"
              className="flex justify-center items-center w-22 h-22 bg-colorYellowBg m-1 
			  outline-none font-josefin"
            />
          </div>
        </div>
        <div className="flex justify-center items-center">
          <ErrorMessage name="searchText">
            {errorMsg => <p className="font-josefin">{errorMsg}</p>}
          </ErrorMessage>
        </div>
      </Form>
    </Formik>
  );
}

export default Search;
