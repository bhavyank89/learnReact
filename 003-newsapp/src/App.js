import './App.css';
import React, { Component } from 'react'
import Navbar from './components/Navbar'
import News from './components/News';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

export default class App extends Component {
  pageSize = 3;
  country = "in";
  render() {
    return (
      <div>
        <Router>
          <Navbar />
          <Routes>
            <Route path='/' element={<News country={this.country} catogary="general" pageSize={this.pageSize} />}></Route>
            <Route path='/about' element={<News country={this.country} catogary="general" pageSize={this.pageSize} />}></Route>
            <Route path='/business' element={<News country={this.country} catogary="business" pageSize={this.pageSize} />}></Route>
            <Route path='/entertainment' element={<News country={this.country} catogary="entertainment" pageSize={this.pageSize} />}></Route>
            <Route path='/sports' element={<News country={this.country} catogary="sports" pageSize={this.pageSize} />}></Route>
            <Route path='/technology' element={<News country={this.country} catogary="technology" pageSize={this.pageSize} />}></Route>
            <Route path='/science' element={<News country={this.country} catogary="science" pageSize={this.pageSize} />}></Route>
            <Route path='/health' element={<News country={this.country} catogary="health" pageSize={this.pageSize} />}></Route>
            <Route path='/general' element={<News country={this.country} catogary="general" pageSize={this.pageSize} />}></Route>
          </Routes>
        </Router>
      </div>
    )
  }
}
