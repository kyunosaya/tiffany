import React from 'react'
import ReactDOM from 'react-dom/client'
import {Link} from 'react-router-dom'
import './css/Header.css'

function Header(){
  return (
    <header>
    <h1>
      <Link to="/"><img src="./img/logo.png" alt="Tiffany" /></Link>
    </h1>
  </header>
  )
}

export default Header