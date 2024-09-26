import React, { useContext } from 'react'
import userContext from '../context/UserContext'

function Profile() {
    const { user } = useContext(userContext);
    return (
        <>
            <div>
                <h2>Display Profile</h2>
                <h3>Profile : {(!user) ? null : user.name}</h3>
            </div>
        </>
    )
}

export default Profile
