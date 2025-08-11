// import { useState } from "react";
import RecipeList from "./components/RecipeList";
import AddRecipeForm from "./components/AddRecipeForm";
import SearchBar from "./components/SearchBar";
import "./App.css";

function App() {
  return (
    <>
      <AddRecipeForm />
      <RecipeList />
      <SearchBar />
    </>
  );
}

export default App;
