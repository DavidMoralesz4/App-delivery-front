import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";
import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";
import GoogleIcon from "@mui/icons-material/Google";
import FacebookIcon from "@mui/icons-material/Facebook";
import CloseIcon from "@mui/icons-material/Close";
import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

type LoginProps = {
  handleSubmit: () => void;
};

function Login({ handleSubmit }: LoginProps) {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const navigate = useNavigate();
  const [isFormOpen, setIsFormOpen] = useState(true);
  const formRef = useRef<HTMLDivElement>(null);

  //CONFIGURACIÓN PARA YUP Y FORMIK - COMIENZO

  const initialValues = {
    userEmail: "",
    userPassword: ""
  };

  const loginSchema = Yup.object({
    userEmail: Yup.string()
      .required("Debes completar este campo")
      .email("El formato no coincide con un email")
      .max(30, "Máximo 30 caracteres"),

    userPassword: Yup.string()
      .required("Debes completar este campo")
      .max(15, "Máximo 15 caracteres")
      .min(8, "Al menos 8 caracteres")
  });

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (formRef.current && !formRef.current.contains(event.target as Node)) {
        setIsFormOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  //CONFIGURACIÓN PARA YUP Y FORMIK - FIN

  // Cambia la visibilidad del password

  const handleView = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <>
      {isFormOpen && (
        <div className="flex justify-center items-center absolute inset-0 backdrop-blur-sm ">
          <div
            className="flex justify-center items-center flex-col bg-colorYellowBg
      w-[100%] h-[70vh] m-4 p-8 rounded-[20px] drop-shadow-2xl relative sm:w-[470px] mt-[20px] sm:h-[555px] 
      "
          >
            <button
              onClick={() => setIsFormOpen(!isFormOpen)}
              className="text-[20px] font-josefin  text-[#432C00] pl-[40px] mt-[-50px] p-10 hover:text-blurEffect transition delay-150 duration-300 ease-in-out"
            >
              <CloseIcon />
            </button>
            <h1 className="font-josefin text-[27px] mt-[-10px] sm:text-[40px]">
              Iniciar Sesion
            </h1>
            <Formik
              initialValues={initialValues}
              validationSchema={loginSchema}
              // onSubmit={handleSubmit}
              onSubmit={(values, { setSubmitting }) => {
                setTimeout(() => {
                  alert(JSON.stringify(values, null, 2));
                  setSubmitting(false);
                  setIsFormOpen(false);
                }, 0);
              }}
            >
              <Form className="flex items-center justify-center flex-col mt-12">
                <div>
                  <Field
                    placeholder="Correo electronio"
                    type="text"
                    name="userEmail"
                    className="m-1 px-2 rounded-[10px] outline-none shadow-xl bg-[#F2F2F2]
                font-josefin sm:h-[35px] sm:w-[240px] 
                "
                  />
                  <ErrorMessage name="userEmail">
                    {errorMsg => (
                      <p className="text-[12px] text-center text-errorMsg font-josefin sm:text-[16px]">
                        {errorMsg}
                      </p>
                    )}
                  </ErrorMessage>
                </div>

                <div>
                  <Field
                    placeholder="Contrasena"
                    type={passwordVisible ? "password" : "text"}
                    name="userPassword"
                    className="m-1 px-2 rounded-[10px] outline-none shadow-xl bg-[#F2F2F2]
                font-josefin sm:h-[35px] sm:w-[240px] 
                "
                  />
                  <ErrorMessage name="userPassword">
                    {errorMsg => (
                      <p className="text-[12px] text-center text-errorMsg font-josefin sm:text-[16px]">
                        {errorMsg}
                      </p>
                    )}
                  </ErrorMessage>
                </div>
                <div className="flex mt-3 justify-center items-center">
                  <button
                    type="button"
                    onClick={handleView}
                    className="flex justify-center items-center px-1"
                  >
                    {passwordVisible ? (
                      <RemoveRedEyeOutlinedIcon />
                    ) : (
                      <VisibilityOffOutlinedIcon />
                    )}
                  </button>

                  <span onClick={handleView} className="cursor-pointer">
                    {passwordVisible ? (
                      <p className="font-josefin text-[14px] sm:text-[18px]">
                        Ocultar contraseña
                      </p>
                    ) : (
                      <p className="font-josefin text-[14px] sm:text-[18px]">
                        Mostar contraseña
                      </p>
                    )}
                  </span>
                </div>

                <button
                  className="bg-[#FDF4E3] rounded-[10px] p-2 font-josefin shadow-lg mt-10
              text-[14px] h-9 sm:text-[18px] sm:w-[160px] sm:h-[40px]
              "
                  type="submit"
                >
                  Iniciar Sesion
                </button>

                <div className="flex justify-center items-center gap-10 mt-5 sm:gap-20">
                  <div className="flex bg-colorYellowBg shadow-lg p-1 cursor-pointer sm:p-3">
                    <GoogleIcon />
                    <p className="font-josefin">Google</p>
                  </div>

                  <div className="flex bg-colorYellowBg shadow-lg p-1 cursor-pointer sm:p-3">
                    <FacebookIcon />
                    <p className="font-josefin">Facebook</p>
                  </div>
                </div>

                <div className="">
                  <p
                    className="flex-row text-center text-[14px] 
              font-josefin mt-12 sm:text-[16px]
              "
                  >
                    Nuevo en Eatsquality?
                    <span
                      className="text-[#432C00] cursor-pointer"
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
        </div>
      )}
    </>
  );
}

export default Login;
