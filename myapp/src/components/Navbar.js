import React from 'react'
import { Outlet, Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <>
    <nav className="navbar navbar-expand-lg bg-dark">
  <div className="container-fluid">
    <a className="navbar-brand" href="/">My Portfolio</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse nav" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
        <Link  to="/">Home</Link>
        </li>
        <li className="nav-item">
        <Link to="/about">About</Link>
        </li>
        <li className="nav-item">
        <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>

      <Outlet />
    </>
  )
}
