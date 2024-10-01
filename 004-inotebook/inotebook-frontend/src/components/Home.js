import React from 'react'
import Notes from './Notes'
import AddNote from './AddNote'

const Home = (props) => {

    return (
        <div style={{ marginTop: "50px" }} className='container d-flex flex-row'>
            <AddNote showAlertTab={props.showAlertTab} />
            <Notes showAlertTab={props.showAlertTab} />
        </div>
    )
}

export default Home
