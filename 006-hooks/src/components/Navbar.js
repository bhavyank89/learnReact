import React, { memo } from 'react'

function Navbar(props) {
    console.log("Navbar rendered...");
    return (
        <div>
            <h1>Learning useCallback</h1>
            <h3>This is {props.adjective} webapp</h3>
        </div>
    )
}

export default memo(Navbar)
