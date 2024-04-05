import Header from "../components/header/Header";
import Login from "../components/forms/Login";
import Layout from "../components/layout/Layout";

import { Helmet } from "react-helmet";
import { useState } from "react";

function Home() {
  const [isLoginVisible, setIsLoginVisible] = useState(false);

  function showLogin() {
    setIsLoginVisible(!isLoginVisible);
  }

  return (
    <>
      <Layout>
        <Helmet>
          <title>Eatsquality - Inicio</title>
        </Helmet>

        <div className="h-[300px] w-[400px] rounded-br-[630px] bg-colorYellowBg absolute shadow-lg"></div>

        <header>
          <Header handleLoginClick={showLogin} />
        </header>

        <main>
          {isLoginVisible === true && (
            <div className="flex justify-center items-center">
              <Login handleSubmit={() => console.log("Login Submit")} />
            </div>
          )}
        </main>
        <footer></footer>
      </Layout>
    </>
  );
}

export default Home;
