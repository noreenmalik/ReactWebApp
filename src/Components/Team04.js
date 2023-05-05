import React from 'react'
import logo from './logo-lv__header.ico';
import './Home_Header.css';
import './Service01_Header.css';
import './Responsive.css';
import './Service01.css'
import Navbar from './Navbar';



const Team04 = () => {

  return (

    <>
      
      <div className="Team01-header_wrapper">
        <Navbar/>

        <div className="container pb-md-3 pt-5 mt-5">
          <div className="row d-flex justify-content-center align-items-center text-center">
            <div className="col mt-md-3 pt-md-3">
              <h1 className='heading-4 headerfont mt-5 pt-sm-5 pb-0 mb-0'>Meet James True</h1>
              <ol className="breadcrumb d-flex justify-content-center align-items-center">
                <li className="breadcrumb-item"><a href="/">Home</a></li>
                <li class="breadcrumb-item"><a href="/ourteam">Team</a></li>
                < li class="breadcrumb-item active"><a href="">James True</a></li>
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
              <img className="teamimage " src="https://img.legalvision.com.au/wp-content/uploads/2019/03/25122808/James_True-e1554850754603.jpg" alt="James_True" />
              <h3 className='justify-content-center text-center py-4 heading_1'>Practice Group Leader</h3>
            </div>
            <div>
              <p>James is a Practice Group Leader in LegalVision’s Employment team. He advises across all areas of employment, including employment and independent contractor agreements, termination of employment (including redundancy and unlawful termination), employment disputes, investigations, modern awards, work health safety obligations and notifiable incidents. Prior to joining LegalVision, James spent almost 10 years working in private practice across employment and work health safety.</p>
              <p>James has experience dealing with businesses of all shapes and sizes across a broad range of industries. He assists those businesses by providing commercially focused advice, which makes Australia’s rather complex industrial laws (almost) understandable.</p>
              <p>James’ secondary expertise is in data and privacy, where he routinely advises businesses in relation to data handling practices. This includes the development of privacy policies and data protection policies, mandatory breach notification, direct marketing as well as the many obligations under the GDPR.</p>
              <p>In his spare time, James is usually at the dog park teaching his Welsh Terrier to fetch (unsuccessfully).</p>
              <br />
              <p><strong>Qualifications: </strong>Bachelor of Laws, Graduate Diploma of Legal Practice, Macquarie University.</p>
            </div>
          </div>
        </div>
      </div>








    </>
  )
}

export default Team04;        
