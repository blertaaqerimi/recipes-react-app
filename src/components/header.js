import { Link, useLocation } from "react-router-dom";
import React from 'react';

const routes = [
  { path: "/", label: "Home" },
  { path: "/recipes", label: "Recipes" },
  { path: "/connect", label: "Connect" },
  { path: "/weekmealplanner", label: "Week meal planner" }
];

const Header = () => {
  const location = useLocation();

  return (
    <div className="container">
      <header className="d-flex justify-content-center py-3">
        <ul className="nav nav-pills">
          {routes.map((route, index) => (
            <li className="nav-item" key={index}>
              <Link
                to={route.path}
                className={`nav-link text-black ${location.pathname === route.path ? 'active' : ''}`}
                aria-current="page"
              >
                {route.label}
              </Link>
            </li>
          ))}
        </ul>
      </header>
    </div>
  );
};

export default Header;
