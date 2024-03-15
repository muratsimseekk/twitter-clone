import { FaTwitter } from "react-icons/fa";
import { BiSolidHomeCircle } from "react-icons/bi";
import {
  CiCircleMore,
  CiHashtag,
  CiLocationOn,
  CiSearch,
  CiUser,
  CiViewList,
} from "react-icons/ci";
import { GoArrowLeft, GoBell } from "react-icons/go";
import { HiOutlineEnvelope } from "react-icons/hi2";
import { PiBookmarkSimple } from "react-icons/pi";

import background from "../assets/profile/background.png";
import profile from "../assets/profile/profile1.png";
import born from "../assets/profile/born.png";
import tweetPhoto from "../assets/profile/tweetphoto.png";

import media1 from "../assets/profile/media1.png";
import media2 from "../assets/profile/media2.png";
import media3 from "../assets/profile/media3.png";
import media4 from "../assets/profile/media4.png";
import media5 from "../assets/profile/media5.png";
import media6 from "../assets/profile/media5.png";

import comment from "../assets/homepage/comment.png";
import retweet from "../assets/homepage/retweet.png";
import like from "../assets/homepage/like.png";
import share from "../assets/homepage/share.png";
import tweetstats from "../assets/homepage/tweetstats.png";

import { IoSettingsOutline } from "react-icons/io5";
import { IoIosLink, IoIosMore } from "react-icons/io";
import profile5 from "../assets/homepage/profile5.png";
import profile6 from "../assets/homepage/profile6.png";
import { SlCalender } from "react-icons/sl";
import { VscPinned } from "react-icons/vsc";
import { useNavigate } from "react-router-dom";
import profile1 from "../assets/homepage/profile1.png";

