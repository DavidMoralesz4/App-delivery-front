import "./App.css";
import Login from "./components/forms/Login";
import RoutesComponent from "./routes/Routes";

function App() {
  return (
    <>
      <div className="h-[300px] w-[400px] rounded-br-[630px] bg-colorYellowBg absolute shadow-lg"></div>
      <div className="">
        <RoutesComponent />
        <div className="flex justify-center items-center">
          <Login handleSubmit={() => console.log("submit")} />
        </div>
      </div>
    </>
  );
}

export default App;
