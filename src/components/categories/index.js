import { FaPizzaSlice, FaHamburger } from "react-icons/fa";
import { GiNoodles, GiChopsticks } from "react-icons/gi";
import { NavLink } from "react-router-dom";
import "./style.css";

const list = [
    {
        name: "Italian",
        icon: <FaPizzaSlice />
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
    return (
        <div className="list">
            {list.map((cuis) =>
                <NavLink key={cuis.name} className="cuisine-link" to={`/cuisines/${cuis.name}`}>
                    {cuis.icon}
                    <h4>{cuis.name}</h4>
                </NavLink>
            )}
        </div>
    );
};

export default Categories;