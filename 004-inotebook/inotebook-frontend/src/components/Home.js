import React from 'react'
import Notes from './Notes'
import AddNote from './AddNote'

const Home = () => {

    return (
        <div className='container d-flex flex-row'>
            <AddNote />
            <Notes />
        </div>
    )
}

export default Home
