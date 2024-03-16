import { FaTwitter } from "react-icons/fa";

import { Link, useNavigate } from "react-router-dom";

import { useForm } from "react-hook-form";
import { AxiosInstance } from "../api/api.jsx";
import { useDispatch } from "react-redux";
import { loginData } from "../store/action/globalState.jsx";
import axios from "axios";

function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isValid },
  } = useForm({ mode: "onBlur" });

  const submitHandler = async (data) => {
    try {
      await axios
        .post("http://localhost:3000/profile/login", data)
        .then((res) => {
          console.log(res.data);
          dispatch(loginData(data));
          navigate("/");
        });
    } catch (error) {
      console.log("Login failed", error);

      setError("username", {
        type: "manual",
        message: "Invalid username or password",
      });
    }
  };

  return (
    <div className=" w-full h-[100vh] flex justify-center items-center">
      <div className="w-1/3  flex flex-col gap-8">
        <div className="flex flex-col gap-6">
          <FaTwitter color={"#1DA1F2"} size={"45px"} />
          <h2 className="text-4xl font-bold ">Log in to Twitter</h2>
        </div>
        <form
          onSubmit={handleSubmit(submitHandler)}
          className={"flex flex-col gap-4"}
        >
          <div className={"flex flex-col gap-1.5"}>
            <input
              type="text"
              {...register("username", {
                required: "Username is required !",
              })}
              className={"w-full px-4 py-3 rounded-lg border border-slate-300"}
              placeholder={"Username"}
            />
            <p className={"text-red-500 text-sm pl-2 "}>
              {errors.username?.message}
            </p>
          </div>
          <div className={"flex flex-col gap-1.5"}>
            <input
              type={"password"}
              {...register("password", {
                required: "Password is required !",
              })}
              className={"w-full px-4 py-3 rounded-lg border border-slate-300"}
              placeholder={"Password"}
            />
            <p className={"text-red-500 text-sm pl-2 "}>
              {errors.password?.message}
            </p>
          </div>
          <button
            type={"submit"}
            className={
              "w-full py-3 rounded-3xl border bg-[#1DA1F2] text-white "
            }
          >
            Log in
          </button>
        </form>
        <div className={"flex w-full justify-between "}>
          <p className={"hover:cursor-pointer hover:underline text-[#1DA1F2]"}>
            Forgot Password ?
          </p>
          <Link to={"/signup"}>
            <p
              className={"hover:cursor-pointer hover:underline text-[#1DA1F2]"}
            >
              Sign up to Twitter
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Login;
