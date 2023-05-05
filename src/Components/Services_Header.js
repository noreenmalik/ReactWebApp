import React from 'react'
import logo from './logo-lv__header.ico';
import './Home_Header.css';
import './Services_Header.css';
import './Responsive.css';
import Navbar from './Navbar';

const Services_Header = () => {
    
      return (
        <>
    
          <div className="services-header_wrapper">
           <Navbar/>
    
            <div className="container pb-md-3 pt-5 mt-5">
              <div className="row d-flex justify-content-center align-items-center text-center">
             <div className="col">
               <h1 className='heading-4 pt-md-5 pt-sm-4 mt-5'>Services</h1>
               </div>
              </div>
            </div>
          </div>
    
    
        </>
 );
}

export default Services_Header
