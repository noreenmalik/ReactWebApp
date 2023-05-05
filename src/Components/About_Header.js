import React from 'react';
import './Home_Header.css';
import './About_Header.css';
import './Responsive.css';
import Navbar from './Navbar';

const About_Header = () => {

    // window.onscroll = function () {
    //     let nav = document.querySelector(".navbar");
    
    //     if (document.documentElement.scrollTop > 20) {
    
    //       nav.classList.add("header-scrolled");
    //     } else {
    //       nav.classList.remove("header-scrolled");
    
    //     }
    //   }
  
    
      return (
        <>
    
          <div className="about-header_wrapper">
           
            <Navbar/>
    
            <div className="container pb-md-3 pt-5 mt-5">
              <div className="row d-flex justify-content-center align-items-center text-center">
             <div className="col">
               <h1 className='heading-4 pt-5 mt-5'>About LegalVision</h1>
               </div>
              </div>
            </div>
          </div>
    
    
        </>
      );
  
}

export default About_Header
