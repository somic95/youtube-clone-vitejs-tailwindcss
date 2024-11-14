import React, { useState } from "react";
import "./home.css";
import Sidebar from "../../Components/Sidebar/sidebar";
import Feed from "../../Components/Feed/feed";

const home = ({ sidebar }) => {
  const [category, setCategory] = useState(0);

  return (
    <>
      <Sidebar
        sidebar={sidebar}
        category={category}
        setCategory={setCategory}
      />
      <div
        className={`container bg-[#f9f9f9] pl-[17%] pr-[2%] py-5 ${
          sidebar ? "" : "large-container pl-[7%]"
        }`}
      >
        <Feed category={category} />
      </div>
    </>
  );
};

export default home;
