import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetch_recipe } from "../../api";
import NutritionWidget from '../../components/nutrition-widget'
import SimilarRecipes from '../../components/similar-recipes'
import IngredientsWidget from '../../components/ingredients-widget'
import EquipmentWidget from '../../components/equipment-widget';
import "./style.css";

const Recipe = () => {
    const params = useParams();
    const id = params['id'];

    const [recipe, setRecipe] = useState(null);
    const [activeTab, setActiveTab] = useState('instructions');

    useEffect(() => {
        window.scrollTo(0, 0);
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
        <div style={{ padding: "0 20px" }}>
            <div className="wrapper">
                <div>
                    <h2>{recipe.title}</h2>
                    <img src={recipe.image} alt={recipe.title} />
                </div>
                <div className="info">
                    <button
                        className={`styled-button ${activeTab === "instructions" ? "active" : ""}`}
                        onClick={() => setActiveTab('instructions')}>Instructions</button>
                    <button
                        className={`styled-button ${activeTab === "ingredients" ? "active" : ""}`}
                        onClick={() => setActiveTab('ingredients')}>Ingredients</button>
                    {activeTab === 'instructions' ?
                        <div>
                            <p><div dangerouslySetInnerHTML={{ __html: recipe.summary }} /></p>
                            <p><div dangerouslySetInnerHTML={{ __html: recipe.instructions }} /></p>
                        </div> :
                        <div>
                            <ul>
                                {recipe?.extendedIngredients?.length > 0 && recipe.extendedIngredients.map(({ id, original }) => {
                                    return <li key={id}>{original}</li>
                                })}
                            </ul>
                            <div className="d-flex flex-column ">
                                <IngredientsWidget id={id} />
                                <EquipmentWidget id={id} />
                            </div>
                        </div>
                    }
                </div>
            </div>
            <div className="d-flex flex-column">
            <NutritionWidget id={id} />
            <SimilarRecipes id={id} />
            </div>
        </div>
    )
}

export default Recipe;