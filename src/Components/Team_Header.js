import React from 'react'
import logo from './logo-lv__header.ico';
import './Home_Header.css';
import './Team_Header.css';
import './Responsive.css';
import iconteam from './icon-team.svg';
import Navbar from './Navbar';

const Team_Header = () => {
  
      return (
        <>
    
          <div className="team-header_wrapper">
           <Navbar/>
    
            <div className="container  pb-md-3 pt-5 mt-5">
              <div className="row d-flex justify-content-center align-items-center text-center">
             <div className="col mt-3 pt-3 ">
                <img src={iconteam} alt="" className='pt-md-5 mt-md-5' />
               <h1 className='heading-4 '>Legal</h1>
               </div>
              </div>
            </div>
          </div>
    
    
        </>
 );
}

export default Team_Header
