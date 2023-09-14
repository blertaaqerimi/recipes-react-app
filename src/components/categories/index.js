import { FaPizzaSlice, FaHamburger } from "react-icons/fa";
import { GiNoodles, GiChopsticks } from "react-icons/gi";
import { PiCookingPotFill }from "react-icons/pi"
import { NavLink, useLocation } from "react-router-dom";
import "./style.css";

const list = [
    {
        name: "Italian",
        icon: <FaPizzaSlice />
    },
    {
        name: "Mediterranean",
        icon: <PiCookingPotFill />
    },
    {
        name: "American",
        icon: <FaHamburger />
    },
    {
        name: "Thai",
        icon: <GiNoodles />
    },
    {
        name: "Japanese",
        icon: <GiChopsticks />
    }
];

const Categories = () => {
    const location = useLocation();
    if (location.pathname.includes("connect")) return null;
    return (
        <div className="list">
            {list.map((cuis) =>
                <NavLink key={cuis.name} className="cuisine-link" to={`/cuisine/${cuis.name}`}>
                    {cuis.icon}
                    <h4>{cuis.name}</h4>
                </NavLink>
            )}
        </div>
    );
};

export default Categories;