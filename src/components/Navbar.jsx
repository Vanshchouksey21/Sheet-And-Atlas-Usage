import React from 'react'
import { NavLink } from 'react-router-dom'
import "../Navbar.css"   // 👈 CSS file import karo

const Navbar = () => {
  return (
    <nav
      style={{
        backgroundColor: "#333",
        padding: "12px 20px",
        borderRadius: "8px",
        width: "fit-content",
        margin: "5px auto",
        position: "sticky",
        top: "0",
        zIndex: "100",
      }}
    >
      <ul
        style={{
          listStyle: "none",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "20px",
          margin: 0,
          padding: 0,
        }}
      >
        <li>
          <NavLink to="/" className="nav-link">Home</NavLink>
        </li>
        <li>
          <NavLink to="/insert" className="nav-link">Insert</NavLink>
        </li>
        <li>
          <NavLink to="/display" className="nav-link">Display</NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
