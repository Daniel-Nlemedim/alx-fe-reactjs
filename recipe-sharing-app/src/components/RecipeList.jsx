// RecipeList component
import useRecipeStore from "./recipeStore";

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
          <h3>{recipe.title}</h3>
          <p>{recipe.description}</p>
        </div>
      ))}
    </div>
  );
};

export default RecipeList;
