import { FaTwitter } from "react-icons/fa";
import { BiSolidHomeCircle } from "react-icons/bi";
import { CiCircleMore, CiHashtag, CiUser, CiViewList } from "react-icons/ci";
import { GoBell } from "react-icons/go";
import { HiOutlineEnvelope } from "react-icons/hi2";
import { PiBookmarkSimple } from "react-icons/pi";
import profile1 from "../assets/homepage/profile1.png";
import { IoIosMore } from "react-icons/io";
import { useNavigate } from "react-router-dom";

function LeftSide() {
  const navigate = useNavigate();
  return (
    <div
      className={"w-1/4 border-r-[1px] border-slate-300 flex justify-center "}
    >
      <div className={"w-[60%] flex flex-col gap-8 h-max"}>
        <FaTwitter color={"#1DA1F2"} size={"35px"} />
        <div className="flex flex-col gap-5">
          <div
            className="flex gap-5 items-center hover:cursor-pointer "
            onClick={() => {
              navigate("/");
            }}
          >
            <BiSolidHomeCircle size={"25px"} />
            <p className="text-lg">Home</p>
          </div>

          <div className="flex gap-5 items-center">
            <CiHashtag size={"25px"} />
            <p className="text-lg">Explore</p>
          </div>
          <div className="flex gap-5 items-center">
            <GoBell size={"25px"} />
            <p className="text-lg">Notifications</p>
          </div>
          <div className="flex gap-5 items-center">
            <HiOutlineEnvelope size={"25px"} />
            <p className="text-lg">Explore</p>
          </div>
          <div className="flex gap-5 items-center">
            <PiBookmarkSimple size={"25px"} />
            <p className="text-lg">Bookmarks</p>
          </div>
          <div className="flex gap-5 items-center">
            <CiViewList size={"25px"} />
            <p className="text-lg">Lists</p>
          </div>
          <div
            className="flex gap-5 items-center hover:cursor-pointer"
            onClick={() => {
              navigate("/profile");
            }}
          >
            <CiUser size={"25px"} />
            <p className="text-lg">Profile</p>
          </div>
          <div className="flex gap-5 items-center">
            <CiCircleMore size={"25px"} />
            <p className="text-lg">More</p>
          </div>
          <button className={"bg-[#1DA1F2] text-white py-2.5 rounded-3xl"}>
            Tweet
          </button>
        </div>
        <div className={"flex  w-[230px] gap-2 "}>
          <img className={"w-[40px]"} src={profile1} />
          <div className="flex flex-col w-full">
            <div className={"flex justify-between w-full"}>
              <h4 className={"text-sm font-medium"}>Bobur</h4>
              <IoIosMore size={"20px"} />
            </div>
            <p className={"text-slate-500 text-sm"}>@bobur_mavlonov</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftSide;
