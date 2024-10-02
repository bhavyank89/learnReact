import React from 'react'

function Alert(props) {
    return (
        <>
            <div style={{ top: "80px", right: "15px", display: "inline-block" }} className="position-fixed">
                <span className="alert alert-primary text-dark" role="alert">
                    {props.alertMessage}
                </span>
            </div>
        </>
    )
}

export default Alert
