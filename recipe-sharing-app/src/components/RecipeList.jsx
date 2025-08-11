// RecipeList component
import useRecipeStore from "./recipeStore";
import { Link } from "react-router-dom";

const RecipeList = () => {
  const recipes = useRecipeStore((state) => state.filteredRecipes);

  const style = {
    display: "flex",
    flexDirection: "column",
    padding: "20px",
    gap: "12px",
    alignItems: "center",
    maxWidth: "600px",
    margin: "0 auto",
  };

  return (
    <div style={style}>
      {recipes.map((recipe) => (
        <div key={recipe.id}>
          <h3>
            <Link to={`/recipe/${recipe.id}`}>{recipe.title}</Link>
          </h3>
          <p>{recipe.description}</p>
        </div>
      ))}
    </div>
  );
};

export default RecipeList;
