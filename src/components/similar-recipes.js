import { useEffect, useState } from 'react';
import { fetch_similar_recipes } from '../api'

const SimilarRecipes = ({ id }) => {

    const [data, setData] = useState([]);

    useEffect(() => {
        fetch_similar_recipes(id)
            .then(response => response && setData(response))
    }, [id])

    return (
        <>
            <h4 className='mt-5'>Related Recipes</h4>
            {data.length > 0 && <div className='d-flex'>{data.map((r, idx) => {
                return (
                    <div key={idx} className="card mx-2" style={{ width: '18rem' }}>
                        <div className="card-body">
                            <h5 className="card-title">{r.title}</h5>
                            <a href={`/recipe/${r.id}`} className="card-link btn btn-primary">Go to recipe</a>
                        </div>
                    </div>
                )
            })}</div>}

        </>
    );
}

export default SimilarRecipes;