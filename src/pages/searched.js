import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { search_recipes } from '../api';
import ListRecipes from "../components/list-recipes";

const Searched = () => {
    const [recipes, setRecipes] = useState([])

    const params = useParams();

    const fetchData = async () => {
        const data = await search_recipes(`query=${params.inputValue}`);
        if (data?.results?.length > 0)
            setRecipes(data.results);
    };

    useEffect(() => {
        fetchData()
    }, [params.inputValue]);

    return (
        <ListRecipes recipes={recipes}/>
    )
};

export default Searched;