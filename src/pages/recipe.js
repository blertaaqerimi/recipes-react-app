import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetch_recipe } from "../api";
import NutritionWidget from '../components/nutrition-widget'
import SimilarRecipes from '../components/similar-recipes'
import IngredientsWidget from '../components/ingredients-widget'

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


      <IngredientsWidget id={id} />
      <NutritionWidget id={id} />
      <SimilarRecipes id={id} />
    </div>
    
  )
}

export default Recipe;