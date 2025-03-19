import Input from "../../components/Input";
import React from "react";
import "../../components/post.css";
import { AiFillLike } from "react-icons/ai";
import { FaComments } from "react-icons/fa";
import { FaShareFromSquare } from "react-icons/fa6";

export default async function page() {
  const HomeImg =
    "https://thumbs.dreamstime.com/b/beautiful-new-home-exterior-clear-evening-provides-setting-luxurious-34711767.jpg";

  let data = null;
  try {
    const result = await fetch(`/api/post/all`, {
      method: "POST",
      cache: "no-store",
    });
    data = await result.json();
  } catch (error) {
    console.log(error);
  }
  console.log(data);
  return (
    <div className="min-h-screen max-w-xl mx-auto border-r border-l ">
      <div className="py-2 px-3 sticky top-0 z-50 bg-white border-b border-gray-200 ">
        <h2 className="text-lg sm:text-xl font-bold">Home</h2>
        <Input />
        <div>
          {data.map((item) => (
            <>
              <div className="main-post">
                <div className="profile-info-main">
                  <div className="profile-info">
                    <div className="">
                      <img className="avator" src={item.profileImg} alt="" />
                    </div>
                    <div className="">
                      <p className="user__name">ibrahim312</p>
                      <p className="First_name">{item.name}</p>
                    </div>
                  </div>
                  <div className="post-timing">
                    <p>15 min ago</p>
                  </div>
                </div>
                <div className="post-text">
                  <h3>{item.text}</h3>
                </div>
                <div className="post-img">
                  <img src={item.image ? item.image : HomeImg} alt="" />
                </div>
                <div className="event-buttons">
                  <div className="like">
                    <span>
                      <AiFillLike />
                    </span>{" "}
                    <span>Like</span>{" "}
                  </div>
                  <div className="comments">
                    <button>
                      {" "}
                      <span>
                        <FaComments />
                      </span>
                      <span>Comments</span>
                    </button>
                  </div>
                  <div className="share">
                    <span>
                      <FaShareFromSquare />
                    </span>
                    <span>share</span>
                  </div>
                </div>
              </div>
            </>
          ))}
        </div>
      </div>
    </div>
  );
}
