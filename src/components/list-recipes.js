import React from 'react'
import CardRecipe from './card-recipe';

const ListRecipes = ({ recipes }) => {
    return (
        <div>
            {recipes.length > 0 && <div className="d-flex flex-row flex-wrap" >
                {recipes.map((recipe, idx) => <CardRecipe key={idx} recipe={recipe} />
                )}
            </div>}

        </div>
    )
}

export default ListRecipes;