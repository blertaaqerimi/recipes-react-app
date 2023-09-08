import { useEffect } from "react";
import { fetch_random_recipes } from '../api'
import { useState } from "react";
import { NavLink } from "react-router-dom";

const Recipes = () => {
  const [recipes, setRecipes] = useState([]);


  useEffect(() => {
    fetch_random_recipes()
      .then((data) => {
        if (data != null) {
          setRecipes(data.recipes)
        }
      })
  }, [])
  console.log(recipes)
  return (
    <div>
      {recipes.length > 0 && recipes.map((recipe, idx) => {
        return (
          <div key={idx} className="card" style={{width: '18rem'}}>
            <img src={recipe.image} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">{recipe.title}</h5>
                <p className="card-text">Type dish: {recipe.dishTypes[0]}</p>
                <ul className="card-text">{recipe.diets.map((d) => { 
                  return <li>{d}</li>})}</ul>
                <NavLink to={`/recipe/${recipe.id}`} className="btn btn-primary">Recipe</NavLink>
              </div>
          </div>
        )
      })}
    </div>
  )
}

export default Recipes;