import React from "react";

export default function RecipeModal({ recipe, onClose }) {
  if (!recipe) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white rounded-xl p-6 max-w-lg w-full relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-700 hover:text-black"
        >
          ✖
        </button>
        <img src={recipe.image} alt={recipe.title} className="rounded-lg mb-4" />
        <h2 className="text-2xl font-bold">{recipe.title}</h2>
        <p className="text-gray-800 mt-2">{recipe.description}</p>
        <h3 className="mt-4 font-semibold">Ingredients:</h3>
        <ul className="list-disc pl-6 text-gray-600">
          {recipe.ingredients.map((ing, idx) => (
            <li key={idx}>{ing}</li>
          ))}
        </ul>
        <h3 className="mt-4 font-semibold">Instructions:</h3>
        <p className="text-gray-700">{recipe.instructions}</p>
      </div>
    </div>
  );
}
