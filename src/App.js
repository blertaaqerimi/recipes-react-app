import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Recipe from './pages/recipe';
import Home from './pages/home';
import Header from './components/header';
import Footer from './components/footer';
import LoginForm from './pages/login';
import Search from './components/search';
import Searched from './pages/searched';
import Categories from './components/categories'
import Cuisine from './pages/cuisine';
import WeekMeals from './pages/meals';
import Recipes from './pages/recipes';

function App() {
  return (
    <BrowserRouter>
    <Header />
    <Search />
    <Categories />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/cuisine/:name' element={<Cuisine /> }/>
        <Route path='/searched/:inputValue' element={<Searched /> }/>
        <Route path='/recipe/:id' element={<Recipe />}/>
        <Route path='/recipes' element={<Recipes />}/>
        <Route path='/weekmealplanner' element={<WeekMeals /> }/>
        <Route path='/connect' element={<LoginForm /> }/>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
