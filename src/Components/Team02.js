import React from 'react'
import logo from './logo-lv__header.ico';
import './Home_Header.css';
import './Service01_Header.css';
import './Responsive.css';
import './Service01.css'
import Navbar from './Navbar';



const Team02 = () => {

  return (

    <>

      <div className="Team01-header_wrapper">
       <Navbar/>

        <div className="container pb-md-3 pt-5 mt-5">
          <div className="row d-flex justify-content-center align-items-center text-center">
            <div className="col mt-md-3 pt-md-3">
              <h1 className='heading-4 headerfont mt-5 pt-sm-5 pb-0 mb-0'>Meet Jill McKnight</h1>
              <ol className="breadcrumb d-flex justify-content-center align-items-center">
                <li className="breadcrumb-item"><a href="/">Home</a></li>
                <li class="breadcrumb-item"><a href="/ourteam">Team</a></li>
                < li class="breadcrumb-item active"><a href="">Jill McKnight</a></li>
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
              <img className="teamimage " src="https://img.legalvision.com.au/wp-content/uploads/2014/12/13180608/Jill-McKnight-e1585802572462.jpg" alt="Jill_McKnight" />
              <h3 className='justify-content-center text-center py-4 heading_1'>Practice Group Leader</h3>
            </div>
              <div>
                <p>Jill is a Practice Group Leader with particular expertise in Corporate and Banking and Finance Law. She has over 20 years’ experience practising as a lawyer at top law firms in Europe, Asia and Australia. She is qualified in England and Wales, as well as Australia.</p>
                <p>Jill specialises in Corporate Law, advising startups and investors (including VCs) on raising capital via SAFEs, convertible notes, revenue loans, venture debt and straight equity.</p>
                <p>In addition to Corporate Law, Jill also specialises in Banking and Finance Law having previously worked at a number of global top-tier firms where she advised large corporates and other sophisticated clients on complex cross-border transactions.</p>
                <p>Jill uses her experience working on large, complex transactions to provide startups, SMEs and corporate clients with high-quality commercial legal advice.</p>
                <p>In her spare time, Jill enjoys yoga and spending time with her four little boys.</p>
                <br/>
                <br />
                <p><strong>Qualifications: </strong>Bachelor of Laws (Hons), University of Manchester, University of North Carolina at Chapel Hill.</p>
                <p><strong>Professional memberships:</strong> Law Society of New South Wales, Law Society of England and Wales, Law Society of New Zealand.</p>
              </div>
          </div>
        </div>
      </div>









    </>
  )
}

export default Team02;        
