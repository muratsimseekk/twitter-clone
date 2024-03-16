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
import { useNavigate } from "react-router-dom";
import LeftSide from "./LeftSide.jsx";
import { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { tweetData } from "../store/action/globalState.jsx";
function HomePage() {
  const dispatch = useDispatch();

  const tweets = useSelector((state) => state.global.tweets);
  const fetchTweets = async () => {
    try {
      await axios.get("http://localhost:3000/tweet/").then((res) => {
        dispatch(tweetData(res.data.data));
      });
    } catch (error) {
      console.log("An error occured while fetching data :", error);
    } finally {
      console.log(tweets);
    }
  };

  useEffect(() => {
    fetchTweets();
  }, []);

  return (
    <div className={"w-full flex my-10"}>
      <LeftSide />
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
        {tweets?.map((tweet, i) => (
          <div key={i} className=" p-3 flex gap-4 border-b-[1px]">
            <div className={"w-[10%]"}>
              <img className={"w-full"} src={profile2} />
            </div>
            <div className="flex flex-col gap-2 w-[85%] ">
              <div className={"flex gap-1 items-center"}>
                <p className="font-bold">{tweet?.username}</p>
                <p className={"text-sm"}>@inner</p>
                <p className={"text-xs"}>-</p>
                <p className={"text-sm"}>25m</p>
              </div>
              <p className={"text-sm"}>{tweet?.content}</p>
              <div className="flex gap-12 pt-3">
                <div className="flex gap-2 items-center">
                  <img src={comment} />
                  <p>{tweet?.replies.length}</p>
                </div>

                <div className="flex gap-2 items-center">
                  <img src={retweet} />
                  <p>{tweet?.retweets}</p>
                </div>

                <div className="flex gap-2 items-center">
                  <img src={like} />
                  <p>{tweet?.likes}</p>
                </div>
                <img src={share} />
                <img src={tweetstats} />
              </div>
            </div>
          </div>
        ))}
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
