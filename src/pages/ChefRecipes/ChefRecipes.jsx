import React from "react";
import { useLoaderData, useNavigation } from "react-router-dom";
import SingleChefBanner from "../../components/SingleChefBanner";
import SingleRecipe from "../../components/SingleRecipe";
import { Dna } from "react-loader-spinner";

const ChefRecipes = () => {
  const chef = useLoaderData();
  const { recipes, chef_name } = chef;

  // for loading
  const navigation = useNavigation();
  return (
    <div className="container mx-auto pb-20 px-5">
      {navigation.state === "loading" ? (
        <div className="mx-auto text-center container w-96">
          <Dna
            visible={true}
            height="80"
            width="80"
            ariaLabel="dna-loading"
            wrapperStyle={{}}
            wrapperClass="dna-wrapper"
          />
        </div>
      ) : (
        <>
          <SingleChefBanner chef={chef} />
          <div className=" text-center space-y-3 py-8 mt-16">
            <h2 className="font-bold text-4xl underline-offset-4 underline decoration-orange-400">
              {" "}
              {chef_name} Recipes
            </h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 pb-16 gap-6">
            {recipes.map((recipe, index) => (
              <SingleRecipe key={index} recipe={recipe} />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default ChefRecipes;
