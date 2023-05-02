import React from "react";
import { Rating } from "@smastrom/react-rating";

const SingleRecipe = ({ recipe }) => {
  const { recipe_name, ingredients, rating, cooking_method } = recipe;
  return (
    <div className="card w-full bg-slate-600 shadow-xl text-white">
      <div className="card-body space-y-6">
        <h2 className="card-title text-orange-400">
          Recipe Name: <span className="text-white">{recipe_name}</span>{" "}
        </h2>
        <div>
          <p>
            <span className="text-orange-400 text-xl">Ingredients:</span>
            {ingredients.map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
          </p>
        </div>
        <div>
          <p>
            <span className="text-orange-400 text-xl">Cooking Method:</span>
            {cooking_method.map((method, index) => (
              <li className="list-decimal" key={index}>
                {method}
              </li>
            ))}
          </p>
        </div>
        <div>
          <div className="flex items-center gap-4">
            <span className="text-orange-400 text-xl">Rating:</span>
            <Rating style={{ maxWidth: 110 }} value={rating} readOnly />
          </div>
        </div>
        <div className="card-actions justify-end">
          <button className="btn bg-orange-400 border border-orange-300">
            Add To Favorite
          </button>
        </div>
      </div>
    </div>
  );
};

export default SingleRecipe;
