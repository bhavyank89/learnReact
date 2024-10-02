import React from 'react'

function Alert(props) {
    return (
        <>
            <div className="container flex-row-reverse d-flex">
                <div className="alert alert-primary text-dark" role="alert">
                    {props.alertMessage}
                </div>
            </div>
        </>
    )
}

export default Alert
