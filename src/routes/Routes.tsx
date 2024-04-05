import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";

function RoutesComponent() {
  return (
    <Routes>
      <Route path="*" element={<Home />} />
      <Route path="/inicio" element={<Home />} />
    </Routes>
  );
}

export default RoutesComponent;
