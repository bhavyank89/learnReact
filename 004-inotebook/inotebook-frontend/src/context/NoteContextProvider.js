import React from 'react'
import NoteContext from '../context/NoteContext'

function NoteContextProvider({ children }) {
    return (
        <div>
            <NoteContext.Provider >
                {children}
            </NoteContext.Provider>
        </div>
    )
}

export default NoteContextProvider
