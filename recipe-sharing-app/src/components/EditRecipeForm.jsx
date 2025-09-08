import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import useRecipeStore from "./recipeStore";

const EditRecipeForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // find recipe by id (string-safe)
  const recipe = useRecipeStore((s) =>
    s.recipes.find((r) => r.id?.toString() === id)
  );
  const updateRecipe = useRecipeStore((s) => s.updateRecipe);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [ingredients, setIngredients] = useState(""); // simple comma-separated editor

  useEffect(() => {
    if (recipe) {
      setTitle(recipe.title || "");
      setDescription(recipe.description || "");
      setIngredients(
        Array.isArray(recipe.ingredients)
          ? recipe.ingredients.join(", ")
          : recipe.ingredients || ""
      );
    }
  }, [recipe]);

  if (!recipe) return <div className="p-4">Recipe not found.</div>;

  const handleSubmit = (event) => {
    event.preventDefault();
    const payload = {
      title: title.trim(),
      description: description.trim(),
      ingredients: ingredients
        .split(",")
        .map((s) => s.trim())
        .filter(Boolean),
    };
    // pass the original recipe.id to maintain the same id type
    updateRecipe(recipe.id, payload);
    navigate(`/recipes/${recipe.id}`); // back to detail
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 max-w-xl">
      <label className="block mb-2">
        <span className="block font-medium">Title</span>
        <input
          name="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full border rounded px-2 py-1"
          required
        />
      </label>

      <label className="block mb-2">
        <span className="block font-medium">Description</span>
        <textarea
          name="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full border rounded px-2 py-1"
          rows={4}
        />
      </label>

      <label className="block mb-4">
        <span className="block font-medium">Ingredients (comma separated)</span>
        <input
          name="ingredients"
          value={ingredients}
          onChange={(e) => setIngredients(e.target.value)}
          className="w-full border rounded px-2 py-1"
        />
      </label>

      <div className="flex gap-2">
        <button
          type="submit"
          className="px-3 py-1 rounded bg-green-600 text-white"
        >
          Save
        </button>
        <button
          type="button"
          onClick={() => navigate(-1)}
          className="px-3 py-1 rounded border"
        >
          Cancel
        </button>
      </div>
    </form>
  );
};

export default EditRecipeForm;
