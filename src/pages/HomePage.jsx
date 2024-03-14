import { FaTwitter } from "react-icons/fa";
import { BiSolidHomeCircle } from "react-icons/bi";
import {
  CiCircleMore,
  CiHashtag,
  CiSearch,
  CiUser,
  CiViewList,
} from "react-icons/ci";
import { GoBell } from "react-icons/go";
import { PiBookmarkSimple, PiCopyrightLight } from "react-icons/pi";
import { HiOutlineEnvelope } from "react-icons/hi2";

import stars from "../assets/homepage/stars.png";

import profile1 from "../assets/homepage/profile1.png";
import profile2 from "../assets/homepage/profile2.png";
import profile3 from "../assets/homepage/profile3.png";
import profile4 from "../assets/homepage/profile4.png";
import profile5 from "../assets/homepage/profile5.png";
import profile6 from "../assets/homepage/profile6.png";

import smile from "../assets/homepage/smile.png";
import gif from "../assets/homepage/gif.png";
import stats from "../assets/homepage/stats.png";
import img1 from "../assets/homepage/image.png";
import schedule from "../assets/homepage/schedule.png";

import comment from "../assets/homepage/comment.png";
import retweet from "../assets/homepage/retweet.png";
import like from "../assets/homepage/like.png";
import share from "../assets/homepage/share.png";
import tweetstats from "../assets/homepage/tweetstats.png";

