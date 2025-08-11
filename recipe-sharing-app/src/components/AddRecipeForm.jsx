// AddRecipeForm component
import { useState } from "react";
import useRecipeStore from "./recipeStore";

const AddRecipeForm = () => {
  const style = {
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    maxWidth: "400px",
    margin: "0 auto",
    padding: "20px",
    paddingTop: "15px",
    gap: "12px",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
    border: "1px solid #ccc",
    borderRadius: "8px",
    backgroundColor: "#f9f9f9",
  };

  const styleBtn = {
    padding: "10px",
    backgroundColor: "#4CAF50",
    color: "white",
    border: "none",
    borderRadius: "4px",
  };

  const styleInput = {
    marginBottom: "12px",
    height: "30px",
    paddingTop: "6px",
    focus: "none",
    border: "1px solid #ccc",
    borderRadius: "4px",
    boxShadow: "0 1px 2px rgba(0, 0, 0, 0.1)",
    transition: "border-color 0.3s ease",
  };

  const styleTextarea = {
    marginBottom: "12px",
    height: "100px",
    paddingTop: "6px",
    focus: "none",
    border: "1px solid #ccc",
    borderRadius: "4px",
    boxShadow: "0 1px 2px rgba(0, 0, 0, 0.1)",
    transition: "border-color 0.3s ease",
  };

  const addRecipe = useRecipeStore((state) => state.addRecipe);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!title.trim() || !description.trim()) return;
    addRecipe({ title, description });
    setTitle("");
    setDescription("");
    // alert("Recipe added successfully!");
  };

  return (
    <form onSubmit={handleSubmit} style={style}>
      <input
        style={styleInput}
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Title"
      />
      <textarea
        style={styleTextarea}
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Description"
      />
      <button type="submit" style={styleBtn}>
        Add Recipe
      </button>
    </form>
  );
};

export default AddRecipeForm;
