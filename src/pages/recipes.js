
import React, { useEffect, useState } from "react";
import { fetch_random_recipes } from '../api';
import CardRecipe from '../components/card-recipe'

const Recipes = () => {
  const [recipes, setRecipes] = useState([]);

  const fetchData = async () => {
    const data = await fetch_random_recipes();
    if (data) {
      setRecipes(data.recipes);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <div className="d-flex justify-content-evenly flex-wrap mx-3">
        {recipes.length > 0 &&
          recipes.map((recipe, idx) => (
            <CardRecipe key={idx} recipe={recipe} />)
          )}
      </div>

    </>
  )
}

export default Recipes;
