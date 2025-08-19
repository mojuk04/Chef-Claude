import React from "react";
import "../App.css";
import ReactMarkdown from "react-markdown";

const ClaudeRecipe = (props) => {
  return (
    <section className="recipeGenerated">
      <h2>Chef Claude Recommends:</h2>
      <ReactMarkdown>{props.recipe}</ReactMarkdown>
    </section>
  );
};

export default ClaudeRecipe;
