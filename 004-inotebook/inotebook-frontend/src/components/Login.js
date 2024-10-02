import React, { useState } from 'react';
import loginImg from '../images/loginimg.png';
import { useNavigate } from 'react-router-dom';

function Login(props) {

    const [credentials, setCredentials] = useState({ email: "", password: "" });
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        // Use credentials for login logic
        console.log(credentials); // For debugging purposes

        const host = "http://localhost:5000";
        const response = await fetch(`${host}/auth/login`,
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(credentials)
            })
        const json = await response.json();
        console.log(json);

        if (json.success) {
            props.showAlertTab(true, "Logged in successfully!");
            localStorage.setItem('auth-token', json.JWTToken)
            navigate("/")
        }
        else {
            props.showAlertTab(true, "Login with correct credentials!");
        }
        setCredentials({ email: "", password: "" });
    };

    const handleOnChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value });
    };

    return (
        <div className='container d-flex'>
            <div style={{ width: "500px", marginTop: "50px" }} className="mx-5">
                <h2 style={{ color: "#B5C18E" }}>Login</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3 my-5">
                        <label htmlFor="email" className="form-label">Enter email</label>
                        <input
                            type="email"
                            name="email"
                            value={credentials.email}
                            style={{ color: "white" }}
                            className="form-control bg-dark"
                            id="email"
                            onChange={handleOnChange}
                        />
                    </div>
                    <div className="mb-5">
                        <label htmlFor="password" className="form-label">Enter password</label>
                        <input
                            type="password"
                            name="password"
                            value={credentials.password}
                            style={{ color: "white" }}
                            className="form-control bg-dark"
                            id="password"
                            onChange={handleOnChange}
                        />
                    </div>
                    <button type="submit" className="btn btn-primary my-3">Login</button>
                </form>
            </div>
            <div className='mx-5'>
                <div style={{ height: "500px", width: "450px" }} className="container">
                    <img
                        style={{
                            backgroundColor: "white",
                            border: "2px solid",
                            borderRadius: "15px",
                            marginTop: "50px"
                        }}
                        className="card-img-top"
                        src={loginImg}
                        alt="login"
                    />
                </div>
            </div>
        </div>
    );
}

export default Login;
