import { FaRegEnvelope, FaTwitter } from "react-icons/fa";
import { BiSolidHomeCircle } from "react-icons/bi";
import { CiCircleMore, CiHashtag, CiUser, CiViewList } from "react-icons/ci";
import { GoBell } from "react-icons/go";
import { PiBookmarkSimple } from "react-icons/pi";
import { HiOutlineEnvelope } from "react-icons/hi2";

import stars from "../assets/homepage/stars.png";
import profile1 from "../assets/homepage/profile1.png";

import smile from "../assets/homepage/smile.png";
import gif from "../assets/homepage/gif.png";
import stats from "../assets/homepage/stats.png";
import img1 from "../assets/homepage/image.png";
import schedule from "../assets/homepage/schedule.png";

function HomePage() {
  return (
    <div className={"w-full flex my-10"}>
      <div
        className={"w-1/4 border-r-[1px] border-slate-300 flex justify-center "}
      >
        <div className={"w-[60%] flex flex-col gap-8 h-max "}>
          <FaTwitter color={"#1DA1F2"} size={"35px"} />
          <div className="flex flex-col gap-5">
            <div className="flex gap-5 items-center">
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
            <div className="flex gap-5 items-center">
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
        </div>
      </div>
      <div className={"w-1/2 "}>
        <div className="flex  items-center justify-between border-b-[1px] p-3">
          <h2 className="text-lg font-semibold">Home</h2>
          <img src={stars} className="w-[20px]" />
        </div>
        <div className="flex flex-col bg-red-200">
          <div className={"bg-yellow-100 flex  items-center gap-4"}>
            <img src={profile1} />
            <textarea
              className="pl-3 py-3 font-normal tracking-wide"
              rows={3}
              cols={66}
              placeholder={"What's happening"}
            />
          </div>
          <div className={"bg-blue-100"}>
            <div>
              <img />
            </div>
            <div></div>
          </div>
        </div>
      </div>
      <div className="w-1/4 bg-red-400"></div>
    </div>
  );
}

export default HomePage;
