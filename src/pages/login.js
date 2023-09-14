import { useState } from "react";
import { connect_user } from '../api'
import { NavLink } from "react-router-dom";

const LoginForm = () => {
    const [user, setUser] = useState('');
    const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem("user"))

    const handleSubmit = async (e) => {
        e.preventDefault()
        const data = await connect_user(user);
        localStorage.setItem('user', JSON.stringify(data));
        setIsLoggedIn(true);
    }

    if (isLoggedIn) {
        return (
            <div>
                <h3 className="text-center mt-5">You are already connected!</h3>
                <NavLink className={"d-flex text-black justify-content-end mx-5"} to={'/weekmealplanner'}>Get week meal planner</NavLink>
            </div>
        )
    }

    return (
        <form onSubmit={handleSubmit} style={{ width: '300px', margin: '50px auto' }}>
            <h1 className="h3 mb-3 fw-normal">Please sign in</h1>

            <div className="form-floating">
                <input onChange={(e) => setUser(e.target.value)}
                    type="text" className="form-control" placeholder="Enter your username" />
                <label htmlFor="floatingInput">Username</label>
            </div>
            <div className="d-flex justify-content-center mt-3">
                <button className="btn btn-primary w-40 py-2" type="submit">Connect</button>
            </div>
        </form>
    )
};

export default LoginForm;