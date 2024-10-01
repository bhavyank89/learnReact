import React, { useContext, useState } from 'react'
import NoteContext from '../context/NoteContext';
import EditModel from './EditModel';

function Note(props) {
    const { deleteNote } = useContext(NoteContext);

    let title = props.note.title;
    let description = props.note.description;
    let tag = props.note.tag;
    let id = props.note._id;

    // const [editNote, setEditNote] = useState({});
    const [showModal, setShowModal] = useState(false);

    const style = {
        padding: "15px",
        border: "0.5px solid",
        borderRadius: "10px"
    }

    const handleDelete = () => {
        deleteNote(id);
    }

    const handleUpdate = () => {
        // toggling modal
        (showModal) ? setShowModal(false) : setShowModal(true);
    }

    return (
        <>
            <div style={style} className="container my-3 bg-dark">

                {/* Title */}
                <h6><b style={{ color: "#FFF3C7" }}>{(!title) ? null : title}</b> - <i>{(!tag) ? null : tag}</i></h6>

                {/* "// description" */}
                <p style={{ color: "B7B7B7" }}>{(!description) ? null : description}</p>

                <div className="container d-flex justify-content-between">
                    {/* "// delete button" */}
                    <button className="btn btn-primary bg-dark" type="button"
                        onClick={handleDelete} style={{ cursor: "pointer", border: "0px" }}>
                        <i className="fa-solid fa-trash mx-2"></i>
                    </button>


                    {/* "// update button" */}
                    {/* <!-- Button trigger modal --> */}
                    <button type="button" className="btn btn-primary bg-dark" style={{ cursor: "pointer", padding: "0px", border: "0px" }} onClick={handleUpdate} >
                        {(showModal) ? "close" : "Edit Note"}
                    </button>
                </div>

                {/* <!-- Modal --> */}
                <div>
                    {showModal && (
                        <EditModel title={title} tag={tag} description={description} id={id} setShowModal={setShowModal} />
                    )}
                </div>
            </div>
        </>
    )
}

export default Note
