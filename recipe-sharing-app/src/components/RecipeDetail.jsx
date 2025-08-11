import React from "react";
import { useParams } from "react-router-dom";
import useRecipeStore from "./recipeStore";

function RecipeDetail() {
  const { id } = useParams();
  const recipe = useRecipeStore((state) =>
    state.recipes.find((r) => r.id === parseInt(id))
  );
  const style = {
    border: "1px solid #ccc",
    borderRadius: "4px",
    padding: "16px",
    margin: "16px 0",
  };

  if (!recipe) {
    return <div>Recipe not found</div>;
  }

  return (
    <div style={style}>
      <h2>{recipe.title}</h2>
      <p>{recipe.description}</p>
    </div>
  );
}

export default RecipeDetail;
