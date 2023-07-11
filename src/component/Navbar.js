import React from 'react'
import logo from "./images/rain.png";

function Navbar() {
  return (
    <div>
      <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <link className="navbar-brand" to="#"> Mausam.UI<img className="weather-icon" src={logo} alt="" /> </link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <link className="nav-link active" aria-current="page" to="#">Map</link>
        </li>
        <li className="nav-item">
          <link className="nav-link" to="#">Link</link>
        </li>
        <li className="nav-item dropdown">
          <link className="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </link>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><link className="dropdown-item" to="#">Action</link></li>
            <li><link className="dropdown-item" to="#">Another action</link></li>
            <li><hr className="dropdown-divider"/></li>
            <li><link className="dropdown-item" to="#">Something else here</link></li>
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

