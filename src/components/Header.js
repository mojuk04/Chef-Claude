import React from "react";
import "../App.css";
import { Main } from "./Main";
// import { chefclaude } from "../images/chefclaude.png";
import ChefClaude from "../images/ChefClaude.png";

export const Header = () => {
  return (
    <header>
      <img src={ChefClaude} alt="" />
      <h2>Chef Claude</h2>
    </header>
  );
};
