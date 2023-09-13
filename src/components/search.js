import { useState } from 'react';
import { useNavigate } from 'react-router-dom';


const Search = () => {
    const [inputValue, setInputValue] = useState("");
    const navigate = useNavigate();

    const handleOnSubmit = async (e) => {
        e.preventDefault();
       navigate(`/searched/${inputValue}`)
       setInputValue('')
    }

    return (
        <nav className="navbar bg-body-tertiary mb-5 mt-3">
            <div className="container-fluid d-flex justify-content-center">
                <form className="d-flex" onSubmit={handleOnSubmit}>
                    <input 
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                        className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                    <button className="btn btn-outline-primary" type="submit">Search</button>
                </form>
            </div>
        </nav>
    )
};

export default Search;



