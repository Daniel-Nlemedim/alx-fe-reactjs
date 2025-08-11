// recipeStore.js
import { create } from "zustand";

const useRecipeStore = create((set) => ({
  recipes: [],
  searchTerm: "",
  filteredRecipes: [],
  favorites: [],

  addFavorite: (recipeId) =>
    set((state) => ({
      favorites: [...state.favorites, recipeId],
    })),
  removeFavorite: (recipeId) =>
    set((state) => ({
      favorites: state.favorites.filter((id) => id !== recipeId),
    })),
  recommendations: [],
  generateRecommendations: () =>
    set((state) => {
      const recommended = state.recipes.filter(
        (recipe) => state.favorites.includes(recipe.id) && Math.random() > 0.5
      );
      return { recommendations: recommended };
    }),

  setSearchTerm: (term) =>
    set((state) => {
      // 1. Update the searchTerm
      // 2. Filter the recipes immediately based on the new term
      const filtered = state.recipes.filter((recipe) =>
        recipe.title.toLowerCase().includes(term.toLowerCase())
      );
      return {
        searchTerm: term,
        filteredRecipes: filtered,
      };
    }),

  addRecipe: (newRecipe) =>
    set((state) => {
      // ... (existing logic for adding a recipe)
      const recipeWithId = {
        ...newRecipe,
        id: Date.now(),
      };
      const updatedRecipes = [...state.recipes, recipeWithId];

      // Also filter the new list of recipes to keep the view consistent
      const filtered = updatedRecipes.filter((recipe) =>
        recipe.title.toLowerCase().includes(state.searchTerm.toLowerCase())
      );

      return {
        recipes: updatedRecipes,
        filteredRecipes: filtered,
      };
    }),
}));

export default useRecipeStore;
