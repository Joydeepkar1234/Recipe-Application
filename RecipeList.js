import React from "react";

const RecipeList = ({ recipes, searchQuery, deleteRecipe, editRecipe }) => {
  const handleEdit = (id) => {
    const updatedTitle = prompt("Enter new title:");
    const updatedIngredients = prompt(
      "Enter new ingredients"
    );
    const updatedSteps = prompt("Enter new steps");

    if (updatedTitle && updatedIngredients && updatedSteps) {
      const updatedRecipe = {
        name: updatedTitle,
        description: recipes[id].description,
        ingredients: updatedIngredients.split(","),
        steps: updatedSteps.split("."),
        image: recipes[id].image,
        price: recipes[id].price,
      };
      editRecipe(id, updatedRecipe);
    }
  };

  const filteredRecipes = recipes.filter(
    (recipe) =>
      recipe.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (recipe.ingredients &&
        recipe.ingredients.some((ingredient) =>
          ingredient.toLowerCase().includes(searchQuery.toLowerCase())
        ))
  );

  return (
    <div>
      <h3>Recipe List</h3>
      {filteredRecipes.map((recipe, index) => (
        <div key={index}>
          <h4>{recipe.name}</h4>
          <p>{recipe.description}</p>
          {recipe.ingredients && (
            <p>Ingredients: {recipe.ingredients.join(", ")}</p>
          )}
          {recipe.steps && <p>Steps: {recipe.steps.join(". ")}</p>}
          {recipe.image && <img src={recipe.image} alt={recipe.name} width="200" />}
          <p>Price: {recipe.price || "N/A"}</p>
          <button onClick={() => handleEdit(index)}>Edit</button>
          <button onClick={() => deleteRecipe(index)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default RecipeList;
