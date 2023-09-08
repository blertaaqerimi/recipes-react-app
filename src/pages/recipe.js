import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetch_recipe } from "../api";
const Recipe = () => {

  const params = useParams();
  const id = params['id'];

  const [recipe, setRecipe] = useState(null)

  useEffect(() => {
    fetch_recipe(id)
      .then((data) => {
        if (data != null) {
          setRecipe(data)
        }
      });
      

  }, [id])
    console.log(recipe);
  if (!recipe) return null;
  return (
    <div className="card mb-3" style={{ maxWidth: '540px' }}>
      <div className="row g-0">
        <div className="col-md-4">
          <img src={recipe.image} className="img-fluid rounded-start" alt="..." />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">{recipe.title}</h5>
            <p className="card-text"><div dangerouslySetInnerHTML={{ __html: recipe.summary }} /></p>
            <p className="card-text"><small className="text-body-secondary">Last updated 3 mins ago</small></p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Recipe;