import RandomRecipes from '../components/random-recipes';
import { NavLink } from 'react-router-dom';

const Home = () => {


  return (
    <div>
      <RandomRecipes />
      <NavLink className='text-black d-flex justify-content-end mx-5' to='/recipes'>More recipes...</NavLink>
    </div>
  
  )
}

export default Home;