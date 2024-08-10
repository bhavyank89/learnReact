import React, { Component } from 'react'

export class Counter2 extends Component {
    shouldComponentUpdate(nextProps, nextState) {
        if (this.props.count2 !== nextProps.count2) {
            return true;
        }
        return false;
    }
    render() {
        console.log("Inside Counter2...");
        return (
            <div>
                <h1>Counter2</h1>
                <p>{this.props.count2}</p>
                <button onClick={this.props.handleCount2}>Increment count2</button>
            </div>
        )
    }
}

export default Counter2
