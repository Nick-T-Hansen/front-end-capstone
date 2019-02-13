import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from "react-router-dom"
import Cave from './components/Cave'
import './index.css'
import NavBar from './components/nav/NavBar';

ReactDOM.render(
  <Router>
      <Cave />
  </Router>
  , document.getElementById('root'))
