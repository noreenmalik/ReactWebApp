import React from 'react'
import flogo from './logo-lv__footer.ico';
import './Footer.css'

const Footer = () => {
  return (
    <>
    <div className="footer_wrapper pt-2">
    <div className='conatiner justify-content-center align-items-center my-5 pt-4 text-center' >
    <a href="/"><img className='f-logo' src={flogo} /></a>
    </div>
    <div className="conatiner text-center d-flex justify-content-center flex-wrap">
      
       <h3 className='pe-4'> <a href="/about">ABOUT</a></h3>
       <h3 className='pe-4'><a href="/services">SERVICES</a></h3>
       <h3 className='pe-4'><a href="/ourteam">OUR TEAM</a></h3>
       <h3 className='pe-4'><a href="/contact">CONTACT</a></h3>
    
    </div>
   
    <div className="container justify-content-center mt-3 mb-5 text-center">
        <a href=""><i class="fab fa-instagram me-2 text-white"></i></a>
        <a href=""> <i class="fab fa-twitter me-2 text-white"></i></a>
        <a href=""> <i class="fab fa-facebook-f me-2 text-white"></i></a>
        <a href=""> <i class="fab fa-linkedin-in me-2 text-white"></i></a>
        <a href=""> <i class="fab fa-youtube me-2 text-white"></i></a>
   
    </div>
    <div className="container-fluid  text-center L_Footer pt-5 pb-4">
        <h4>COPYRIGHT 2022 LEGALVISION PTY LTD</h4>
       </div>
    </div>
    </>
  );
}

export default Footer
