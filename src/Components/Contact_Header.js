import React from 'react'
import logo from './logo-lv__header.ico';
import './Home_Header.css';
import './Contact_Header.css';
import './Responsive.css';
import iconphone from './icon-desk-phone.png';
import Navbar from './Navbar';

const Contact_Header = () => {
   
    
      return (
        <>
          <div className="contact-header_wrapper">
          <Navbar/>
    
            <div className="container pb-md-3 pt-5 mt-5">
              <div className="row d-flex justify-content-center align-items-center text-center">
             <div className="col mt-3 pt-3">
                <img src={iconphone} alt="" className='pt-md-5 mt-md-5' />
               <h1 className='heading-4 '>Contact Us</h1>
               </div>
              </div>
            </div>
          </div>
    
    
        </>
      );
}

export default Contact_Header
