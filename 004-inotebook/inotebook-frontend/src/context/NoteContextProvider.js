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
    const addNote = async (note) => {
        const { title, description } = note;
        const tag = note.tag || "default"; // Default tag if not provided

        const createdNote = { title, description, tag };

        const url = `${host}/notes/create`;

        try {
            const response = await fetch(url, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjZiMGQzYzIxNDU3Mzc2NWIxNzdlZjZmIn0sImlhdCI6MTcyMjg2NDU3OH0.p9DpBqzvNAKquLLkw8-YTN5f_ICX8LMXbQ0v2kRJ1x0"
                },
                body: JSON.stringify(createdNote)
            });

            const addedNote = await response.json(); // Get the added note from the response

            // Update the state with the new note
            setNotes([...notes, addedNote]);

        } catch (error) {
            console.log("Error:", error.message);
        }
    }


    // deleteNote
    const deleteNote = async (id) => {

        const url = `${host}/notes/delete/${id}`;

        try {
            const result = await fetch(url, {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json",
                    "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjZiMGQzYzIxNDU3Mzc2NWIxNzdlZjZmIn0sImlhdCI6MTcyMjg2NDU3OH0.p9DpBqzvNAKquLLkw8-YTN5f_ICX8LMXbQ0v2kRJ1x0"
                }
            })

            const deletedNote = await result.json();
            const filteredNote = notes.filter((note) => { return note._id !== deletedNote._id });
            setNotes(filteredNote);
            getAllNotes();

        } catch (error) {
            console.log("Error : " + error.message);
        }
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
