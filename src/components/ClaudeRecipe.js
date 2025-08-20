import React from "react";
import "../App.css";
import ReactMarkdown from "react-markdown";

const ClaudeRecipe = (props) => {
  return (
    <section className="recipeGenerated">
      <ReactMarkdown>{props.recipe}</ReactMarkdown>
    </section>
  );
};

export default ClaudeRecipe;
