import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Detail = () => {
  const { id } = useParams();

  const [meals, setMeal] = useState({});

  useEffect(() => {
    fetchMeal();
  }, []);

  const fetchMeal = async () => {
    const api = await fetch(
      `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
    );
    const { meals } = await api.json();

    setMeal(meals[0]);

    console.log(meals[0]);
  };
  return (
    <div className=" h-screen flex justify-center items-center space-x-4">
      <div className="  w-1/3 flex justify-center items-center">
        <img className="" src={meals.strMealThumb} alt="" />
      </div>
      <div className=" w-1/3 px-4 mb-5">
        <h1 className=" text-xl text-blue-600 font-bold text-center">
          {meals.strMeal}
        </h1>
        <p className=" text-gray-600  h-60 overflow-scroll ">
          {meals.strInstructions}
        </p>
      </div>
    </div>
  );
};

export default Detail;
