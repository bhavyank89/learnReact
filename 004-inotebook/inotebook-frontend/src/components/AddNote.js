import React, { useContext, useState } from 'react'
import NoteContext from '../context/NoteContext'

function AddNote() {

    const { addNote } = useContext(NoteContext);
    const [note, setNote] = useState({ title: "", description: "", tag: "" })

    const handleOnChange = (e) => {
        // below line indicates that keep waterver in the note is and add whatever changes have benn made
        setNote({ ...note, [e.target.name]: e.target.value });
    }
    const handleOnClick = (e) => {
        e.preventDefault();
        addNote(note);
        setNote({ title: "", description: "", tag: "" });
    }

    return (
        <>
            <div className="container mx-3">
                <h2 style={{ color: "#B5C18E" }}>Enter Notes</h2>
                <form>
                    <div className="mb-3">
                        <div>
                            <label
                                htmlFor="title"
                                className="form-label">
                                Title
                            </label>
                            <input
                                type="text"
                                className="form-control bg-dark"
                                data-bs-theme="dark"
                                name='title' id="title"
                                value={note.title}
                                onChange={handleOnChange} />
                        </div>
                        <div className="form-group">
                            <label
                                className="my-3"
                                htmlFor="description">
                                Description
                            </label>
                            <textarea
                                className="form-control bg-dark"
                                data-bs-theme="dark"
                                name='description'
                                id="description"
                                rows="3"
                                value={note.description}
                                onChange={handleOnChange}></textarea >
                        </div>
                        <div>
                            <label
                                htmlFor="tag"
                                className="form-label my-3">
                                Tag
                            </label>
                            <input
                                type="text"
                                className="form-control bg-dark"
                                data-bs-theme="dark"
                                id="tag"
                                name='tag'
                                placeholder='default'
                                value={note.tag}
                                onChange={handleOnChange} />
                        </div>
                    </div>
                    <button type="submit" className="btn btn-primary mb-2 my-3" onClick={handleOnClick}>Add Note</button>
                </form>
            </div>
        </>
    )
}

export default AddNote
