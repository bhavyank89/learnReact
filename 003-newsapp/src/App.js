import './App.css';
import React, { Component } from 'react'

export default class App extends Component {
  a = 'John';
  render() {
    return (
      <div>
        Hello This is made form class based components - {this.a}
      </div>
    )
  }
}
