import './App.css';
import React, { Component } from 'react'
import Navbar from './components/Navbar'
import News from './components/News';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

export default class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Navbar />
          <Routes>
            <Route path='/' element={<News country="in" catogary="general" pageSize={3} />}></Route>
            <Route path='/about' element={<News country="in" catogary="general" pageSize={3} />}></Route>
            <Route path='/business' element={<News country="in" catogary="business" pageSize={3} />}></Route>
            <Route path='/entertainment' element={<News country="in" catogary="entertainment" pageSize={3} />}></Route>
            <Route path='/sports' element={<News country="in" catogary="sports" pageSize={3} />}></Route>
            <Route path='/technology' element={<News country="in" catogary="technology" pageSize={3} />}></Route>
            <Route path='/science' element={<News country="in" catogary="science" pageSize={3} />}></Route>
            <Route path='/health' element={<News country="in" catogary="health" pageSize={3} />}></Route>
            <Route path='/general' element={<News country="in" catogary="general" pageSize={3} />}></Route>
          </Routes>
        </Router>
      </div>
    )
  }
}
