import React from 'react';
import loginImg from '../images/loginimg.png';

function Signup(props) {
    const handleSubmit = (e) => {
        e.preventDefault();
        props.showAlertTab(true, "Signed up successfully!");
    };

    return (
        <div className='container d-flex'>
            <div style={{ width: "500px", marginTop: "50px" }} className="mx-5">
                <h2 style={{ color: "#B5C18E" }}>SignUp</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3 my-5">
                        <label htmlFor="email" className="form-label">Enter email</label>
                        <input type="email" className="form-control bg-dark" id="email" />
                    </div>
                    <div className="mb-5">
                        <label htmlFor="password" className="form-label">Enter password</label>
                        <input type="password" className="form-control bg-dark" id="password" />
                    </div>
                    <button type="submit" className="btn btn-primary my-3">SignUp</button>
                </form>
            </div>
            <div className='mx-5'>
                <div style={{ height: "500px", width: "450px" }} className="container">
                    <img style={{ backgroundColor: "white", border: "2px solid", borderRadius: "15px", marginTop: "50px" }} className="card-img-top" src={loginImg} alt="login" />
                </div>
            </div>
        </div>
    );
}

export default Signup;
