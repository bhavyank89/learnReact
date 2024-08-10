import React, { Component } from 'react'

export class Counter1 extends Component {
    shouldComponentUpdate(nextProps, nextState) {
        if (this.props.count1 !== nextProps.count1) {
            return true;
        }
        return false;
    }
    render() {
        console.log("Inside Counter1...");
        return (
            <div>
                <h1>Counter1</h1>
                <p>{this.props.count1}</p>
                <button onClick={this.props.handleCount1}>Increment count1</button>
            </div>
        )
    }
}

export default Counter1
