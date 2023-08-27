import React  from 'react';
import { Link } from 'react-router-dom';

export default function Navbar(props) {
  

  return (
    <>
      <nav className={`navbar px-md-2 navbar-expand-sm bg-${props.mode} text-${props.mode === 'light' ? 'dark' : 'light'}`} id='navbar'>
        <div className="container-fluid">
          <Link className={`navbar-brand fw-bold text-${props.mode === 'light' ? 'dark' : "light"}`} to="/Home">{props.navbrand}</Link>
          <button className="navbar-toggler bg-white" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav w-100 justify-content-end me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className={`nav-link active  text-${props.mode === 'light' ? 'dark' : 'light'}`} aria-current="page" to="/Home">Home</Link>
              </li>
              <li className="nav-item">
                <Link className={`nav-link active  text-${props.mode === 'light' ? 'dark' : 'light'}`} aria-current="page" to="/About">About</Link>
              </li>
              <li className="nav-item">
                <Link className={`nav-link active  text-${props.mode === 'light' ? 'dark' : 'light'}`} aria-current="page" to="/Services">Services</Link>
              </li>
              <li className="nav-item">
                <Link className={`nav-link active  text-${props.mode === 'light' ? 'dark' : 'light'}`} aria-current="page" to="/Contact">Contact</Link>
              </li>
            </ul>
        <div className="mx-md-4 d-flex" onClick={props.togglemode}>
        <i id='modeBtn' className="fa-solid fa-cloud-sun"></i>
          </div>
        </div>
        </div>
      </nav>
    </>
  )
}
