import React, { useState } from 'react'
import NoteContext from '../context/NoteContext'

function NoteContextProvider({ children }) {
    // hardCoded note Fetched
    const notesFetched = [
        {
            "_id": "66f510e0cc1a4e316299a29a",
            "user": "66b0d3c214573765b177ef6f",
            "title": "My Title1",
            "description": "First Note of the day",
            "tag": "General",
            "timeStamp": "2024-09-26T07:44:32.320Z",
            "__v": 0
        },
        {
            "_id": "66f510efcc1a4e316299a29c",
            "user": "66b0d3c214573765b177ef6f",
            "title": "My Title2",
            "description": "Second Note of the day",
            "tag": "Developmnet",
            "timeStamp": "2024-09-26T07:44:47.962Z",
            "__v": 0
        }
    ]
    const [notes, setNotes] = useState(notesFetched);
    return (
        <div>
            <NoteContext.Provider value={{ notes, setNotes }} >
                {children}
            </NoteContext.Provider>
        </div>
    )
}

export default NoteContextProvider
