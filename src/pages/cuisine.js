import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { search_recipes } from "../api"
import ListRecipes from "../components/list-recipes";

const Cuisine = () => {
    const params = useParams();
    const [recipes, setRecipes] = useState([]);

    const fetchData = async () => {
        const data = await search_recipes(`cuisine=${params.name}`)
        if (data?.results?.length) {
            setRecipes(data.results);
        } 

    }

    useEffect(() => {
        fetchData()
    }, [params.name]);

    return (
        <ListRecipes recipes={recipes} />
    )
};

export default Cuisine;