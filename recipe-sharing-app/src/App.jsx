import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import RecipeList from "./components/RecipeList";
import AddRecipeForm from "./components/AddRecipeForm";
import SearchBar from "./components/SearchBar";
import RecipeDetail from "./components/RecipeDetails";
import RecommendationsList from "./components/RecommendationsList";
import FavoritesList from "./components/FavoritesList";
import HomeBtn from "./components/HomeBtn";
import EditRecipeForm from "./components/EditRecipeForm";

import "./App.css";

function App() {
  return (
    <Router>
      <div className="App" style={{ textAlign: "center" }}>
        <h1>Recipe Sharing App</h1>
        <AddRecipeForm />
        <SearchBar />

        <Routes>
          <Route path="/" element={<RecipeList />} />
          <Route path="/recipe/:id" element={<RecipeDetail />} />
          <Route path="/recommendations" element={<RecommendationsList />} />
          <Route path="/favorites" element={<FavoritesList />} />
          <Route path="/recipes/:id/edit" element={<EditRecipeForm />} />
          <Route path="*" element={<div>Page Not Found</div>} />
        </Routes>
        <HomeBtn />
      </div>
    </Router>
  );
}

export default App;
