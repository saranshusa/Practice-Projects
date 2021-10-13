import React, { useEffect, useState } from "react";
import Recipe from "./Recipe";
import "./App.css";
import logo from './logo.png'

const App = () => {
  // get id and key from api
  const APP_ID = "0e9797a8";
  const APP_KEY = "0724a07225075007c2a1b68e7701cd4e";

  // state hook
  const [recipes, setRecipes] = useState([]);

  // the state of the input
  const [search, setSearch] = useState("");

  // the state of the final input
  const [query, setQuery] = useState("chicken");

  // call get recipes function when the browser loads
  useEffect(() => {
    getRecipes();
  }, [query]);

  // fetch recipes from api
  const getRecipes = async () => {
    // wait for information to load
    const response = await fetch(
      `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
    );
    // set data from the response and turn into into a JSON object
    const data = await response.json();
    // set state of recipes = the array of recipes
    setRecipes(data.hits);
  };

  // set search = to whatever is being typed
  const updateSearch = e => {
    setSearch(e.target.value);
  };

  // set the final search = to state of search
  const getSearch = e => {
    e.preventDefault();
    setQuery(search);
    // reset search to empty string
    setSearch("");
  };

  return (
    <div className="App">
      <img className='logo' src={logo} alt='logo'/>
      <h2 className='home-title'>Are you looking for new recipes? Recipes.com is a great place to find recipes and cooking inspiration. With recipes from all over the world, we will help you find ideas for every meal and occasion.</h2>
      {/* pass props down */}
      <form onSubmit={getSearch} className="search-form" action="">
        <input
          value={search}
          onChange={updateSearch}
          className="search-bar"
          type="text"
        />

        <button className="search-button" type="submit">
          Submit
        </button>
      </form>
      {/* map through recipes */}
      <div className="recipes">
        {recipes.map(recipe => (
          <Recipe
            key={recipe.recipe.label}
            title={recipe.recipe.label}
            calories={recipe.recipe.calories}
            image={recipe.recipe.image}
            ingredients={recipe.recipe.ingredients}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
