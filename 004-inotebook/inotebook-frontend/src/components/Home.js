import React, { useContext } from 'react'
import NoteContext from '../context/NoteContext'

const Home = () => {
    const { notes } = useContext(NoteContext);
    return (
        <div className='container my-5 d-flex flex-row'>

            <div className="container mx-3">
                <h2>Enter Notes</h2>
                <form>
                    <div className="mb-3">
                        <div>
                            <label htmlFor="exampleInputPassword1" className="form-label">Title</label>
                            <input type="text" className="form-control bg-dark" data-bs-theme="dark" id="exampleInputPassword1" />
                        </div>
                        <div className="form-group">
                            <label className="my-3" htmlFor="exampleFormControlTextarea1">Description</label>
                            <textarea className="form-control bg-dark" data-bs-theme="dark" id="exampleFormControlTextarea1" rows="3"></textarea>
                        </div>
                        <div>
                            <label htmlFor="exampleInputPassword1" className="form-label my-3">Tag</label>
                            <input type="text" className="form-control bg-dark" data-bs-theme="dark" id="exampleInputPassword1" />
                        </div>
                    </div>
                    <button type="submit" className="btn btn-primary mb-2 my-3">Submit</button>
                </form>
            </div>

            <div className="container mx-3">
                <h2>Your Notes</h2>
                {notes.map((note) => { return <><h6>{note.title}</h6><br /></> })}
            </div>
        </div>
    )
}

export default Home
