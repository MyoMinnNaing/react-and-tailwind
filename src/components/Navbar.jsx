import React, { useState } from "react";
import reactSvg from "../assets/react.svg";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();
  // console.log(search);

  const submitHandler = (e) => {
    e.preventDefault;
    navigate(`/search/` + search);
  };

  return (
    <nav className=" flex space-x-10 justify-evenly items-center py-5 bg-gray-100">
      <div>
        <Link to={"/"}>
          <img className=" w-20" src={reactSvg} alt="" />
        </Link>
      </div>
      <div className="">
        <form onSubmit={submitHandler}>
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            type="text"
            className=" border border-gray-400"
          />
        </form>
      </div>
    </nav>
  );
};

export default Navbar;
