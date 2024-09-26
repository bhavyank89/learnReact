import React from 'react'

function Note(props) {
    const title = props.note.title;
    const description = props.note.description;
    const tag = props.note.tag;
    const id = props.note.id;
    const style = {
        padding: "15px",
        border: "0.5px solid",
        borderRadius: "10px"
    }
    return (
        <>
            <div style={style} className="container my-3 bg-dark" key={id}>
                <h6><b style={{ color: "#FFF3C7" }}>{(!title) ? null : title}</b> - <i>{(!tag) ? null : tag}</i></h6>
                <p style={{ color: "B7B7B7" }}>{(!description) ? null : description}</p>
                <i style={{ cursor: "pointer" }} className="fa-solid fa-trash mx-2"></i>
                <i style={{ cursor: "pointer" }} className="fa-solid fa-pen-to-square mx-2"></i>
            </div>
        </>
    )
}

export default Note
