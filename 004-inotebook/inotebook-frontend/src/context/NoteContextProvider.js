import React, { useState } from 'react'
import NoteContext from '../context/NoteContext'

function NoteContextProvider({ children }) {

    const [notes, setNotes] = useState();

    const host = "http://localhost:5000";

    // getAllNotes
    const getAllNotes = async () => {
        const url = `${host}/notes/fetchall`;
        const response = await fetch(url, {
            method: "GET",
            headers: {
                "Content-type": "application/json",
                "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjZiMGQzYzIxNDU3Mzc2NWIxNzdlZjZmIn0sImlhdCI6MTcyMjg2NDU3OH0.p9DpBqzvNAKquLLkw8-YTN5f_ICX8LMXbQ0v2kRJ1x0",
            },
        })
        const fetchedNotes = await response.json();
        setNotes(fetchedNotes);
    }

    // addNote
    const addNote = (note) => {
        const title = note.title;
        const description = note.description;
        const tag = (!note.tag) ? "default" : note.tag;

        const createdNote = { title, description, tag };

        setNotes(notes.concat(createdNote));
    }


    // deleteNote
    const deleteNote = (id) => {
        console.log("deleting note with id " + id);
        const filteredNotes = notes.filter((note) => { return note._id !== id });
        setNotes(filteredNotes);
    }

    return (
        <div>
            <NoteContext.Provider value={{ notes, getAllNotes, addNote, deleteNote }} >
                {children}
            </NoteContext.Provider>
        </div>
    )
}

export default NoteContextProvider
