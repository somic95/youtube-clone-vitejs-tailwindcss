import React from "react";
import "./navbar.css";
import menu_icon from "../../assets/menu.png";
import logo from "../../assets/logo.png";
import search_icon from "../../assets/search.png";
import upload_icon from "../../assets/upload.png";
import more_icon from "../../assets/more.png";
import notification_icon from "../../assets/notification.png";
import profile_icon from "../../assets/logo_em.jpg";
import { Link } from "react-router-dom";

const navbar = ({ setSidebar }) => {
  return (
    <nav className="flex-div">
      <div className="nav-left flex-div">
        <img
          src={menu_icon}
          alt=""
          className="menu-icon w-[22px] mr-[25px]"
          onClick={() => setSidebar((prev) => (prev === false ? true : false))}
        />
        <Link to="/">
          <img src={logo} alt="" className="logo w-[130px]" />
        </Link>
      </div>

      <div className="nav-middle flex-div">
        <div className="search-box flex-div">
          <input
            type="text"
            placeholder="Search"
            className="w-[400px] border-none outline-none bg-transparent"
          />
          <img src={search_icon} alt="" className="w-[15px]" />
        </div>
      </div>

      <div className="nav-right flex-div">
        <img src={upload_icon} alt="" />
        <img src={more_icon} alt="" />
        <img src={notification_icon} alt="" />
        <img
          src={profile_icon}
          alt=""
          className="user-icon w-[35px] rounded-[50%]"
        />
      </div>
    </nav>
  );
};

export default navbar;
