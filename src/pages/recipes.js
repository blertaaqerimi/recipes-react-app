
import React, { useEffect, useState } from "react";
import { fetch_random_recipes } from '../api';
import Search from "../components/search";
import CardRecipe from '../components/card-recipe'

const Recipes = () => {
  const [recipes, setRecipes] = useState([]);
  const [searchRecipes, setSearchRecipes] = useState([]);

  const fetchData = async () => {
    const data = await fetch_random_recipes();
    if (data) {
      setRecipes(data.recipes);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  const initialOrSearch = searchRecipes.length > 0 ? searchRecipes : recipes;

  return (
    <>
      <Search setSearchRecipes={setSearchRecipes} />
      <div className="d-flex justify-content-evenly flex-wrap mx-3">
        {initialOrSearch.length > 0 &&
          initialOrSearch.map((recipe, idx) => (
            <CardRecipe key={idx} recipe={recipe} />)
          )}
      </div>

    </>
  )
}

export default Recipes;
