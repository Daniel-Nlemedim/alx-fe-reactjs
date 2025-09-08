import React from "react";
import { useParams, Link } from "react-router-dom";
import useRecipeStore from "./recipeStore";
import DeleteRecipeButton from "./DeleteRecipeButton";

const RecipeDetail = () => {
  const { id } = useParams();
  const recipe = useRecipeStore((state) =>
    state.recipes.find((r) => r.id?.toString() === id)
  );

  if (!recipe) return <div className="p-4">Recipe not found.</div>;

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-2">{recipe.title}</h1>

      {recipe.description && <p className="mb-4">{recipe.description}</p>}

      {/* render fields you have (ingredients, steps, etc.) */}
      {recipe.ingredients && (
        <>
          <h3 className="font-semibold">Ingredients</h3>
          <ul className="list-disc ml-6 mb-4">
            {recipe.ingredients.map((ing, idx) => (
              <li key={idx}>{ing}</li>
            ))}
          </ul>
        </>
      )}

      <div className="flex gap-2">
        <Link
          to={`/recipes/${id}/edit`}
          className="px-3 py-1 rounded bg-blue-600 text-white"
        >
          Edit
        </Link>

        {/* pass the real ID (keeps types consistent) */}
        <DeleteRecipeButton id={recipe.id} />
      </div>
    </div>
  );
};

export default RecipeDetail;
