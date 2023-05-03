import React, { useState } from "react";
import { Rating } from "@smastrom/react-rating";
import { toast } from "react-toastify";

const SingleRecipe = ({ recipe }) => {
  const [favBtnDisable, setFavBtnDisable] = useState(false);
  const { recipe_name, ingredients, rating, cooking_method } = recipe;

  // handle add to favorite
  const handleAddToFavorite = () => {
    toast.success("Successfully add To favorite");
    setFavBtnDisable(true);
  };
  return (
    <div className="card w-full bg-gray-700 shadow-xl text-white">
      <div className="card-body space-y-6">
        <h2 className="card-title text-orange-400">
          Recipe Name: <span className="text-white">{recipe_name}</span>{" "}
        </h2>
        <div>
          <p>
            <span className="text-orange-400 text-xl block mb-3">Ingredients:</span>
            {ingredients.map((ingredient, index) => (
              <li className="mb-2" key={index}>{ingredient}</li>
            ))}
          </p>
        </div>
        <div>
          <p>
            <span className="text-orange-400 text-xl block mb-3">Cooking Method:</span>
            {cooking_method.map((method, index) => (
              <li className="list-decimal mb-2" key={index}>
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
          <button
            onClick={handleAddToFavorite}
            className="btn bg-orange-400 border border-orange-300"
            disabled={favBtnDisable}
          >
            Add To Favorite
          </button>
        </div>
      </div>
    </div>
  );
};

export default SingleRecipe;
