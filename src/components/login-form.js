import { useEffect } from "react";
import { connect_user } from '../api'

const LoginForm = () => {

    // const [user, setUser] = useState('');

    useEffect(() => {
        connect_user();

    }, [])

    return (
        <form style={{width: '300px', margin: '50px auto'}}> 
            <h1 className="h3 mb-3 fw-normal">Please sign in</h1>

            <div className="form-floating">
                <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
                    <label htmlFor="floatingInput">Email address</label>
            </div>
            <div className="form-floating mt-2">
                <input type="password" className="form-control" id="floatingPassword" placeholder="Password" />
                    <label htmlFor="floatingPassword">Password</label>
            </div>
            <div className="d-flex justify-content-center mt-3">
            <button className="btn btn-primary w-40 py-2 mx-2" type="submit">Register</button>
            <button className="btn btn-primary w-40 py-2" type="submit">Sign in</button>
            </div>
        </form>
    )
};

export default LoginForm;