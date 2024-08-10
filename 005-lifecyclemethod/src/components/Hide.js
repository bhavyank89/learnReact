import React, { Component } from 'react'

export class Hide extends Component {
    componentWillUnmount() {
        console.log("Hide is hidden Now...");
    }
    render() {
        return (
            <div>
                <p>You can Hide me</p>
            </div>
        )
    }
}

export default Hide
