import React, { useState } from 'react';
import loginImg from '../images/loginimg.png';
import { useNavigate } from 'react-router-dom';

function Signup(props) {
    const [credentials, setCredentials] = useState({ name: "", email: "", password: "" });
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        const host = "http://localhost:5000";
        try {
            const response = await fetch(`${host}/auth/createuser`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(credentials),
            });

            const json = await response.json();
            console.log(json);

            // Success case
            if (json.success) {
                props.showAlertTab(true, "Account created successfully!");
                localStorage.setItem('auth-token', json.JWTToken);
                navigate("/");
            }
            // Error handling: duplicate user case
            else if (json.error && json.error.includes("duplicate key error")) {
                props.showAlertTab(true, "User with this email already exists.");
            }
            // Other errors
            else {
                props.showAlertTab(true, "Signup failed. Please try again.");
            }
        } catch (error) {
            console.error("Error occurred:", error);
            props.showAlertTab(true, "An error occurred while signing up.");
        }

        setCredentials({ name: "", email: "", password: "" });
    };

    const handleOnChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value });
    };

    return (
        <div className='container d-flex'>
            <div style={{ width: "500px", marginTop: "50px" }} className="mx-5">
                <h2 style={{ color: "#B5C18E" }}>SignUp</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3 my-5">
                        <label htmlFor="name" className="form-label">Enter name</label>
                        <input
                            type="text"
                            name="name"
                            value={credentials.name}
                            style={{ color: "white" }}
                            className="form-control bg-dark"
                            id="name"
                            onChange={handleOnChange}
                            minLength={3}
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Enter email</label>
                        <input
                            type="email"
                            name="email"
                            value={credentials.email}
                            style={{ color: "white" }}
                            className="form-control bg-dark"
                            id="email"
                            onChange={handleOnChange}
                            required
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
                            minLength={5}
                            required
                        />
                    </div>
                    <button type="submit" disabled={credentials.password.length < 5} className={`btn btn-${(credentials.password.length < 5) ? "secondary" : "primary"} my-3`}>SignUp</button>
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

export default Signup;