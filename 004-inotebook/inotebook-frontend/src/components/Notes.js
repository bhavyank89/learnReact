import React, { useContext } from 'react'
import NoteContext from '../context/NoteContext'
import Note from './Note';

function Notes() {
    const { notes } = useContext(NoteContext);
    return (
        <>
            <div className="container">
                <h2 style={{ color: "#B5C18E" }}>Your Notes</h2>
                {(!notes) ? <p>Add Some Notes</p> : (notes.map((note) => { return <Note key={note._id} note={note} /> }))}
            </div>
        </>
    )
}

export default Notes
