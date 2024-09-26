import React from 'react'

function Alert(props) {
    const style = {
        marginTop: "10px",
        marginRight: "0px",
    }
    return (
        <>
            <div style={style} className="container flex-row-reverse d-flex">
                <div class="alert alert-warning text-dark" role="alert">
                    {props.message}
                </div>
            </div>
        </>
    )
}

export default Alert