function Profile() {
  const navigate = useNavigate();

  return (
    <div className={"w-full flex my-10"}>
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
      <div className={"w-1/2"}>
        <div className="flex items-center  border-b-[1px] p-3 w-full gap-7">
          <GoArrowLeft
            size={"25px"}
            onClick={() => {
              navigate("/");
            }}
          />
          <div className={"flex flex-col justify-between "}>
            <h2 className="text-lg font-semibold">Bobur</h2>
            <p className={"text-xs font-extralight"}>1,070 Tweets</p>
          </div>
        </div>
        <div className="flex border-b-[1px] gap-2">
          <div className={"relative"}>
            <div>
              <img className={"h-[200px]"} src={background} />
            </div>
            <img
              src={profile}
              className={"absolute top-[150px] left-5 w-[100px]"}
            />
            <div className={"h-max w-full  px-4 pt-4 flex justify-end"}>
              <button
                className={"border-2 h-max py-1 px-4 rounded-3xl border-black"}
              >
                Edit profile
              </button>
            </div>
            <div className={" w-full pt-2  pl-6 flex flex-col gap-3"}>
              <div className={"flex flex-col "}>
                <h3 className={"text-lg font-extrabold"}>Bobur</h3>
                <p className="text-xs font-light text-slate-500">
                  @bobur_mavlonov
                </p>
              </div>
              <p className={"text-xs font-normal "}>
                UX&UI designer at{" "}
                <span className={"text-[#1DA1F2]"}>@abutechuz</span>
              </p>
              <div className={"flex gap-5"}>
                <div className={"flex items-center gap-1"}>
                  <CiLocationOn size="18px" />
                  <p className="text-xs text-slate-500 font-light">
                    Mashag'daman
                  </p>
                </div>
                <div className="flex items-center gap-1">
                  <IoIosLink />
                  <p className={"text-xs text-[#1DA1F2]"}>
                    t.me/boburjon_mavlonov
                  </p>
                </div>
                <div className="flex items-center gap-1">
                  <img className="w-[12px]" src={born} />
                  <p className={"text-xs text-slate-500 font-light"}>
                    Born November 24,2000
                  </p>
                </div>
                <div className="flex items-center gap-1">
                  <SlCalender />
                  <p className={"text-xs text-slate-500 font-light"}>
                    Joined May 2020
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="flex gap-2 items-center">
                  <p className={"text-xs font-bold"}>67</p>
                  <p className={"text-xs text-slate-500 font-light"}>
                    Following
                  </p>
                </div>
                <div className="flex gap-2 items-center">
                  <p className={"text-xs font-bold"}>47</p>
                  <p className={"text-xs text-slate-500 font-light"}>
                    Followers
                  </p>
                </div>
              </div>
              <div className="flex justify-between px-6">
                <h4 className="text-sm font-bold border-b-4 w-max pt-4 pb-2 border-[#1DA1F2]">
                  Tweets
                </h4>

                <h4 className="text-sm w-max pt-4 pb-2 ">Tweets & Replies</h4>

                <h4 className="text-sm w-max pt-4 pb-2 ">Media</h4>

                <h4 className="text-sm w-max pt-4 pb-2 ">Likes</h4>
              </div>
            </div>
          </div>
        </div>
        <div className={"flex flex-col"}>
          <div className={"flex pl-16 pt-4 items-center gap-2.5"}>
            <VscPinned size={"18px"} />
            <p className={"text-sm font text-slate-800"}>Pinned Tweet</p>
          </div>
          <div className=" pl-3 pt-1.5 pb-4 flex gap-4 border-b-[1px]">
            <div className={"w-[10%]"}>
              <img className={"w-full"} src={profile} />
            </div>
            <div className="flex flex-col gap-0.5 w-[85%] ">
              <div className={"flex justify-between"}>
                <div className={"flex gap-1 items-center"}>
                  <p className="font-bold">Bobur</p>
                  <p className={"text-sm"}>@bobur_mavlonov</p>
                  <p className={"text-xs"}>-</p>
                  <p className={"text-sm"}>Apr 1</p>
                </div>
                <IoIosMore size={"28px"} />
              </div>
              <p className={"text-sm"}>
                4-kursni tugatgunimcha kamida bitta biznesim bo'loshini,uylanish
                uchun moddiy jihatdan to'la-to'kis tayyor bo'lishni,sog'lik va
                jismoniy holatni normallashtrishini reja qildim
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
        </div>

        <div className=" pl-3 pt-1.5 pb-4 flex gap-4 border-b-[1px]">
          <div className={"w-[10%]"}>
            <img className={"w-full"} src={profile} />
          </div>
          <div className="flex flex-col gap-0.5 w-[85%] ">
            <div className={"flex justify-between"}>
              <div className={"flex gap-1 items-center"}>
                <p className="font-bold">Bobur</p>
                <p className={"text-sm"}>@bobur_mavlonov</p>
                <p className={"text-xs"}>-</p>
                <p className={"text-sm"}>Apr 1</p>
              </div>
              <IoIosMore size={"28px"} />
            </div>
            <p className={"text-sm"}>
              Bizda shunaqa bir illat bor: gap bo'lsa bo'ldi , nima
              deyayotganimizha qarab ham o'tirmaymiz.
              <br /> Bitta biznes trener nito gapirib qo'ysa , hamma biznes
              trenerlar yomonga chiqadi slishkom aqli odamlar nazdida.
              <br />
              Gap faqat biznes trenerlar haqida emas.
            </p>
            <div className="flex gap-12 pt-3">
              <div className="flex gap-2 items-center">
                <img src={comment} />
                <p></p>
              </div>
              <div className="flex gap-2 items-center text-green-400">
                <img src={retweet} />
                <p className={"text-slate-500"}>5</p>
              </div>
              <div className="flex gap-2 items-center">
                <img src={like} />
                <p className={"text-red-600"}>9</p>
              </div>
              <img src={share} />
              <img src={tweetstats} />
            </div>
          </div>
        </div>
        <div className=" pl-3 pt-1.5 pb-4 flex gap-4 border-b-[1px]">
          <div className={"w-[10%]"}>
            <img className={"w-full"} src={profile} />
          </div>
          <div className="flex flex-col gap-0.5 w-[85%] ">
            <div className={"flex justify-between"}>
              <div className={"flex gap-1 items-center"}>
                <p className="font-bold">Bobur</p>
                <p className={"text-sm"}>@bobur_mavlonov</p>
                <p className={"text-xs"}>-</p>
                <p className={"text-sm"}>Apr 1</p>
              </div>
              <IoIosMore size={"28px"} />
            </div>
            <p className={"text-sm"}>A bo'pti maskamasman</p>
            <img className={"w-5/6 pt-2"} src={tweetPhoto} />
            <div className="flex gap-12 pt-3">
              <div className="flex gap-2 items-center">
                <img src={comment} />
                <p className={"text-slate-500"}>10</p>
              </div>
              <div className="flex gap-2 items-center text-green-400">
                <img src={retweet} />
                <p className={"text-slate-500"}>5</p>
              </div>
              <div className="flex gap-2 items-center">
                <img src={like} />
                <p className={"text-slate-500"}>8</p>
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
          <div className={"flex flex-wrap justify-between"}>
            <img className={"w-[33%]"} src={media1} />
            <img className={"w-[33%]"} src={media2} />
            <img className={"w-[33%]"} src={media3} />
            <img className={"w-[33%]"} src={media4} />
            <img className={"w-[33%]"} src={media5} />
            <img className={"w-[33%]"} src={media6} />
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
        </div>
      </div>
    </div>
  );
}

export default Profile;
