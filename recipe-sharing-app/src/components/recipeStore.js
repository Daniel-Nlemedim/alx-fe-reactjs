import { create } from "zustand";

const useRecipeStore = create((set) => ({
  recipes: [],
  searchTerm: "",
  setSearchTerm: (term) => set({ searchTerm: term }),
  filteredRecipes: [],
  filterRecipes: () =>
    set((state) => ({
      filteredRecipes: state.recipes.filter((recipe) =>
        recipe.title.toLowerCase().includes(state.searchTerm.toLowerCase())
      ),
    })),
  addRecipe: (newRecipe) =>
    set((state) => {
      const recipeWithId = {
        ...newRecipe,
        id: Date.now(),
      };

      const updatedRecipes = [...state.recipes, recipeWithId];

      return { recipes: updatedRecipes, filteredRecipes: updatedRecipes };
    }),
}));
export default useRecipeStore;
