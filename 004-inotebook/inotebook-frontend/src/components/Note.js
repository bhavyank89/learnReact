import React, { useContext, useState } from 'react'
import NoteContext from '../context/NoteContext';

function Note(props) {
    const { deleteNote, updateNote } = useContext(NoteContext);

    const title = props.note.title;
    const description = props.note.description;
    const tag = props.note.tag;
    const id = props.note._id;

    const [uNote, setUnote] = useState({ id, title, description, tag });

    const style = {
        padding: "15px",
        border: "0.5px solid",
        borderRadius: "10px"
    }

    const handleDelete = () => {
        deleteNote(id);
    }

    const handleOnChange = (e) => {
        // below line indicates that keep waterver in the note is and add whatever changes have benn made
        setUnote({ ...uNote, [e.target.name]: e.target.value });
    }
    const handleOnClick = (e) => {
        e.preventDefault();
        updateNote(uNote);
    }
    return (
        <>
            <div style={style} className="container my-3 bg-dark">

                {/* Title */}
                <h6><b style={{ color: "#FFF3C7" }}>{(!title) ? null : title}</b> - <i>{(!tag) ? null : tag}</i></h6>

                {/* "// description" */}
                <p style={{ color: "B7B7B7" }}>{(!description) ? null : description}</p>

                {/* "// delete button" */}
                <i style={{ cursor: "pointer" }} className="fa-solid fa-trash mx-2" onClick={handleDelete}></i>

                {/* "// update button" */}
                {/* <!-- Button trigger modal --> */}
                <i style={{ cursor: "pointer" }} data-bs-toggle="modal" data-bs-target="#exampleModal" className="fa-solid fa-pen-to-square mx-2"></i>

                {/* <!-- Modal --> */}
                <div className="modal fade " id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog ">
                        <div style={style} className="modal-content container my-3 bg-dark">
                            <div className="container">
                                <h2 style={{ color: "#B5C18E" }}>Edit Note</h2>
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
                                                name='title'
                                                id="title"
                                                value={uNote.title}
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
                                                value={uNote.description}
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
                                                value={uNote.tag}
                                                placeholder='default'
                                                onChange={handleOnChange} />
                                        </div>
                                    </div>
                                    <div className="container d-flex">

                                        <button type="button" className="btn btn-secondary mb-2 mx-2 my-3" data-bs-dismiss="modal">Close</button>
                                        <button id='updateButton' type="submit" className="btn btn-primary mb-2 my-3" data-bs-dismiss="modal" onClick={handleOnClick}>update changes</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Note
