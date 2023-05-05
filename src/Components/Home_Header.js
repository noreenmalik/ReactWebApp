import React from 'react'
import logo from './logo-lv__header.ico';
import './Home_Header.css';
import './Responsive.css';
import Navbar from './Navbar';


const Home_Header = () => {


  // window.onscroll = function () {
  //   let nav = document.querySelector(".navbar");

  //   if (document.documentElement.scrollTop > 20) {

  //     nav.classList.add("header-scrolled");
  //   } else {
  //     nav.classList.remove("header-scrolled");

  //   }
  // }


  return (
    <>

      <div className="home-header_wrapper">
      {/* <nav className="navbar navbar-expand-xxl navbar-light py-2 fixed-top" >
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
            </nav> */}
            <Navbar/>

        <div className="container pt-5 mt-5">
          <div className="row d-flex justify-content-center align-items-center pt-5 py-4 text-center">
            <div className="col-lg-7 col-md-11 col-sm-12 justify-content-center align-items-center pt-5 ">

              <h1 className='mt-lg-5 pt-lg-5 mt-md-4 pt-md-4 mt-sm-4 pt-sm-4 heading-1 '>LegalVision is a commercial law firm with a commitment to innovation</h1>

              <h6 className='para-1'>We provide Australian and New Zealand businesses with affordable, ongoing legal support through our membership.</h6>
              <h4 className='heading-4'>Law Firm of the Year</h4>
              <h3 className='heading-3'>2022 Australasian Law Awards</h3>
            </div>
            <div className="row  justify-content-center align-items-center mb-lg-5 mt-lg-2 mb-sm-3 mt-sm-2">
              <div className="col-lg-4">

                <button className='main-btn primary-btn'><a className='text-white' href="/contact"> Contact Us</a></button>
              </div>
            </div>
          </div>
        </div>
      </div>


    </>
  );
}

export default Home_Header;
