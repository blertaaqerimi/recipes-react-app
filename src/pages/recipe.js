import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetch_recipe } from "../api";
import NutritionWidget from '../components/nutrition-widget'
const Recipe = () => {

  const params = useParams();
  const id = params['id'];

  const [recipe, setRecipe] = useState(null)

  useEffect(() => {
    fetch_recipe(id)
      .then((data) => {
        if (data != null) {
          setRecipe(data)
        }
      });


  }, [id])
  console.log(recipe);
  if (!recipe) return null;
  return (
    <div className="d-flex flex-column align-items-center">
      <img src={recipe.image} alt="..." />
      <h3>{recipe.title}</h3>
      <p className="text-center"><div style={{ width: "800px" }} dangerouslySetInnerHTML={{ __html: recipe.summary }} /></p>

      {/* <div id="recipe-details_1-0" className="comp recipe-details mntl-recipe-details">
        <div className="mntl-recipe-details__content">
          <div className="mntl-recipe-details__item">
            <div className="mntl-recipe-details__label">Prep Time:</div>
            <div className="mntl-recipe-details__value">5 mins</div>
          </div>
          <div className="mntl-recipe-details__item">
            <div className="mntl-recipe-details__label">Cook Time:</div>
            <div className="mntl-recipe-details__value">20 mins</div>
          </div>
          <div className="mntl-recipe-details__item">
            <div className="mntl-recipe-details__label">Total Time:</div>
            <div className="mntl-recipe-details__value">25 mins</div>
          </div>
          <div className="mntl-recipe-details__item">
            <div className="mntl-recipe-details__label">Servings:</div>
            <div className="mntl-recipe-details__value">4 </div>
          </div>
        </div>
        <div className="loc nutrition-link mntl-recipe-details__nutrition-link-container">
        </div>
      </div> */}
      <NutritionWidget />
    </div>
    
  )
}

export default Recipe;