import kebab from "../assets/homepage/kebab.png";
import { IoSettingsOutline } from "react-icons/io5";
import { IoIosMore } from "react-icons/io";
function HomePage() {
  return (
    <div className={"w-full flex my-10"}>
      <div
        className={"w-1/4 border-r-[1px] border-slate-300 flex justify-center "}
      >
        <div className={"w-[60%] flex flex-col gap-8 h-max"}>
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
      <div className={"w-1/2"}>
        <div className="flex items-center justify-between border-b-[1px] p-3 w-full">
          <h2 className="text-lg font-semibold">Home</h2>
          <img src={stars} className="w-[20px]" />
        </div>
        <div className="flex border-b-[1px] gap-2">
          <div className={" px-2   flex items-start"}>
            <img src={profile1} />
          </div>
          <div>
            <textarea
              className="pl-3 py-3 font-normal tracking-wide"
              rows={2}
              cols={64}
              placeholder={"What's happening"}
            />
            <div className={" flex justify-between items-center"}>
              <div className="flex gap-4 ">
                <img src={img1} />
                <img src={gif} />
                <img src={stats} />
                <img src={smile} />
                <img src={schedule} />
              </div>
              <button
                className={
                  "text-white bg-[#1DA1F2] py-2.5 px-8 mb-3 rounded-3xl mr-3"
                }
              >
                Tweet
              </button>
            </div>
          </div>
        </div>
        <div className=" p-3 flex gap-4 border-b-[1px]">
          <div className={"w-[10%]"}>
            <img className={"w-full"} src={profile2} />
          </div>
          <div className="flex flex-col gap-2 w-[85%] ">
            <div className={"flex gap-1 items-center"}>
              <p className="font-bold">Designsta</p>
              <p className={"text-sm"}>@inner</p>
              <p className={"text-xs"}>-</p>
              <p className={"text-sm"}>25m</p>
            </div>
            <p className={"text-sm"}>
              Twitterdagi ayol-erkak qarama -qarshiliginglardan o'zinglar
              zerikmadinglarmi?
            </p>
            <div className="flex gap-12 pt-3">
              <div className="flex gap-2 items-center">
                <img src={comment} />
                <p>10</p>
              </div>

              <div className="flex gap-2 items-center">
                <img src={retweet} />
                <p>1</p>
              </div>

              <div className="flex gap-2 items-center">
                <img src={like} />
                <p>8</p>
              </div>
              <img src={share} />
              <img src={tweetstats} />
            </div>
          </div>
        </div>
        <div className=" p-3 flex gap-4 border-b-[1px] w-full">
          <div className={"w-[10%] "}>
            <img className={"w-full"} src={profile3} />
          </div>
          <div className="flex flex-col gap-2 w-[85%]">
            <div className={"flex gap-1 items-center"}>
              <p className="font-bold">cloutexhibition</p>
              <p className={"text-sm"}>@RajLahoti</p>
              <p className={"text-xs"}>-</p>
              <p className={"text-sm"}>22m</p>
            </div>
            <p className={"text-sm"}>
              YPIP dasturining bu yilgi sezoni ham o'z nihoyasiga yetmoqda .
              Mentorlik davomida talaba va yangi bitiruvcihilarni o'sayotganini
              ko'rib hursand bo'ladi odam.
            </p>
            <div className="flex gap-12 pt-3">
              <div className="flex gap-2 items-center">
                <img src={comment} />
                <p>10</p>
              </div>

              <div className="flex gap-2 items-center">
                <img src={retweet} />
                <p>5</p>
              </div>

              <div className="flex gap-2 items-center">
                <img src={like} />
                <p>9</p>
              </div>
              <img src={share} />
              <img src={tweetstats} />
            </div>
          </div>
        </div>
        <div className=" p-3 flex gap-4 border-b-[1px] w-full">
          <div className={"w-[10%] "}>
            <img className={"w-full"} src={profile4} />
          </div>
          <div className="flex flex-col gap-2 w-[85%]">
            <div className={"flex gap-1 items-center"}>
              <p className="font-bold">CreativePhoto</p>
              <p className={"text-sm"}>@cloutexhibition</p>
              <p className={"text-xs"}>-</p>
              <p className={"text-sm"}>1h</p>
            </div>
            <p className={"text-sm"}>Some russian words for kebabs</p>
            <img src={kebab} />
            <div className="flex gap-12 pt-3">
              <div className="flex gap-2 items-center">
                <img src={comment} />
                <p>10</p>
              </div>

              <div className="flex gap-2 items-center">
                <img src={retweet} />
                <p>5</p>
              </div>

              <div className="flex gap-2 items-center">
                <img src={like} />
                <p>9</p>
              </div>
              <img src={share} />
              <img src={tweetstats} />
            </div>
          </div>
        </div>
      </div>
      <div className="w-1/4 border-l-[1px] flex pl-6">
        <div className={"w-[80%] flex flex-col gap-8"}>
          <div className={"relative"}>
            <input
              type={"text"}
              className="border w-full pl-10 py-2.5 text-xs rounded-2xl bg-slate-100 "
              placeholder={"Search Twitter"}
            />
            <CiSearch className={"absolute top-2.5 left-3.5"} />
          </div>
          <div className={" flex flex-col gap-5 py-5 rounded-lg bg-slate-100"}>
            <div className={"flex justify-between items-center"}>
              <h3>Trends for you </h3>
              <IoSettingsOutline />
            </div>
            <div className={"flex justify-between"}>
              <div className={"flex flex-col gap-1"}>
                <p className={"text-xs"}>Trending in Germany</p>
                <h4 className={"text-base"}>Revolution</h4>
                <p className={"text-xs"}>50.4K Tweets</p>
              </div>
              <IoIosMore size={"20px"} />
            </div>
            <div className={"flex justify-between"}>
              <div className={"flex flex-col gap-1"}>
                <p className={"text-xs"}>Trending in Germany</p>
                <h4 className={"text-base"}>Revolution</h4>
                <p className={"text-xs"}>50.4K Tweets</p>
              </div>
              <IoIosMore size={"20px"} />
            </div>
            <div className={"flex justify-between"}>
              <div className={"flex flex-col gap-1"}>
                <p className={"text-xs"}>Trending in Germany</p>
                <h4 className={"text-base"}>Revolution</h4>
                <p className={"text-xs"}>50.4K Tweets</p>
              </div>
              <IoIosMore size={"20px"} />
            </div>
            <p
              className={
                "text-sm text-[#1DA1F2] hover:cursor-pointer hover:underline"
              }
            >
              Show more
            </p>
          </div>
          <div className={"flex flex-col gap-5 py-5 rounded-lg bg-slate-100"}>
            <h3>You might like</h3>
            <div className={"flex gap-2  items-center justify-between"}>
              <div className={"flex items-center gap-2.5"}>
                <img src={profile5} className={"w-10"} />
                <div className={"flex flex-col gap-0.5"}>
                  <p className={"text-xs font-semibold"}>Mushtariy</p>
                  <p className={"text-xs font-light text-slate-600"}>
                    @Mushtar565266
                  </p>
                </div>
              </div>
              <button
                className={"text-sm bg-black text-white px-3 py-1 rounded-2xl"}
              >
                Follow
              </button>
            </div>
            <div className={"flex gap-2  items-center justify-between "}>
              <div className={"flex items-center gap-2.5"}>
                <img src={profile6} className={"w-10"} />
                <div className={"flex flex-col gap-0.5"}>
                  <p className={"text-xs font-semibold"}>Shuhratbek</p>
                  <p className={"text-xs font-light text-slate-600"}>
                    @mrshukhrat
                  </p>
                </div>
              </div>
              <button
                className={"text-sm bg-black text-white px-3 py-1 rounded-2xl"}
              >
                Follow
              </button>
            </div>
            <p
              className={
                "text-sm text-[#1DA1F2] hover:cursor-pointer hover:underline"
              }
            >
              Show more
            </p>
          </div>
          <div className={" flex flex-wrap gap-2"}>
            <p className={"text-[10px] hover:underline hover:cursor-pointer"}>
              Terms of Service
            </p>
            <p className={"text-[10px] hover:underline hover:cursor-pointer"}>
              Privacy Policy
            </p>
            <p className={"text-[10px] hover:underline hover:cursor-pointer"}>
              Cookie Policy
            </p>
            <p className={"text-[10px] hover:underline hover:cursor-pointer"}>
              Imprint
            </p>
            <p className={"text-[10px] hover:underline hover:cursor-pointer"}>
              Ads Info
            </p>
            <p className={"text-[10px] hover:underline hover:cursor-pointer"}>
              More...
            </p>
            <div className={"flex items-center gap-0.5"}>
              <PiCopyrightLight />
              <p className={"text-[10px] hover:underline hover:cursor-pointer"}>
                2021 Twitter,Inc.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
