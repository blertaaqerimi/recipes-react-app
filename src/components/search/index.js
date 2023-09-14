import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa';
import "./style.css";

const Search = () => {
    const [inputValue, setInputValue] = useState("");
    const navigate = useNavigate();

    const handleOnSubmit = async (e) => {
        e.preventDefault();
        navigate(`/searched/${inputValue}`)
        setInputValue('')
    }
    const location = useLocation();
    if (location.pathname.includes("connect")) return null;

    return (
        <form style={{ margin: "2rem" }} onSubmit={handleOnSubmit}>
            <div style={{ position: "relative", width: 'min(550px, 100%)', margin: "0 auto" }}>
                <FaSearch style={{ position: "absolute", left: "10px", top: "30%", color: "white", transform: "trasnlate(100%, -50%)"}} />
                <input
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    className="me-2" type="search" placeholder="Search" aria-label="Search" />
            </div>
        </form>
    )
};

export default Search;



