import React from "react";
import { useLoaderData } from "react-router-dom";

const ChefRecipes = () => {
  const chef = useLoaderData();
  console.log(chef);
  return <div>Chef Recipes</div>;
};

export default ChefRecipes;
