import React from "react";
import { TbChefHat } from "react-icons/tb";
import { IoFastFoodOutline } from "react-icons/io5";
import { AiOutlineLike } from "react-icons/ai";
import LazyLoad from "react-lazy-load";

const SingleChefBanner = ({ chef }) => {
  const {
    chef_name,
    chef_picture,
    likes,
    number_of_recipes,
    years_of_experience,
    bio,
  } = chef;

  return (
    <>
      <div className=" text-center space-y-3 py-8">
        <h2 className="font-bold text-4xl underline-offset-4 underline decoration-orange-400">
          {chef_name} Details
        </h2>
        <p>Lorem ipsum dolor sit amet consectetur.</p>
      </div>
      <div className="card lg:card-side bg-base-100 shadow-xl">
        <figure className="w-6/12">
          <LazyLoad height={500}>
            <img src={chef_picture} alt={chef_name} />
          </LazyLoad>
        </figure>
        <div className="card-body justify-start w-6/12">
          <h2 className="card-title font-bolder text-3xl mb-6">{chef_name}</h2>
          <p>{bio}</p>
          <div className="space-y-6">
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
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleChefBanner;
