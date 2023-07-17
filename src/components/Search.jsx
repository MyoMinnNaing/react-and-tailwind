import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const search = () => {
  const { name } = useParams();
  const [items, setItem] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const api = await fetch(
      `https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`
    );
    const { meals } = await api.json();

    setItem(meals);
    console.log(meals);
  };

  return (
    <>
      {items.map((item, index) => (
        <div
          key={index}
          className=" p-10 mb-10 flex justify-center items-center space-x-4"
        >
          <div className="  w-1/3 flex justify-center items-center">
            <img className="" src={item.strMealThumb} alt="" />
          </div>
          <div className=" w-1/3 px-4 mb-5">
            <h1 className=" text-xl text-blue-600 font-bold text-center">
              {item.strMeal}
            </h1>
            <p className=" text-gray-600  h-60 overflow-hidden ">
              {item.strInstructions}
            </p>
          </div>
        </div>
      ))}
    </>
  );
};

export default search;
