import React from "react";
import { BsSearch } from "react-icons/bs";

const MailCard = ({ name, image }) => {
  return (
    <div className=" group cursor-pointer w-1/5 relative">
      {/* <h1>{name}</h1> */}
      <img src={image} className=" rounded-lg" alt="" />
      <div className="hidden group-hover:inline-block  absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-orange-400  border border-orange-600  rounded-full p-5">
        <BsSearch className="  text-xl text-white font-bold" />
      </div>
    </div>
  );
};

export default MailCard;
