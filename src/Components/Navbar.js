import React from 'react'
import logo from './logo-lv__header.ico';
import './Home_Header.css';
import './Responsive.css';


const Navbar = () => {
  return (
    <>
    <nav className="navbar navbar-expand-xxl navbar-light py-2 fixed-top" >
              <div className="container-fluid">
                <a className="navbar-brand" href="/"><img className='logo me-xl-5 ms-xl-3' src={logo} /></a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                <span className="fa fa-bars "></span>
                </button>
            
                <div className="collapse navbar-collapse" id="navbarText">
                  <ul className="navbar-nav menu-navbar-nav px-xxl-4 ms-xxl-5 me-xxl-5 ms-xl-0 px-xl-0  me-xl-0 pt-1">
                    <li className="nav-item">
                      <a className="nav-link ms-2" aria-current="page" href="/">Home</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link ms-2 " href="/about">About Us</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link ms-2" href="/services">Services</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link ms-2" href="/ourteam">Our Team</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link ms-2" href="/contact">Contact Us</a>
                    </li>
                  </ul>
                  <span className="navbar-text ms-xxl-5 d-flex ps-xxl-5 ms-xl-1 ps-xl-1 ">
                    <div className="call d-xl-block d-lg-none ms-xl-2 ">
                      <i className="fas fa-search fa-lg mx-xxl-2 mx-xl-0" ></i>
                      <span className='ps-xxl-2' >Call:</span> <a href="tel:1300 544 755" className='telphon'>1300 544 755</a>
                    </div>
                    <div className="member-login ps-xxl-3 ms-xxl-2 pe-0 me-0">
                      <button type="button" className="main-btn primary-btn">Login</button>
                    </div>
                  </span>
                </div>
              </div>
            </nav>
</>
  )
}

export default Navbar
