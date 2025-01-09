import React, { useState } from "react";

const RecipeForm = ({ addRecipe }) => {
  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [steps, setSteps] = useState("");
  const [description, setDescription] = useState("");

  const handleAddRecipe = () => {
    if (title && ingredients && steps && description) {
      const newRecipe = {
        name: title,
        description,
        ingredients: ingredients.split(","),
        steps: steps.split("."),
        image: "", 
        price: "Custom",
      };
      addRecipe(newRecipe);
      setTitle("");
      setIngredients("");
      setSteps("");
      setDescription("");
      alert("Recipe added successfully!");
    } else {
      alert("Please fill all fields.");
    }
  };

  return (
    <div>
      <h3>Add Recipe</h3>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="text"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <input
        type="text"
        placeholder="Ingredients"
        value={ingredients}
        onChange={(e) => setIngredients(e.target.value)}
      />
      <textarea
        placeholder="Steps"
        value={steps}
        onChange={(e) => setSteps(e.target.value)}
      />
      <button onClick={handleAddRecipe}>Add Recipe</button>
    </div>
  );
};

export default RecipeForm;
