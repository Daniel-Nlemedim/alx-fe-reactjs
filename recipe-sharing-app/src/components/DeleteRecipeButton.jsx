import React from "react";
import { useNavigate } from "react-router-dom";
import useRecipeStore from "./recipeStore";

const DeleteRecipeButton = ({ id }) => {
  const deleteRecipe = useRecipeStore((s) => s.deleteRecipe);
  const navigate = useNavigate();

  const handleDelete = () => {
    // simple confirmation — keep or replace with modal in your UI
    if (!window.confirm("Are you sure you want to delete this recipe?")) return;
    deleteRecipe(id);
    // after delete, go to home (or recipe list)
    navigate("/");
  };

  return (
    <button
      onClick={handleDelete}
      className="px-3 py-1 rounded bg-red-600 text-white"
    >
      Delete
    </button>
  );
};

export default DeleteRecipeButton;
