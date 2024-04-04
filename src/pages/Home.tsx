import Header from "../components/header/Header";
import { Helmet } from "react-helmet";
import { useState } from "react";
import Login from "../components/forms/Login";

function Home() {
  const [isLoginVisible, setIsLoginVisible] = useState(false);

  function showLogin() {
    setIsLoginVisible(!isLoginVisible);
  }

  return (
    <>
      <Helmet>
        <title>Eatsquality - Inicio</title>
      </Helmet>

      <header>
        <Header handleLoginClick={showLogin} />
      </header>

      <main>
        {isLoginVisible === true && (
          <Login handleSubmit={() => console.log("Login Submit")} />
        )}
      </main>

      <footer></footer>
    </>
  );
}

export default Home;
