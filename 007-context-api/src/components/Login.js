import React, { useContext, useState } from 'react'
import userContext from '../context/UserContext';

function Login() {
    const [name, setName] = useState();
    const [password, setPassword] = useState();

    const { setUser } = useContext(userContext);

    const handleOnClick = (e) => {
        e.preventDefault();
        setUser({ name, password });
    }

    return (
        <>
            <div>
                <h1>Login dashBoard : </h1>

                <input
                    style={{ color: "black" }}
                    type="text"
                    value={name}
                    placeholder='Enter Name'
                    onChange={(e) => { setName(e.target.value) }} />
                {" "}

                <input
                    type="password"
                    value={password}
                    placeholder='Enter Password'
                    onChange={(e) => { setPassword(e.target.value) }} />
                {" "}

                <button onClick={handleOnClick}>Login</button>
            </div>
        </>
    )
}

export default Login
