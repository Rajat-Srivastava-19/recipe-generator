import React from "react";
import Image from "next/image";
import { Recipe } from "../types"; 

type RecipeCardProps = {
  recipe: Recipe;
  onClick: (recipe: Recipe) => void;
};

// Removed duplicate Recipe type definition since it's imported from "./RecipeList"



export default function RecipeCard({ recipe, onClick }: RecipeCardProps) {
  return (
    <div
      className="max-w-sm bg-white rounded-xl shadow hover:scale-105 transition cursor-pointer"
      onClick={() => onClick(recipe)}
    >
      <Image
        className="rounded-t-xl w-full h-40 object-cover"
        src={recipe.image}
        alt={recipe.title}
        width={400}
        height={160}
        style={{ objectFit: "cover", borderTopLeftRadius: "0.75rem", borderTopRightRadius: "0.75rem" }}
      />
      <div className="p-4">
        <h3 className="text-lg font-bold text-gray-800">{recipe.title}</h3>
        <p className="text-gray-800 text-sm mt-2">
          {recipe.description.slice(0, 60)}...
        </p>
      </div>
    </div>
  );
}
