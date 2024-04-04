import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";
import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";
import GoogleIcon from "@mui/icons-material/Google";
import FacebookIcon from "@mui/icons-material/Facebook";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

type LoginProps = {
  handleSubmit: () => void;
};

function Login({ handleSubmit }: LoginProps) {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const navigate = useNavigate();

  //CONFIGURACIÓN PARA YUP Y FORMIK - COMIENZO

  const initialValues = {
    userEmail: "",
    userPassword: ""
  };

  const registerSchema = Yup.object({
    userEmail: Yup.string()
      .required("Debes completar este campo")
      .email("El formato no coincide con un email")
      .max(30, "Máximo 30 caracteres"),

    userPassword: Yup.string()
      .required("Debes completar este campo")
      .max(15, "Máximo 15 caracteres")
      .min(8, "Al menos 8 caracteres")
  });

  //CONFIGURACIÓN PARA YUP Y FORMIK - FIN

  // Cambia la visibilidad del password

  function setPasswordVisibility() {
    const passwordElement = document.getElementById(
      "userPassword"
    ) as HTMLInputElement;

    if (passwordElement.type === "password") {
      passwordElement.type = "text";
      setPasswordVisible(true);
    } else {
      passwordElement.type = "password";
      setPasswordVisible(false);
    }
  }

  return (
    <div
      className="flex justify-center items-center flex-col bg-colorYellowBg h-[100%] mt-10 rounded-[40px] shadow-xl w-[600px] p-32 
	  "
    >
      <h1 className="text-4xl font-medium drop-shadow-lg relative shadow-shadow font-josefin top-[-50px]">
        Iniciar Sesión
      </h1>
      <Formik
        initialValues={initialValues}
        validationSchema={registerSchema}
        onSubmit={handleSubmit}
      >
        <Form
          name="loginForm"
          action=""
          encType="multipart/form-data"
          //   className="flex items-center justify-center"
        >
          <div className="flex justify-center items-center flex-col relative top-[-10px]">
            <div className="">
              {/* <label htmlFor="userEmail"></label> */}
              <Field
                type="email"
                id="userEmail"
                name="userEmail"
                placeholder="Correo Electrónico"
                className="flex flex-col items-center justify-center bg-slate-500 m-2 rounded-[30px] px-4
				w-[322px] h-[38px] outline-none shadow-lg font-josefin"
              />
              <div className="flex items-center justify-center ">
                <ErrorMessage name="userEmail">
                  {errorMsg => (
                    <p className="text-errorMsg font-josefin">{errorMsg}</p>
                  )}
                </ErrorMessage>
              </div>
            </div>
            <div className="">
              {/* <label htmlFor="userPassword"></label> */}
              <Field
                type="password"
                id="userPassword"
                name="userPassword"
                placeholder="Contraseña"
                className="flex flex-col bg-slate-500 m-2 rounded-[30px] px-4 w-[322px] h-[38px] outline-none shadow-lg font-josefin"
              />
              <div className="flex items-center justify-center ">
                <ErrorMessage name="userPassword">
                  {errorMsg => (
                    <p className="text-errorMsg font-josefin">{errorMsg}</p>
                  )}
                </ErrorMessage>
              </div>
            </div>

            {/* Seccion 'Mostrar y ocultar contraseña' */}
            <div className="flex justify-center items-center flex-row relavite top-[70px]">
              <button
                type="button"
                onClick={setPasswordVisibility}
                className="flex justify-center items-center"
              >
                {passwordVisible === false ? (
                  <RemoveRedEyeOutlinedIcon />
                ) : (
                  <VisibilityOffOutlinedIcon />
                )}
              </button>

              <span onClick={setPasswordVisibility} className="px-2">
                {passwordVisible ? (
                  <p className="font-josefin">Ocultar contraseña</p>
                ) : (
                  <p className="font-josefin">Mostar contraseña</p>
                )}
              </span>
            </div>

            <button
              className="w-[166px] h-[38px] rounded-[10px] text-[18px] bg-[#FDF4E3] shadow-lg 
			  font-josefin font-medium flex justify-center items-center relative top-[35px]"
              type="submit"
            >
              Inciar Sesión
            </button>
          </div>

          <div className="flex justify-between relative top-[60px]">
            <div className="flex justify-center items-center w-28 h-12 shadow-xl cursor-pointer bg-[#FFCF71] font-josefin">
              <GoogleIcon />
              <p className="px-1">Google</p>
            </div>

            <div className="flex justify-center items-center w-28 h-12 shadow-xl cursor-pointer bg-[#FFCF71] font-josefin">
              <FacebookIcon />
              <p className="px-1">Facebook</p>
            </div>
          </div>

          <div className="flex justify-between items-center w-[80%] h-[40px] space-x-5 ">
            <div className="w-[460%] border border-[#FDF4E3]"></div>
            <div className="w-[190px] h-[20px] border-[#FDF4E3] rounded-[150%] shadow-lg  bg-[#FFCF71]"></div>
            <div className="w-[260%] border border-[#FDF4E3]"></div>
          </div>

          <div className="flex justify-center items-center relative top-[60px] font-josefin">
            <p className="text-[#01242F8F] text-[18px]">
              Nuevo en Eatsquality?
              <span
                className="text-[#05607C] cursor-pointer"
                onClick={() => navigate("/register")}
              >
                {" "}
                Registrate
              </span>{" "}
            </p>
          </div>
        </Form>
      </Formik>
    </div>
  );
}

export default Login;
