import React from "react";
import RecipeCard from "./RecipeCard";
import { Recipe } from "../types";

type RecipeListProps = {
  recipes: Recipe[];
  onSelect: (recipe: Recipe) => void;
};

export default function RecipeList({ recipes, onSelect }: RecipeListProps) {
  if (!recipes.length) {
    return <p className="text-center text-gray-800">No recipes found...</p>;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 m-6">
      {recipes.map((recipe, idx) => (
        <RecipeCard key={idx} recipe={recipe} onClick={onSelect} />
      ))}
    </div>
  );
}
