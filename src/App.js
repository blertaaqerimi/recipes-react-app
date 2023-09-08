import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Recipes from './pages/recipes';
import Recipe from './pages/recipe';
import Home from './pages/home';
import Header from './components/header';
import Footer from './components/footer';

function App() {
  return (
    <BrowserRouter>
    <Header />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/recipes' element={<Recipes />}/>
        <Route path='/recipe/:id' element={<Recipe />}/>
        {/* <Route path='/' element={<div>home page</div>}/> */}
      </Routes>
      <Footer />
    </BrowserRouter>
    
  );
}

export default App;
