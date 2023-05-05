import React from 'react'
import logo from './logo-lv__header.ico';
import './Home_Header.css';
import './Service01_Header.css';
import './Responsive.css';
import './Service01.css'
import Navbar from './Navbar';



const Team05 = () => {

  return (
 
      <>

           <div className="Team01-header_wrapper">
           <Navbar/>

        <div className="container pb-md-3 pt-5 mt-5">
          <div className="row d-flex justify-content-center align-items-center text-center">
            <div className="col mt-md-3 pt-md-3">
              <h1 className='heading-4 headerfont mt-5 pt-sm-5 pb-0 mb-0'>Meet Kirstin McKnight</h1>
                <ol className="breadcrumb d-flex justify-content-center align-items-center">
                  <li className="breadcrumb-item"><a href="/">Home</a></li>
                  <li class="breadcrumb-item"><a href="/ourteam">Team</a></li>
                 < li class="breadcrumb-item active"><a href="">Kirstin McKnight</a></li>
                </ol>
                </div>
            </div>

          </div>
        </div>

         {/* Main-Content  */}


         <div className="container d-flex justify-content-center py-5" >
        <div className="row justify-content-center">
          <div className='service-Sec2_wapper col-lg-8 col-md-10 col-sm-12 '>

            <div className='d-flex flex-column align-items-center section '>
              <img className="teamimage " src="https://img.legalvision.com.au/wp-content/uploads/2017/06/08153027/kmcknight.png" alt="Kirstin_McKnight" />
              <h3 className='justify-content-center text-center py-4 heading_1'>Practice Group Leader</h3>
            </div>
            <div>
              <p>Kirstin is a Practice Group Leader in LegalVision’s IT law team. She drafts and negotiates all types of IT contracts both for suppliers and procurers including agreements for software as a service and cloud based products, software development, software licensing, IT professional services, reseller arrangements, managed services, hardware supply, IT and white label solutions.</p>
              <p>She also helps online businesses preparing marketplace terms and conditions, mobile application terms and conditions, website terms of use and sale of goods and services online. Kirstin has deep industry expertise in privacy matters including compliance with the Australian Privacy Principles and the Spam Act as well as drafting privacy policies, privacy compliance manuals and data breach notification plans.</p>
              <p>Her experience working both as a lawyer in a top international law firm and as a corporate legal counsel within a French listed company has given her an excellent understanding of the commercial issues businesses face and enables her to provide pragmatic and industry-specific advice for her clients.</p>
              <br />
              <br />
              <p><strong>Qualifications: </strong>Bachelor of Laws, Bachelor of Arts, University of Technology Sydney.</p>
              <p><strong>Professional Memberships: </strong>Law Society of New South Wales, New Zealand Law Society, Law Society of England and Wales</p>
            </div>
          </div>
        </div>
      </div>










         </>
  )
}

export default Team05;        