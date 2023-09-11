import { NavLink } from "react-router-dom";

const CardRecipe = ({ recipe }) => {
    if (!recipe?.image)
        return null

    return (
        <div className="card mt-4" style={{ width: '18rem' }}>
            <img src={recipe.image} className="card-img-top" alt="..." />
            <div className="card-body">
                <h6 className="card-title">{recipe.title}</h6>
                <div className="d-flex justify-content-between mb-3">
                    {recipe?.readyInMinutes && <span>Ready in: <b>{recipe?.readyInMinutes}</b> min</span>}
                    {recipe?.servings && <span>Servings: <b>{recipe?.servings}</b></span>}

                </div>
                <NavLink to={`/recipe/${recipe.id}`} className="btn btn-primary">Recipe</NavLink>
            </div>
        </div>
    )
}

export default CardRecipe;