import React from "react";
import "../App.css";

const IngredientsList = (props) => {
  return (
    <section className="ingredientsList">
      <h2>Ingredients on Hand:</h2>
      <ul>{props.ingredientList}</ul>
      {props.ingredients.length > 3 ? (
        <div className="getRecipe">
          <div ref={props.ref}>
            <h3>Ready for a recipe?</h3>
            <p>Generate a recipe from your list of ingredients.</p>
          </div>
          <button onClick={props.onClick}>Get a recipe</button>
        </div>
      ) : undefined}
    </section>
  );
};

export default IngredientsList;
