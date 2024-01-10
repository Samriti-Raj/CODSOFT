import React from 'react'
import "./navbar.css"
import logo from "../../assets/logo.png"
import contact from "../../assets/contact.png"
import { Link } from 'react-scroll'

const navbar = () => {
  return (
    <div>
      <nav className="navbar">
        <div className="desktopmenu">
          <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} className="desktopmenulistitem" style={{'marginLeft':'200px'}}>Home</Link>
          <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-100} className="desktopmenulistitem">About</Link>
          <Link activeClass='active' to='projects' spy={true} smooth={true} offset={-100} className="desktopmenulistitem">Projects</Link>
          <Link activeClass='active' to='contacts' spy={true} smooth={true} offset={-100} className="desktopmenulistitem">Contact</Link>
        </div>
      </nav>
    </div>
  )
}

export default navbar
