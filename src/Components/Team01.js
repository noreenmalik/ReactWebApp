import React from 'react'
import logo from './logo-lv__header.ico';
import './Home_Header.css';
import './Service01_Header.css';
import './Responsive.css';
import './Service01.css'
import Navbar from './Navbar';



const Team01 = () => {

  return (

    <>
     

      <div className="Team01-header_wrapper">
       <Navbar/>

        <div className="container pb-md-3 pt-5 mt-5">
          <div className="row d-flex justify-content-center align-items-center text-center">
            <div className="col mt-md-3 pt-md-3">
              <h1 className='heading-4 headerfont mt-5 pt-sm-5 pb-0 mb-0'>Meet Emmanuel Giuffre</h1>
              <ol className="breadcrumb d-flex justify-content-center align-items-center">
                <li className="breadcrumb-item"><a href="/">Home</a></li>
                <li class="breadcrumb-item"><a href="/ourteam">Team</a></li>
                < li class="breadcrumb-item active"><a href="">Emmanuel Giuffre</a></li>
              </ol>
            </div>
          </div>
        </div>
      </div>
      {/* Main-Content  */}
      <div className="container d-flex justify-content-center py-5" >
        <div className="row justify-content-center">
          <div className='service-Sec2_wapper col-lg-8 col-md-10 col-sm-12 '>

            <div className='d-flex flex-column align-items-center '>
              <img  className = "teamimage "src="https://img.legalvision.com.au/wp-content/uploads/2020/02/21093512/Emmanuel_Giuffre-e1582238175551.jpg" alt="/Emmanuel_Giuffre"  />
              <h3 className='justify-content-center text-center py-4 heading_1'>General Manager Australia, Head of Legal</h3>
            </div>
            <div>
              <p>Manny is the General Manager for LegalVision Australia and Head of Legal. He manages and oversees the growth and performance of LegalVision’s team of lawyers, while maintaining our client-centric and quality-driven approach.</p>
              <p>Qualified in both Australia and New Zealand, Manny has over 14 years of legal experience, including at a national top-tier law firm and in-house. Manny’s expertise is in building and construction law, having worked with developers, contractors, operators, service providers and government clients on small, medium and large-scale building &amp; construction projects (both commercial and residential).</p>
              <p>Manny also has extensive experience in advising enterprise clients on a broad range of general commercial and IT contracts and projects, including SaaS Agreements, Supply Agreements, Master Service Agreements, Distribution Agreements (both domestic and international), Manufacturing Agreements, Referral Agreements, Collaboration Agreements, IP Licensing and Assignment Agreements.</p>
              <p>In his spare time, Manny enjoys chilling at the beach with a good book and spending quality time with family, friends and his rescue dogs – Scrappy &amp; Ringo.</p>
              <br />
              <p><strong>Qualifications:</strong> Bachelor of Laws (Hons), University of New South Wales.</p>
              <br />
            </div>

          </div>
        </div>
      </div>







    </>
  )
}

export default Team01;        