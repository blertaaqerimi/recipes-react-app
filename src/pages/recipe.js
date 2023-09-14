import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetch_recipe } from "../api";
import NutritionWidget from '../components/nutrition-widget'
import SimilarRecipes from '../components/similar-recipes'
import IngredientsWidget from '../components/ingredients-widget'
import EquipmentWidget from '../components/equipment-widget'

const Recipe = () => {

  const params = useParams();
  const id = params['id'];

  const [recipe, setRecipe] = useState(null);
  const [activeTab, setActiveTab] = useState('instructions');

  useEffect(() => {
    fetch_recipe(id)
      .then((data) => {
        if (data) {
          setRecipe(data)
        }
      });
  }, [id])
  console.log(recipe);
  if (!recipe) return null;
  return (
    <div className="d-flex flex-column align-items-center">
      <div>
        <button onClick={() => setActiveTab('instructions')}>Instructions</button>
        <button onClick={() => setActiveTab('ingredients')}>Ingredients</button>
      </div>
      <div>{activeTab === 'instructions' ?
        <div>

        </div>
        :
        <div>
          <ul>
            {recipe?.extendedIngredients?.length > 0 && recipe.extendedIngredients.map(({ id, original }) => {
              return <li key={id}>{original}</li>
            })}
          </ul>
          <IngredientsWidget id={id} />
        </div>
      }
      </div>
      <img src={recipe.image} alt="..." />
      <h3>{recipe.title}</h3>
      <p className="text-center"><div style={{ width: "800px" }} dangerouslySetInnerHTML={{ __html: recipe.summary }} /></p>
      <p><div style={{ width: "800px" }} dangerouslySetInnerHTML={{ __html: recipe.instructions }} /></p>
      <EquipmentWidget id={id} />
      <NutritionWidget id={id} />
      <SimilarRecipes id={id} />
    </div>
  )
}

export default Recipe;