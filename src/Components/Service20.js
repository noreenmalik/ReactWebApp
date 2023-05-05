import React from 'react'
import logo from './logo-lv__header.ico';
import './Home_Header.css';
import './Service01_Header.css';
import './Responsive.css';
import SIcon from './Sub-Services/20-icon-chart-with-magnifying-glass.svg';
import './Service01.css'
import Home_Sec05 from './Home_Sec05'
import Home_Sec06 from './Home_Sec06';
import Navbar from './Navbar';


const Service20 = () => {

  return (
 
      <>
           {/* Header  */}

           <div className="service20-header_wrapper">
           <Navbar/>

        <div className="container pb-md-3 pt-5 mt-5">
          <div className="row d-flex justify-content-center align-items-center text-center">
            <div className="col mt-md-2 pt-md-2">
              <img src={SIcon} className='pt-md-5 mt-md-5 pt-sm-3 mt-sm-3'/>
              <h1 className='heading-4 headerfont pb-0 mb-0'>Tax</h1>
                <ol className="breadcrumb d-flex justify-content-center align-items-center">
                  <li className="breadcrumb-item"><a href="/">Home</a></li>
                  <li class="breadcrumb-item"><a href="/services">Services</a></li>
                 < li class="breadcrumb-item active"><a href="">Tax</a></li>
                </ol>
                </div>
            </div>

          </div>
        </div>

         {/* Main-Content  */}
  
        <div className="container d-flex justify-content-center py-5" >
          <div className="row justify-content-center">
  
            <div className='service-Sec2_wapper col-lg-8 col-md-10 col-sm-12 '>
              <p>Every business must deal with Australia’s complex tax system. At LegalVision, we have assisted numerous businesses and startups with critical tax issues.</p>
              <p>Our tax law specialists provide advice on:</p>
              <ul>
                <li>initial tax structuring;</li>
                <li>restructuring (including capital gains tax (CGT) rollovers or flip-ups);</li>
                <li>business exits (including CGT discounts and small business CGT concessions);</li>
                <li>overseas expansion;</li>
                <li>foreign companies expanding into Australia;</li>
                <li>employee share plans;</li>
                <li>early stage innovation company tax advice;</li>
                <li>state taxes, including payroll, duties and land tax;</li>
                <li>ATO objections and reviews;</li>
                <li>income tax, GST and duty issues for property developers;</li>
                <li>estate planning; and</li>
                <li>investment structuring with self-managed superannuation funds.</li>
              </ul>
  
              <p>Whether you operate in the startup, SME, investment or property development sector, our team has the experience and the expertise to help you navigate your way through the Australian tax system in a cost-effective manner.</p>
  
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

export default Service20
