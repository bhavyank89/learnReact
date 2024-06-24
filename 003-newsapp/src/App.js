import './App.css';
import React, { Component } from 'react'
import Navbar from './components/Navbar'
import News from './components/News';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'
import { useState } from 'react';

export default class App extends Component {
  pageSize = 3;
  country = "in";

  state = {
    progress: 0
  }

  setProgress = (progress) => {
    this.setState({
      progress: progress
    })
  }

  render() {
    return (
      <div>
        <Router>
          <LoadingBar
            color='#f11946'
            progress={this.state.progress}
          />
          <Navbar />
          <Routes>
            <Route path='/' element={<News setProgress={this.setProgress} country={this.country} category="general" pageSize={this.pageSize} />}></Route>
            <Route path='/about' element={<News setProgress={this.setProgress} country={this.country} category="general" pageSize={this.pageSize} />}></Route>
            <Route path='/business' element={<News setProgress={this.setProgress} country={this.country} category="business" pageSize={this.pageSize} />}></Route>
            <Route path='/entertainment' element={<News setProgress={this.setProgress} country={this.country} category="entertainment" pageSize={this.pageSize} />}></Route>
            <Route path='/sports' element={<News setProgress={this.setProgress} country={this.country} category="sports" pageSize={this.pageSize} />}></Route>
            <Route path='/technology' element={<News setProgress={this.setProgress} country={this.country} category="technology" pageSize={this.pageSize} />}></Route>
            <Route path='/science' element={<News setProgress={this.setProgress} country={this.country} category="science" pageSize={this.pageSize} />}></Route>
            <Route path='/health' element={<News setProgress={this.setProgress} country={this.country} category="health" pageSize={this.pageSize} />}></Route>
            <Route path='/general' element={<News setProgress={this.setProgress} country={this.country} category="general" pageSize={this.pageSize} />}></Route>
          </Routes>
        </Router>
      </div>
    )
  }
}
