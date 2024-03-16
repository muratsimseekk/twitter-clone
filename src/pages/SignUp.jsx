import image1 from "../assets/sign-up.png";
import { FaApple, FaTwitter } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { MdCopyright } from "react-icons/md";

import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { data } from "autoprefixer";
import axios from "axios";
import { useDispatch } from "react-redux";
import { singUpData } from "../store/action/globalState.jsx";

function Signup() {
  const [popup, setPopup] = useState(false);

  const [mailInput, setMailInput] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isValid },
  } = useForm({ mode: "onBlur" });

  const submitHandler = async (data) => {
    try {
      await axios
        .post("http://localhost:3000/profile/register", data)
        .then((res) => {
          console.log(res.data);
          dispatch(singUpData(data));
          navigate("/");
        });
    } catch (error) {
      console.log("Login failed ", error);
      setError("username", {
        type: "manual",
        message: error.response.data.message,
      });
    }
  };

  return (
    <div className="w-full  h-[100vh] flex flex-col">
      <div className={"h-[95vh] flex items-center"}>
        <div className="w-[55%] h-full bg-yellow-100">
          <img src={image1} className="w-full h-full" />
        </div>
        {!popup ? (
          <div className="w-[45%]  flex flex-col gap-8 pl-14 ">
            <div>
              <FaTwitter color={"#1DA1F2"} size={"45px"} />
            </div>
            <h2 className="text-6xl font-bold tracking-wide">Happening Now</h2>
            <h3 className="text-4xl font-bold tracking-wide">
              Join Twitter today
            </h3>
            <div className="w-full flex flex-col gap-4">
              <button className="flex items-center justify-center w-[60%] gap-2 border  py-2.5 rounded-2xl">
                <FcGoogle size={"25px"} />
                <p>Sign up with Google</p>
              </button>

              <button className="flex items-center gap-2 border justify-center w-[60%] py-2.5 rounded-2xl">
                <FaApple size={"25px"} />
                <p>Sign up with Apple</p>
              </button>

              <button
                onClick={() => setPopup(true)}
                className="flex items-center gap-2 border justify-center w-[60%] py-2.5 rounded-2xl"
              >
                <p>Sign up with phone or e-mail</p>
              </button>
            </div>
            <p className=" w-[80%] text-sm">
              By signing up you agree to{" "}
              <span className="text-blue-400">Terms of Service</span> and{" "}
              <span className={"text-blue-400"}>Privacy Policy</span>,including{" "}
              <span className={"text-blue-400"}>Cookie Use</span>.
            </p>
            <div className="flex gap-2">
              <p>Already have account ? </p>
              <Link to={"/login"}>
                <p className="text-[#1DA1F2] hover:cursor-pointer hover:underline">
                  Log in
                </p>
              </Link>
            </div>
          </div>
        ) : (
          <div className={"w-[45%] pl-14"}>
            <div className={"flex flex-col gap-6 w-4/5 py-6 "}>
              <FaTwitter className={"w-full"} color={"#1DA1F2"} size={"40px"} />
              <h2 className="text-2xl font-semibold tracking-wide">
                Create an Account
              </h2>
              <form
                onSubmit={handleSubmit(submitHandler)}
                className={"flex flex-col gap-3"}
              >
                <div className={"w-full flex flex-col"}>
                  <input
                    {...register("username", {
                      required: "Username is required ",
                    })}
                    className={"p-3 border w-full border-slate-400 rounded-md"}
                    type={"text"}
                    placeholder={"Username"}
                  />
                  <p className="text-red-500 text-sm pl-2 ">
                    {errors.username?.message}
                  </p>
                </div>
                <div className={"w-full flex flex-col "}>
                  <input
                    {...register("password", {
                      required: "Password is required",
                    })}
                    className={"p-3 border w-full border-slate-400 rounded-md"}
                    type={"password"}
                    placeholder={"Password"}
                  />
                  <p className="text-red-500 text-sm pl-2">
                    {errors.password?.message}
                  </p>
                </div>
                {!mailInput ? (
                  <>
                    {" "}
                    <input
                      className={"p-3 border border-slate-400 rounded-md"}
                      placeholder={"Phone Number"}
                    />
                    <p
                      className={
                        "text-[#1DA1F2] text-sm py-3 hover:cursor-pointer hover:underline w-max"
                      }
                      onClick={() => setMailInput(true)}
                    >
                      Use Email{" "}
                    </p>{" "}
                  </>
                ) : (
                  <>
                    <div className="w-full flex flex-col">
                      <input
                        {...register("email", {
                          required: "Email is required",
                        })}
                        className={"p-3 border border-slate-400 rounded-md"}
                        placeholder={"Email Address"}
                      />
                      <p className="text-red-500 text-sm pl-2">
                        {errors.email?.message}
                      </p>
                    </div>
                    <p
                      className={
                        "text-[#1DA1F2] text-sm py-3 hover:cursor-pointer hover:underline w-max"
                      }
                      onClick={() => setMailInput(false)}
                    >
                      Use Phone Number{" "}
                    </p>{" "}
                  </>
                )}

                <h4 className="font-bold">Date of Birth</h4>
                <p className={"text-sm text-slate-600"}>
                  Lorem ipsum lorem ipsum Lorem ipsum lorem ipsum Lorem ipsum
                  lorem ipsum Lorem ipsum lorem ipsum Lorem ipsum lorem ipsum
                  Lorem ipsum lorem ipsum{" "}
                </p>

                <div className={"flex gap-4 mb-8"}>
                  <select
                    id={"month"}
                    className={"w-1/2 border px-3 py-4 rounded-lg"}
                  >
                    <option disabled>Month</option>
                    <option value={"january"}>January</option>
                    <option value={"february"}>February</option>
                    <option value={"march"}>March</option>
                    <option value={"april"}>April</option>
                    <option value={"may"}>May</option>
                    <option value={"june"}>June</option>
                    <option value={"july"}>July</option>
                    <option value={"august"}>August</option>
                    <option value={"september"}>September</option>
                    <option value={"october"}>October</option>
                    <option value={"november"}>November</option>
                    <option value={"december"}>December</option>
                  </select>
                  <select
                    id={"day"}
                    className="w-1/4 border px-3 py-4 rounded-lg"
                  >
                    <option disabled>Day</option>
                    <option value={"monday"}>Monday</option>
                    <option value={"tuesday"}>Tuesday</option>
                    <option value={"wednesday"}>Wednesday</option>
                    <option value={"thursday"}>Thursday</option>
                    <option value={"friday"}>Friday</option>
                    <option value={"saturday"}>Saturday</option>
                    <option value={"sunday"}>Sunday</option>
                  </select>

                  <select
                    id={"year"}
                    className="w-1/4 border px-3 py-4 rounded-lg"
                  >
                    <option disabled>Year</option>
                    <option value={""}>1990</option>
                    <option value={""}>1991</option>
                    <option value={""}>1992</option>
                    <option value={""}>1993</option>
                    <option value={""}>1994</option>
                    <option value={""}>1995</option>
                    <option value={""}>1996</option>
                    <option value={""}>1997</option>
                    <option value={""}>1998</option>
                    <option value={""}>1999</option>
                    <option value={""}>2000</option>
                    <option value={""}>2001</option>
                    <option value={""}>2002</option>
                    <option value={""}>2003</option>
                    <option value={""}>2004</option>
                    <option value={""}>2005</option>
                    <option value={""}>2006</option>
                  </select>
                </div>
                <button className="rounded-3xl bg-[#1DA1F2] text-white py-2">
                  Next
                </button>
              </form>
            </div>
          </div>
        )}
      </div>
      <div className={"h-[5vh] flex justify-center items-center"}>
        <div className="flex text-[10px]  gap-2.5 ">
          <p className={"hover:underline hover:cursor-pointer"}>About</p>
          <p className={"hover:underline hover:cursor-pointer"}>Help Center</p>
          <p className={"hover:underline hover:cursor-pointer"}>
            Terms of Service
          </p>
          <p className={"hover:underline hover:cursor-pointer"}>
            Privacy Policy
          </p>
          <p className={"hover:underline hover:cursor-pointer"}>
            Cookie Policy
          </p>
          <p className={"hover:underline hover:cursor-pointer"}>Ads Info</p>
          <p className={"hover:underline hover:cursor-pointer"}>Blog</p>
          <p className={"hover:underline hover:cursor-pointer"}>Status</p>
          <p className={"hover:underline hover:cursor-pointer"}>Carres</p>
          <p className={"hover:underline hover:cursor-pointer"}>
            Brand Resources
          </p>
          <p className={"hover:underline hover:cursor-pointer"}>Advertising</p>
          <p className={"hover:underline hover:cursor-pointer"}>Marketing</p>
          <p className={"hover:underline hover:cursor-pointer"}>
            Twitter for Business{" "}
          </p>
          <p className={"hover:underline hover:cursor-pointer"}>Developers</p>
          <p className={"hover:underline hover:cursor-pointer"}>Directory</p>
          <p className={"hover:underline hover:cursor-pointer"}>Settings</p>
          <div
            className={
              "flex items-center gap-1 hover:underline hover:cursor-pointer"
            }
          >
            <MdCopyright />
            <p>2021 Twitter,Inc</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
