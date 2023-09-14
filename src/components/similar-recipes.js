import { useEffect, useState } from 'react';
import { fetch_similar_recipes } from '../api'
import { NavLink } from 'react-router-dom';

const SimilarRecipes = ({ id }) => {

    const [data, setData] = useState([]);

    useEffect(() => {
        fetch_similar_recipes(id)
            .then(response => response && setData(response))
    }, [id])

    return (
        <>
            <h3 className='my-3'>
                <span className='border-bottom'>Related Recipes</span>
            </h3>
            {data.length > 0 && <div className='d-flex'>{data.map((r, idx) =>  (
                    <div key={idx} className="card mx-2" style={{ width: '18rem' }}>
                        <div className="card-body">
                        <NavLink className="card-title" to={`/recipe/${r.id}`}>{r.title}</NavLink>
                        </div>
                    </div>
                )
            )}</div>}

        </>
    );
}

export default SimilarRecipes;