import React from "react";
import "../App.css";
import ClaudeRecipe from "./ClaudeRecipe";
import IngredientsList from "./IngredientsList";

export const Main = () => {
  const [ingredients, setIngredients] = React.useState([
    "all the main spices",
    "pasta",
    "ground beef",
    "tomato paste",
  ]);
  const [recipe, setRecipe] = React.useState(false);
  const ingredientList = ingredients.map((ingredient) => {
    return <li key={ingredient}>{ingredient}</li>;
  });

  // function to handle adding items to ingredients list
  const handleSubmit = (formData) => {
    const newIngredient = formData.get("ingredient").trim();
    if (newIngredient) {
      setIngredients((prevIngredients) => {
        return [...prevIngredients, newIngredient];
      });
    } else {
      alert("Input cannot be empty!");
    }
  };

  // function to get a recipe from ai from get a recipe button
  const getRecipe = () => {
    setRecipe((prev) => !prev);
  };

  return (
    <main>
      <form action={handleSubmit}>
        <input type="text" placeholder=" e.g oregano" name="ingredient" />
        <button> + Add Ingredient</button>
      </form>
      {ingredients.length > 0 ? (
        <IngredientsList
          ingredientList={ingredientList}
          ingredients={ingredients}
          onClick={getRecipe}
        />
      ) : undefined}
      {recipe ? <ClaudeRecipe /> : undefined}
    </main>
  );
};
