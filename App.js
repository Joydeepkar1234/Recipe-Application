import React, { useState } from "react";
import RecipeForm from "./RecipeForm";
import RecipeList from "./RecipeList";
import { MenuList } from "./MenuList";
import "./App.css";

const App = () => {
  const [recipes, setRecipes] = useState(MenuList);
  const [searchQuery, setSearchQuery] = useState("");

  const addRecipe = (newRecipe) => {
    setRecipes([...recipes, newRecipe]);
  };

  const deleteRecipe = (id) => {
    setRecipes(recipes.filter((_, index) => index !== id));
  };

  const editRecipe = (id, updatedRecipe) => {
    setRecipes(
      recipes.map((recipe, index) => (index === id ? updatedRecipe : recipe))
    );
  };

  return (
    <div>
      <h1>Recipe Application</h1>
      <input
        type="text"
        placeholder="Search by title or ingredient"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <RecipeForm addRecipe={addRecipe} />
      <RecipeList
        recipes={recipes}
        searchQuery={searchQuery}
        deleteRecipe={deleteRecipe}
        editRecipe={editRecipe}
      />
    </div>
  );
};

export default App;
