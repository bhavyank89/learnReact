import React from 'react';

export default function Alert(props) {
    if (!props.alert || !props.alert.type) {
        return null;
    }

    return (
        <>
            <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
                <strong>{props.alert.message}</strong>
                <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
            </div>
        </>
    );
}
