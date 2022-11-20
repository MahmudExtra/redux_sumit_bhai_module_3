import React from "react";
import navImg from "../assets/lws.svg";

const Navigation = () => {
  return (
    <nav className="bg-slate-100 shadow-md">
      <div className="max-w-7xl mx-auto px-5 lg:px-0 flex justify-between py-3 items-center">
        <img className="h-10" src={navImg} alt="Learn with Sumit" />
      </div>
    </nav>
  );
};

export default Navigation;
