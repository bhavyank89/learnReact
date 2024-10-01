import React, { useContext, useState } from 'react'
import NoteContext from '../context/NoteContext';

function EditModel(props) {

    const { updateNote } = useContext(NoteContext);

    // Destructure the incoming props
    const { title: initialTitle, description: initialDescription, tag: initialTag, id, setShowModal } = props;

    // State for form values
    const [title, setTitle] = useState(initialTitle);
    const [description, setDescription] = useState(initialDescription);
    const [tag, setTag] = useState(initialTag);

    const handleOnChangeTitle = (e) => {
        setTitle(e.target.value);
    };

    const handleOnChangeDescription = (e) => {
        setDescription(e.target.value);
    };

    const handleOnChangeTag = (e) => {
        setTag(e.target.value);
    };

    const handleOnClickUpdateChange = (e) => {
        e.preventDefault();
        const note = { title, description, tag, id };
        updateNote(note);
        // Perform the update logic here if needed, then close the modal
        setShowModal(false);
    };

    const handleOnClickClose = (e) => {
        e.preventDefault();
        setShowModal(false);  // Close the modal
    };

    const style = {
        padding: "15px",
        border: "0.5px solid",
        borderRadius: "10px"
    };

    return (
        <div className="container">
            <div className="container">
                <div style={style} className="container my-3 bg-dark">
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
                                        value={title}
                                        onChange={handleOnChangeTitle} />
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
                                        value={description}
                                        onChange={handleOnChangeDescription}>
                                    </textarea>
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
                                        value={tag}
                                        placeholder='default'
                                        onChange={handleOnChangeTag} />
                                </div>
                            </div>
                            <div className="container d-flex">
                                <button type="button" className="btn btn-secondary mb-2 mx-2 my-3" onClick={handleOnClickClose}>Close</button>
                                <button id='updateButton' type="submit" className="btn btn-primary mb-2 my-3" onClick={handleOnClickUpdateChange}>Update Changes</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default EditModel;
