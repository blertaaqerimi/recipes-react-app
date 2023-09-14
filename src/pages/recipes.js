import { useEffect } from "react";
import { fetch_random_recipes } from '../api'
import { useState } from "react";
import ListRecipes from "../components/list-recipes";
// import { NavLink } from "react-router-dom";

const Recipes = () => {

    const [recipes, setRecipes] = useState([]);


    useEffect(() => {
        fetch_random_recipes(50)
            .then((data) => {
                if (data) {
                    setRecipes(data.recipes)
                }
            })
    }, [])
    return (
       <ListRecipes recipes={recipes}/>
    )
}


export default Recipes;