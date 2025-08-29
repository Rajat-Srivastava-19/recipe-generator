"use client";

import React, { useState } from "react";
import SearchBar from "../components/SearchBar";
import RecipeList from "../components/RecipeList";
import RecipeModal from "../components/RecipeModal";
import { Recipe } from "../types";

interface ScoredRecipe extends Recipe {
  matchScore: number;
}

export default function Home() {
  const [recipes, setRecipes] = useState<ScoredRecipe[]>([]);
  const [selectedRecipe, setSelectedRecipe] = useState<Recipe | null>(null);

  const handleSearch = async (query: string) => {
  const inputIngredients = query
    .toLowerCase()
    .split(",")
    .map(i => i.trim())
    .filter(Boolean);

  if (inputIngredients.length === 0) return;

  const res = await fetch("http://localhost:5000/api/recipes/search", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ ingredients: inputIngredients }),
  });

  const data = await res.json();
  setRecipes(data);
};


  return (
    <div>
      <h1 className="text-center py-8 text-3xl font-extrabold text-gray-800">
        Smart Recipe Generator
      </h1>
      <SearchBar onSearch={handleSearch} />

      {recipes.length === 0 ? (
        <p className="text-center text-gray-500 mt-6">
          No recipes found. Try entering ingredients like: <b>tomato, cheese</b>
        </p>
      ) : (
        <div>
          <RecipeList
            recipes={recipes}
            onSelect={recipe => setSelectedRecipe(recipe)}
          />
        </div>
      )}

      <RecipeModal
        recipe={selectedRecipe}
        onClose={() => setSelectedRecipe(null)}
      />
    </div>
  );
}
