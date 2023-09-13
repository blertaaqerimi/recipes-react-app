import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { search_recipes } from '../api';
import CardRecipe from '../components/card-recipe'

const Searched = () => {
    const [recipes, setRecipes] = useState([])

    const params = useParams();

    const fetchData = async () => {
        const data = await search_recipes(params.inputValue)
        if (data?.results?.length > 0)
            setRecipes(data.results);
    };

    useEffect(() => {
        console.log('test')
        fetchData()
    }, [params.inputValue]);

    return (
        <div>
            {recipes.length > 0 && <div className="d-flex flex-row flex-wrap" >
                {recipes.map((recipe, idx) => <CardRecipe key={idx} recipe={recipe}/>
                )}
            </div>}

        </div>
    )
};

export default Searched;