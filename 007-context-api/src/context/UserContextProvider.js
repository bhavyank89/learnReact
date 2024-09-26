import React, { useState } from 'react';
import UserContext from './UserContext';

const UserContextProvider = ({ children }) => {
    // these children are destructured from the props
    // these children of props are nothing but the components inside the UserContext component in the App.js file
    /*    example-
            <UserContext>   --> userContext have to children
                <Login/>       --> child 1
                <Profile/>      --> child 2
            </UserContext>
    */
    /*
         This UserContextProvider returns the children inside the UserContext
     */

    // below are the all the states that must be accessable to the components present inside the UserContext in the App.js
    const [user, setUser] = useState(null);

    return (
        <>
            <UserContext.Provider value={{ user, setUser }}>
                {children}
            </UserContext.Provider>
        </>
        // now ever component in the App.js which are placed inside the UserContext can have access to the state which we have created in this file
    )
}

export default UserContextProvider;