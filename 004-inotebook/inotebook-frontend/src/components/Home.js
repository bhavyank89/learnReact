import React from 'react'
import Notes from './Notes'

const Home = () => {

    return (
        <div className='container my-5 d-flex flex-row'>

            <div className="container mx-3">
                <h2 style={{ color: "#B5C18E" }}>Enter Notes</h2>
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
                    <button type="submit" className="btn btn-primary mb-2 my-3">Add Note</button>
                </form>
            </div>

            <Notes />
        </div>
    )
}

export default Home
