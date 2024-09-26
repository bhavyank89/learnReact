import React, { useContext } from 'react'
import NoteContext from '../context/NoteContext';

function Note(props) {
    const { deleteNote } = useContext(NoteContext);

    const title = props.note.title;
    const description = props.note.description;
    const tag = props.note.tag;
    const id = props.note._id;

    const style = {
        padding: "15px",
        border: "0.5px solid",
        borderRadius: "10px"
    }

    const handleDelete = () => {
        deleteNote(id);
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
                <i style={{ cursor: "pointer" }} className="fa-solid fa-pen-to-square mx-2"></i>
            </div>
        </>
    )
}

export default Note
