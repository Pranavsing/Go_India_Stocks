// page.js

"use client";
import React, { useState } from "react";
import Header from "./Header";
import Menu from "./Menu";
import discussionPostsData from "./discussionData";
import market from "./marketData";

const Page = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedSection, setSelectedSection] = useState("discussion");

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleSectionChange = (section) => {
    setSelectedSection(section);
  };

  return (
    <div className="bg-white overflow-hidden">
      <Header toggleMenu={toggleMenu} isMenuOpen={isMenuOpen} />
      <div className={`flex w-full ${isMenuOpen ? "sm:pl-64" : ""}`}>
        <div
          className={`flexbox items-center  justify-center m-4  w-1/2 sm:w-4/6 `}
          onClick={() => handleSectionChange("discussion")}
        >
          <h1
            className={`text-white bg-blue-700 sm:text-blue-700 font-extrabold sm:bg-white hover:cursor-pointer rounded-xl pt-4 pb-4 text-2xl md:text-3xl m-4 mx-auto text-center ${
              selectedSection === "discussion"
                ? "bg-blue-700 text-white border-b-4 border-orange-500 sm:border-b-0"
                : "bg-white text-blue-700"
            }`}
          >
            Discussion Forum
          </h1>
        </div>
        <div
          className={`flexbox items-center justify-center m-4 w-1/2 sm:w-2/6 `}
          onClick={() => handleSectionChange("market")}
        >
          <h1
            className={`text-white bg-blue-700 font-extrabold sm:text-blue-700 sm:bg-white hover:cursor-pointer rounded-xl pt-4 pb-4 text-2xl md:text-3xl m-4 mx-auto text-center ${
              selectedSection === "market"
                ? "bg-blue-700 text-white border-b-4 border-orange-500 sm:border-b-0"
                : "bg-white text-blue-700"
            }`}
          >
            Market Stories
          </h1>
        </div>
      </div>
      <div className={`flex w-full ${isMenuOpen ? "sm:pl-64" : ""}`}>
        <div
          id="1"
          className={`flexbox items-center m-4 mb-0 w-full sm:w-4/6 ${
            selectedSection === "discussion"
              ? "sm:w-4/6 w-full"
              : "hidden sm:block"
          }`}
        >
          {discussionPostsData.map((post) => (
            <div className="bg-blue-700 m-5 rounded-xl" key={post.id}>
              {/* discussion part content */}
              <div className="m-4">
                <div className="p-4 mb-4">
                  <div className="flex items-center mb-2">
                    <img
                      src={post.profilePic}
                      alt="Profile Pic"
                      className="w-5 md:w-10 h-5 md:h-10 rounded-full mr-2"
                    />
                    <span className="font-bold">{post.name}</span>
                    <button className="ml-auto font-bold text-lg md:text-xl">
                      Profile
                    </button>
                    <span className="ml-auto text-sm md:text-base font-bold text-orange-500">
                      {post.minutesAgo} minutes ago
                    </span>
                  </div>
                  <p className="text-sm md:text-base pt-4 p-2">
                    {post.description}
                  </p>
                  <div className="flex mt-2">
                    <div className="w-1/4 flex items-center text-sm md:text-base  justify-center">
                      &#128151; {post.likes}
                    </div>
                    <div className="w-1/4 flex items-center  text-sm md:text-base justify-center">
                      &#128065; {post.views}
                    </div>
                    <div className="w-1/4 flex items-center text-sm md:text-base  justify-center">
                      &#128172; {post.comments} comments
                    </div>
                    <div className="w-1/4 flex items-center text-sm md:text-base hover:cursor-pointer justify-center">
                      &#128279; Share
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div
          id="2"
          className={`flexbox  m-4 w-full sm:w-2/6 ${
            selectedSection === "market" ? "sm:w-2/6 w-full" : "hidden sm:block"
          } `}
        >
          {market.map((news) => (
            <div className="bg-blue-700 m-5 rounded-xl" key={news.id}>
              {/* market part content */}
              <div className="m-4">
                <div className="p-4 mb-4">
                  <img src={news.img} alt="Random" className="mb-2" />
                  <h2 className=" text-base md:text-lg font-bold">
                    {news.topic}
                  </h2>
                  <p className="text-sm md:text-base">{news.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {isMenuOpen && <Menu />}
    </div>
  );
};

export default Page;
