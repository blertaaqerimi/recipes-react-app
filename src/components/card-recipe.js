import { NavLink } from "react-router-dom";

const CardRecipe = ({ recipe }) => {
    console.log({ recipe });
    if (!recipe?.image)
        return null

    return (
        <NavLink to={`/recipe/${recipe.id}`} className="text-decoration-none text-black d-flex flex-column mx-3 my-3" style={{ maxWidth: "300px" }}>
            <img src={recipe.image} className="card-img-top" alt={recipe.title} />
            <div className="card-body text-center mt-2">
                <h5 className="card-title">{recipe.title}</h5>
            </div>
        </NavLink>
    )
}

export default CardRecipe;