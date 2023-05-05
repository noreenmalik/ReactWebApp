import React from 'react'
import About_Header from './About_Header';
import "./Aboutus.css"

const Aboutus = () => {
  return (
    <>
      <div>

        {/* <div className="container-fluid hero pt-5">
        <div className="conatiner py-5">

          <div className="row d-flex justify-content-center align-items-center pt-5 py-4 text-center">
            <div className="col-6 justify-content-center align-items-center pt-5">

              <h1 className='pt-5 mt-5'>About</h1>
            </div>
          </div>
        </div>
      </div> */}
        <About_Header />
      </div>

            {/* section_1 */}


      <div className="container d-flex justify-content-center py-5" >
        <div className="row justify-content-center">
          <div className='service-Sec2_wapper col-lg-8 col-md-10 col-sm-12 '>
            <div className='d-flex flex-column'>
              <h1 className=''>Our Mission</h1>
              <p>To power the success of every business by delivering legal support that is proactive, affordable and commercial. by delivering legal support that is proactive, affordable and commercial.</p>
            </div>
            <div className='d-flex flex-column'>
              <h1 className=''>Our Values</h1>
              <h4><b> Best Experiences</b></h4>
              <p>We’re strongest when we ensure the best experiences for our clients and our team.</p>
              <h4><b>Members First</b></h4>
              <p>We believe membership is the best way to serve our clients.</p>
              <h4><b>Prepared for Change</b></h4>
              <p>We’re always ready to try something new that could help us achieve our mission.</p>
            </div>
          </div>
        </div>
      </div>

             {/* section_2 */}


             
      <div className="container-fluid d-flex justify-content-center about_sec2">
        <div className='about_sec'>
          <div className='container main_1'>
            <div class="the-content">
              <p className='text'>LegalVision is a team of lawyers, technologists, marketing mavericks, strategists and operations gurus who are drawn together by a shared vision of changing the delivery of legal services in Australia and New Zealand.</p>
              <p className='text'><strong>LegalVision was born in 2012</strong> as an online legal documents business. The founding team brought together legal expertise, tech sensibilities and a passion for growth.</p>
              <p className='text'>Early adopters loved our user-friendly legal documents, but wanted more from their legal services provider. So we started helping clients find legal support through an online marketplace.</p>
              <p className='text'>Delivering consistently high-quality services for our clients has always been LegalVision’s top priority – so our next pivot was natural. In 2014, LegalVision established an incorporated legal practice, which enabled us to provide legal services directly to clients, rather than through independent suppliers.</p>
              <p className='text'>The latest step in our journey came in 2019, when we transitioned to a membership model. The majority of our clients are now members of our <a href="https://legalvision.com.au/membership/">LVConnect legal advice membership</a>, which unlocks unlimited consultations with our lawyers, free legal templates and members-only discounts.</p>
              <p className='text'>At each stage in our journey, we have grown and evolved by listening – and responding – to the needs of our clients, who range from SMEs to fast-growing startups and large corporates. It’s not in our nature to accept that the existing way of doing things is the best way. We are committed to constantly improving the delivery of legal services, so that we can keep offering our clients legal support that is useful and accessible.</p>
              <p className='text'><em><strong>LegalVision is at the forefront of the NewLaw movement and will continue to drive innovation in a rapidly-evolving legal industry.</strong></em></p>
              <p className='text'>Learn more about the <a href="https://legalvision.com.au/meet-our-team/">LegalVision team</a> and <a href="https://legalvision.com.au/awards/">our awards</a>.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Aboutus
