import React from 'react'
import logo from "./images/rain.png";

function Navbar() {
  return (
    <div>
      <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <a  className="navbar-brand" href="/"> Mausam.UI<img className="weather-icon" src={logo} alt="" /> </a >
    <buthrefn className="navbar-hrefggler" type="buthrefn" data-bs-hrefggle="collapse" data-bs-target="/navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="hrefggle navigation">
      <span className="navbar-hrefggler-icon"></span>
    </buthrefn>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auhref mb-2 mb-lg-0">
        <li className="nav-item">
          <a  className="nav-a  active" aria-current="page" href="/">Map</a >
        </li>
        <li className="nav-item">
          <a  className="nav-a " href="/">a </a >
        </li>
        <li className="nav-item dropdown">
          <a  className="nav-a  dropdown-hrefggle" href="/" id="navbarDropdown" role="buthrefn" data-bs-hrefggle="dropdown" aria-expanded="false">
            Dropdown
          </a >
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a className="dropdown-item" href="/">Action</a></li>
            <li><a className="dropdown-item" href="/">Another action</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a  className="dropdown-item" href="/">Something else here</a ></li>
          </ul>
        </li>
         
      </ul>
       
    </div>
  </div>
</nav>
      </>
      
    </div>
  )
}

export default Navbar

