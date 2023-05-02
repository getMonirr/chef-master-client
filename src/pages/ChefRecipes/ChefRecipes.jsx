import React from "react";
import { useLoaderData } from "react-router-dom";
import SingleChefBanner from "../../components/SingleChefBanner";
import SingleRecipe from "../../components/SingleRecipe";

const ChefRecipes = () => {
  const chef = useLoaderData();
  const { recipes,chef_name } = chef;
  console.log(chef);
  return (
    <div className="container mx-auto pb-20 px-5">
      <SingleChefBanner chef={chef} />
      <div className=" text-center space-y-3 py-8 mt-16">
        <h2 className="font-bold text-4xl underline-offset-4 underline decoration-orange-400"> {chef_name} Recipes
        </h2>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 pb-16 gap-6">
        {recipes.map((recipe, index) => (
          <SingleRecipe key={index} recipe={recipe} />
        ))}
      </div>
    </div>
  );
};

export default ChefRecipes;
