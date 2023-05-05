import React from 'react'
import logo from './logo-lv__header.ico';
import './Home_Header.css';
import './Service01_Header.css';
import './Responsive.css';
import './Service01.css'
import Navbar from './Navbar';



const Team03 = () => {

  return (

    <>
    
      <div className="Team01-header_wrapper">
        <Navbar/>

        <div className="container pb-md-3 pt-5 mt-5">
          <div className="row d-flex justify-content-center align-items-center text-center">
            <div className="col mt-md-3 pt-md-3">
              <h1 className='heading-4 headerfont mt-5 pt-sm-5 pb-0 mb-0'>Meet Emma Jervis</h1>
              <ol className="breadcrumb d-flex justify-content-center align-items-center">
                <li className="breadcrumb-item"><a href="/">Home</a></li>
                <li class="breadcrumb-item"><a href="/ourteam">Team</a></li>
                < li class="breadcrumb-item active"><a href="">Emma Jervis</a></li>
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
              <img className="teamimage " src="https://img.legalvision.com.au/wp-content/uploads/2021/03/09121007/Emma-Jervis-e1615252291684.jpg" alt="Emma_Jervis" />
              <h3 className='justify-content-center text-center py-4 heading_1'>Practice Group Leader</h3>
            </div>
                <div>
                  <p>Emma is a Practice Group Leader who heads LegalVision’s Franchising Team.</p>
                  <p>Emma has over 17 years’ legal experience, and has worked for a number of firms before joining LegalVision as one of the original lawyers shortly after its formation. Emma’s experience in franchising law is extensive and varied, including acting on a number of large franchise disputes in the Federal Court, and representing numerous franchisors and franchisees in setting up, managing and expanding their businesses. Emma’s extensive franchising experience and direct, concise advice provide a valuable resource to those operating in the franchising sphere. She enjoys building relationships with her franchise clients, and becoming an important part of their business operations.</p>
                  <p>In addition to franchising, Emma enjoys applying her commercial sensibilities and drafting skills to general commercial matters and contracts of all descriptions, and can also assist with litigation and employment matters.</p>
                  <p>In her time at LV, Emma has married, moved house three times, and had two beautiful little boys, which certainly keep her busy outside the office.</p>
                  <br />
                  <p><strong>Qualifications:</strong> Bachelor of Laws (Hons), Bachelor of Arts, University of Technology Sydney.</p>
                  <p><strong>Professional memberships:</strong> Law Society New South Wales.</p>
                </div>
          </div>
        </div>
      </div>









    </>
  )
}

export default Team03;        