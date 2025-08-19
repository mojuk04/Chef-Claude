import React from "react";
import "../App.css";
import ClaudeRecipe from "./ClaudeRecipe";
import IngredientsList from "./IngredientsList";
import { getMistralRecipe } from "../ai";

export const Main = () => {
  const [ingredients, setIngredients] = React.useState([]);
  const [recipe, setRecipe] = React.useState("");
  const [isLoading, setIsLoading] = React.useState(false);

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
  const getRecipe = async (event) => {
    event.preventDefault();
    try {
      const newRecipe = await getMistralRecipe(ingredients);
      setRecipe(newRecipe);
    } catch (error) {
      setRecipe("Sorry, couldn't get a recipe. Please try again.");
      alert(error);
    } finally {
      setIsLoading(false);
    }
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
      {recipe ? <ClaudeRecipe recipe={recipe} /> : undefined}
    </main>
  );
};
