import React from 'react'
import logo from './logo-lv__header.ico';
import './Home_Header.css';
import './Service01_Header.css';
import './Responsive.css';
import SIcon from './Sub-Services/6-icon-booklet-with-globe-on-cover.svg';
import './Service01.css'
import Home_Sec05 from './Home_Sec05'
import Home_Sec06 from './Home_Sec06';
import Navbar from './Navbar';


const Service06 = () => {



  return (
 
      <>
           {/* Header  */}

           <div className="service06-header_wrapper">
          <Navbar/>

        <div className="container pb-md-3 pt-5 mt-5">
          <div className="row d-flex justify-content-center align-items-center text-center">
            <div className="col mt-md-2 pt-md-2">
              <img src={SIcon} className='pt-md-5 mt-md-5 pt-sm-3 mt-sm-3'/>
              <h1 className='heading-4 headerfont pb-0 mb-0'>Corporate Immigration</h1>
                <ol className="breadcrumb d-flex justify-content-center align-items-center">
                  <li className="breadcrumb-item"><a href="/">Home</a></li>
                  <li class="breadcrumb-item"><a href="/services">Services</a></li>
                 < li class="breadcrumb-item active"><a href="">Corporate Immigration</a></li>
                </ol>
                </div>
            </div>

          </div>
        </div>

         {/* Main-Content  */}
  
        <div className="container d-flex justify-content-center py-5" >
          <div className="row justify-content-center">
  
            <div className='service-Sec2_wapper col-lg-8 col-md-10 col-sm-12 '>
              <p>LegalVision’s experienced immigration lawyers can assist with a broad range of immigration matters, including visa applications, waivers, character submissions, appeals to refusals and cancellations, and planning strategic immigration visa pathways.</p>
              <p>Whether you are an Australian business or an individual, it is important to obtain legal advice from a registered migration agent or immigration lawyer to ensure you have the best chance of success. We provide immigration advice to both applicants looking to emigrate to Australia, as well as Australian businesses looking to attract overseas talent and investors. Our team can also assist with reviewing corporate immigration policies and compliance audits to ensure companies meet sponsorship obligations.</p>
              <p>Our immigration team can assist with:</p>
              <h4>Corporate Migration</h4>
              <ul>
                <li>corporate migration visa strategy, planning, and international mobility needs;</li>
                <li>standard business sponsorship (SBS) and accreditation;</li>
                <li>sponsorship compliance training;</li>
                <li>temporary activity sponsorship;</li>
                <li>company specific and industry labour agreements;</li>
                <li>temporary skilled shortage visas (subclass 482);</li>
                <li>skilled employer sponsored regional (provisional) visa (subclass 494);</li>
                <li>training plans and training visas (subclass 407);</li>
                <li>employer nomination scheme visas (subclass 186 &187); and</li>
                <li>preparing submissions to NOITTA.</li>
              </ul>
              <h4>Personal Migration</h4>
              <ul>
                <li>strategic immigration planning for visa pathways;</li>
                <li>business innovation and investor stream visas (subclass 188 & 888);</li>
                <li>global talent EOI and visas (subclass 858);</li>
                <li>general skilled migration EOI and visas (subclass 189, 190 & 491);</li>
                <li>skills assessment applications with VETASSESS, TRA and ACS;</li>
                <li>LGBTIQ visa applications, particularly with regards to adoption/surrogacy;</li>
                <li>family migration including prospective marriage, partner, parent and child visas;</li>
                <li>health waiver submissions for PIC4007;</li>
                <li>applicants that have character concerns and meeting the character test;</li>
                <li>preparing submissions to address PIC 4020;</li>
                <li>preparing submission to address NOICC;</li>
                <li>responding to natural justice letters;</li>
                <li>appeals (in the AAT and judicial review) in relation to visa refusals and cancellation; and</li>
                <li>Australian citizenship.</li>
                
              </ul>
  
              <p>If you are an individual seeking personal immigration advice, the first step is to schedule an initial paid consultation. Our immigration lawyers will then be able to assess your current situation and goals, to help you determine what type of visa you need and your eligibility. So, call us today on 1800 532 904 or fill in the enquiry form on this page. </p>
  
            
            </div>
          </div>
        </div>

         {/* Section 03  */}

        <div className="container-fluid service-Sec3_wrapper d-flex justify-content-center flex-column pt-5 pb-4">
          <div className="row justify-content-center ">
            <h2 className='header2font text-white text-center'>5 THINGS YOU NEED TO KNOW ABOUT BANKING, FINANCE AND FINTECH</h2>
            <div className="col-lg-8 d-flex">
              <div className="col-lg-1 col-md-2 no-list text-center mt-3 d-none d-xl-block"><ol>
                <li className='list mt-xl-2 my-lg-5 '>1</li>
                <li className='list mt-xl-5 my-lg-5'>2</li>
                <li className='list mt-xl-5 my-lg-5'>3</li>
                <li className='list mt-xl-5 my-lg-5'>4</li>
                <li className='list mt-xl-4 my-lg-5'>5</li>
  
              </ol></div>
              <div className="col-lg-11 col-md-11 col-sm-10">
                <ol className='second-list'>
  
                  <li> Businesses lend and borrow money regularly. Business loans can be simple or complex. The interests of the borrower and the lender are very different, and it’s important that the loan documentation, and any security documents, are drafted in a way which works for both parties.</li>
                  <li> The most important document in a loan transaction is the loan agreement (or facility agreement). A loan agreement sets out the obligations of both the lender and the borrower. The most important clauses in a loan agreement relate to the amount borrowed, the repayment schedule, the interest rate and the type of security to be granted.</li>
                  <li>There is a big distinction between a secured loan agreement and an unsecured loan agreement. Securing a loan means taking security over some or all of the assets of the borrower. If the borrower does not make the required repayments under the loan agreement then the lender can take possession of the assets in order to repay the debt.</li>
                  <li>The lender will generally try and ensure that the loan is secured and uncommitted (meaning the lender isn’t required to lend the money). The borrower will seek to ensure that the loan is unsecured, if at all possible.</li>
                  <li>The type of security granted will depend on the loan. A general security agreement is a common form of security, which grants security over all of a company’s assets. If the loan is specific to a certain piece of equipment, a charge might be more appropriate. In Australia, security can be “perfected” via registration through the Personal Property Securities Register (PPSR).</li>
                </ol>
              </div>
            </div>
          </div>
  
        </div>

  {/* section 03 ends  */}

        <Home_Sec05/>
        <Home_Sec06/>
  
      </>
  )
}

export default Service06
