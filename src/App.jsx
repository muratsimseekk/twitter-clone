import "./App.css";
import Login from "./pages/Login.jsx";
import { Route, Routes } from "react-router-dom";
import Signup from "./pages/SignUp.jsx";
import HomePage from "./pages/HomePage.jsx";
import Profile from "./pages/Profile.jsx";

function App() {
  return (
    <Routes>
      <Route path={"/"} element={<HomePage />} />
      <Route path={"/login"} element={<Login />} />
      <Route path={"/signup"} element={<Signup />} />
      <Route path={"/profile"} element={<Profile />} />
    </Routes>
  );
}

export default App;
