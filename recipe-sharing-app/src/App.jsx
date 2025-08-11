import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import RecipeList from "./components/RecipeList";
import AddRecipeForm from "./components/AddRecipeForm";
import SearchBar from "./components/SearchBar";
import "./App.css";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<RecipeList />} />
          <Route path="/search" element={<SearchBar />} />
        </Routes>
      </Router>
      <AddRecipeForm />
    </>
  );
}

export default App;
