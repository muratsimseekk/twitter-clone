import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Login from "./pages/Login.jsx";
import { Route, Routes } from "react-router-dom";
import Signup from "./pages/SignUp.jsx";
import HomePage from "./pages/HomePage.jsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Routes>
      <Route path={"/"} element={<HomePage />} />
      <Route path={"/login"} element={<Login />} />
      <Route path={"/signup"} element={<Signup />} />
    </Routes>
  );
}

export default App;
