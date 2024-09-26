import React from 'react'
import NoteContext from '../context/NoteContext'

function NoteContextProvider({ children }) {
    return (
        <div>
            <NoteContext.Provider value={{}} >
                {children}
            </NoteContext.Provider>
        </div>
    )
}

export default NoteContextProvider
