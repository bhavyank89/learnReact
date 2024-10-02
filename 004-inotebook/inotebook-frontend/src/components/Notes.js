import React, { useContext, useEffect } from 'react';
import NoteContext from '../context/NoteContext';
import Note from './Note';
import { useNavigate } from 'react-router-dom'; // Corrected import

function Notes(props) {
    const { notes, getAllNotes } = useContext(NoteContext);
    let navigate = useNavigate(); // Corrected useNavigate

    useEffect(() => {
        const fetchNotes = async () => {
            if (localStorage.getItem('auth-token')) {
                await getAllNotes(); // Await if getAllNotes is asynchronous
            } else {
                navigate("/login");
            }
        };
        
        fetchNotes();
        // eslint-disable-next-line
    }, []);

    return (
        <div className="container">
            <h2 style={{ color: "#B5C18E" }}>Your Notes</h2>
            {(!notes || notes.length === 0) ? (
                <p>Add Some Notes</p>
            ) : (
                notes.map((note) => (
                    <Note key={note._id} note={note} showAlertTab={props.showAlertTab} />
                ))
            )}
        </div>
    );
}

export default Notes;
