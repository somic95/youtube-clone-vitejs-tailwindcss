import React from "react";
import "./sidebar.css";
import home from "../../assets/home.png";
import game_icon from "../../assets/game_icon.png";
import automobiles from "../../assets/automobiles.png";
import sports from "../../assets/sports.png";
import entertainment from "../../assets/entertainment.png";
import tech from "../../assets/tech.png";
import music from "../../assets/music.png";
import blogs from "../../assets/blogs.png";
import news from "../../assets/news.png";
import pet from "../../assets/pet.png";
import emmy from "../../assets/logo_em.jpg";

const sidebar = ({ sidebar, category, setCategory }) => {
  return (
    <div
      className={`${
        sidebar
          ? "sidebar bg-white w-[15%] h-screen top-0 pl-[2%] pt-[80px] fixed"
          : "small-sidebar bg-white w-[5%] h-screen top-0 pl-[2%] pt-[80px] fixed"
      }`}
    >
      <div className="shortcut-links">
        <div
          className={`side-link ${
            category === 0
              ? "active flex items-center mb-5 w-fit flex-wrap cursor-pointer"
              : "flex items-center mb-5 w-fit flex-wrap cursor-pointer"
          }`}
          onClick={() => setCategory(0)}
        >
          <img src={home} alt="" className="w-5 mr-5" />
          <p>Home</p>
        </div>
        <div
          className={`side-link ${
            category === 20
              ? "active flex items-center mb-5 w-fit flex-wrap cursor-pointer"
              : "flex items-center mb-5 w-fit flex-wrap cursor-pointer"
          }`}
          onClick={() => setCategory(20)}
        >
          <img src={game_icon} alt="" className="w-5 mr-5" />
          <p>Gaming</p>
        </div>
        <div
          className={`side-link ${
            category === 2
              ? "active flex items-center mb-5 w-fit flex-wrap cursor-pointer"
              : "flex items-center mb-5 w-fit flex-wrap cursor-pointer"
          }`}
          onClick={() => setCategory(2)}
        >
          <img src={automobiles} alt="" className="w-5 mr-5" />
          <p>Automobiles</p>
        </div>
        <div
          className={`side-link ${
            category === 17
              ? "active flex items-center mb-5 w-fit flex-wrap cursor-pointer"
              : "flex items-center mb-5 w-fit flex-wrap cursor-pointer"
          }`}
          onClick={() => setCategory(17)}
        >
          <img src={sports} alt="" className="w-5 mr-5" />
          <p>Sports</p>
        </div>
        <div
          className={`side-link ${
            category === 24
              ? "active flex items-center mb-5 w-fit flex-wrap cursor-pointer"
              : "flex items-center mb-5 w-fit flex-wrap cursor-pointer"
          }`}
          onClick={() => setCategory(24)}
        >
          <img src={entertainment} alt="" className="w-5 mr-5" />
          <p>Entertainment</p>
        </div>
        <div
          className={`side-link ${
            category === 15
              ? "active flex items-center mb-5 w-fit flex-wrap cursor-pointer"
              : "flex items-center mb-5 w-fit flex-wrap cursor-pointer"
          }`}
          onClick={() => setCategory(15)}
        >
          <img src={pet} alt="" className="w-5 mr-5" />
          <p>Pets</p>
        </div>
        <div
          className={`side-link ${
            category === 28
              ? "active flex items-center mb-5 w-fit flex-wrap cursor-pointer"
              : "flex items-center mb-5 w-fit flex-wrap cursor-pointer"
          }`}
          onClick={() => setCategory(28)}
        >
          <img src={tech} alt="" className="w-5 mr-5" />
          <p>Technology</p>
        </div>
        <div
          className={`side-link ${
            category === 10
              ? "active flex items-center mb-5 w-fit flex-wrap cursor-pointer"
              : "flex items-center mb-5 w-fit flex-wrap cursor-pointer"
          }`}
          onClick={() => setCategory(10)}
        >
          <img src={music} alt="" className="w-5 mr-5" />
          <p>Music</p>
        </div>
        <div
          className={`side-link ${
            category === 22
              ? "active flex items-center mb-5 w-fit flex-wrap cursor-pointer"
              : "flex items-center mb-5 w-fit flex-wrap cursor-pointer"
          }`}
          onClick={() => setCategory(22)}
        >
          <img src={blogs} alt="" className="w-5 mr-5" />
          <p>Blogs</p>
        </div>
        <div
          className={`side-link ${
            category === 25
              ? "active flex items-center mb-5 w-fit flex-wrap cursor-pointer"
              : "flex items-center mb-5 w-fit flex-wrap cursor-pointer"
          }`}
          onClick={() => setCategory(25)}
        >
          <img src={news} alt="" className="w-5 mr-5" />
          <p>News</p>
        </div>

        <hr
          className={`${
            sidebar
              ? "border-0 h-[1px] bg-[#ccc] w-[85%]"
              : "border-0 h-[1px] bg-[#ccc] w-1/2 mb-[25px]"
          }`}
        />
      </div>
      <div className="subscribe-list">
        <h3
          className={`${
            sidebar ? "text-[13px] my-[20px] mx-0 text-[#5a5a5a]" : "hidden"
          }`}
        >
          Subscribe
        </h3>
        <div className="side-link flex items-center mb-5 w-fit flex-wrap cursor-pointer">
          <img className="w-[25px] rounded-[50%] mr-5" src={emmy} alt="" />
          <p>Thanakorn</p>
        </div>
        <div className="side-link flex items-center mb-5 w-fit flex-wrap cursor-pointer">
          <img className="w-[25px] rounded-[50%] mr-5" src={emmy} alt="" />
          <p>Thanakorn</p>
        </div>
        <div className="side-link flex items-center mb-5 w-fit flex-wrap cursor-pointer">
          <img className="w-[25px] rounded-[50%] mr-5" src={emmy} alt="" />
          <p>Thanakorn</p>
        </div>
      </div>
    </div>
  );
};

export default sidebar;
