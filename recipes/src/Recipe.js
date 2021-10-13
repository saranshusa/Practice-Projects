import React from "react";
import style from "./recipe.module.css";

// destructuring
const Recipe = ({ title, calories, image, ingredients }) => {
  return (
    // style with CSS module
    <div className={style.recipe}>
      <h1 className={style.title}>{title}</h1>
      {/* map through ingredients */}
      <ul className={style.list}>
        {ingredients.map(ingredient => (
          <li>{ingredient.text}</li>
        ))}
      </ul>
      {/* display calories */}
      <p>{calories}</p>
      {/* style with CSS module */}
      <img className={style.image} src={image} alt="" />
    </div>
  );
};

export default Recipe;