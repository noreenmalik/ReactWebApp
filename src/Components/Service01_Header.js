import React from 'react'
import logo from './logo-lv__header.ico';
import './Home_Header.css';
import './Service01_Header.css';
import './Responsive.css';
import SIcon from './Sub-Services/1-icon-padlock-with-dollar-symbol.svg';
import Navbar from './Navbar';


const Service01_Header = () => {
 
  return (
    <>

      <div className="service01-header_wrapper">
       <Navbar/>

        <div className="container pb-md-3 pt-5 mt-5">
          <div className="row d-flex justify-content-center align-items-center text-center">
            <div className="col mt-md-2 pt-md-2">
              <img src={SIcon} className='pt-md-5 mt-md-5 pt-sm-3 mt-sm-3'/>
              <h1 className='heading-4 headerfont pb-0 mb-0'>Banking, Finance and FinTech</h1>
                <ol className="breadcrumb d-flex justify-content-center align-items-center">
                  <li className="breadcrumb-item"><a href="/">Home</a></li>
                  <li class="breadcrumb-item"><a href="/services">Services</a></li>
                 < li class="breadcrumb-item active"><a href="">Banking, Finance and FinTech</a></li>
                </ol>
                </div>
            </div>

          </div>
        </div>
     


    </>
  );
}

export default Service01_Header
