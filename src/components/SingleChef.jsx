import React from "react";
import { TbChefHat } from "react-icons/tb";
import { IoFastFoodOutline } from "react-icons/io5";
import { AiOutlineLike } from "react-icons/ai";
import { Link } from "react-router-dom";

const SingleChef = ({ chef }) => {
  const {
    id,
    chef_name,
    chef_picture,
    likes,
    number_of_recipes,
    years_of_experience,
  } = chef;
  return (
    <div className="card card-compact w-full bg-base-100 shadow-xl">
      <figure>
        <img src={chef_picture} alt={chef_name} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{chef_name}</h2>
        <p className="font-bold flex items-center gap-2 text-2xl">
          {" "}
          <TbChefHat /> Experience: {years_of_experience}
        </p>
        <p className="font-bold flex items-center gap-2 text-xl text-orange-500">
          {" "}
          <IoFastFoodOutline /> Recipes: {number_of_recipes}
        </p>
        <p className="font-bold flex items-center gap-2 text-xl">
          {" "}
          <AiOutlineLike /> Likes: {likes}
        </p>
        <div className="card-actions">
          <Link to={`/chef/${id}`} className="btn btn-primary w-full bg-orange-400 border-orange-300">
          View Recipes
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SingleChef;