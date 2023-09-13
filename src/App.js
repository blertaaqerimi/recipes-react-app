import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Recipe from './pages/recipe';
import Home from './pages/home';
import Header from './components/header';
import Footer from './components/footer';
import Meals from './pages/meals'
import LoginForm from './pages/login';
import Search from './components/search';
import Searched from './pages/searched';
import Categories from './components/categories'
import Cuisine from './pages/cuisine';

function App() {
  return (
    <BrowserRouter>
    <Header />
    <Search />
    <Categories />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/recipe/:id' element={<Recipe />}/>
        <Route path='/mealplanner' element={<Meals /> }/>
        <Route path='/connect' element={<LoginForm /> }/>
        <Route path='/searched/:inputValue' element={<Searched /> }/>
        <Route path='/cuisine/:name' element={<Cuisine /> }/>

      </Routes>
      <Footer />
    </BrowserRouter>
    
  );
}

export default App;
