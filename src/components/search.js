import { useState } from 'react';
import { search_recipes } from '../api'

const Search = ({ setSearchRecipes }) => {
    const [inputValue, setInputValue] = useState("");

    const handleOnClick = async (e) => {
        e.preventDefault();
        const reponse = await search_recipes(inputValue);
        setSearchRecipes(reponse.results)
    }

    const handleInputChange = async (e) => {
        const newValue = e.target.value;
        setInputValue(newValue);
        if(!newValue) {
            setSearchRecipes([])
        }

    }

    return (
        <nav className="navbar bg-body-tertiary mb-5 mt-3">
            <div className="container-fluid d-flex justify-content-center">
                <form className="d-flex" onSubmit={handleOnClick}>
                    <input 
                    value={inputValue}
                    onChange={handleInputChange}
                        className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                    <button className="btn btn-outline-primary" type="submit">Search</button>
                </form>
            </div>
        </nav>
    )
};

export default Search;



