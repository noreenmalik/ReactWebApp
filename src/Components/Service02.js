import React from 'react'
import logo from './logo-lv__header.ico';
import './Home_Header.css';
import './Service01_Header.css';
import './Responsive.css';
import SIcon from './Sub-Services/2-icon-column-building-outline.svg';
import './Service01.css'
import Home_Sec05 from './Home_Sec05'
import Home_Sec06 from './Home_Sec06';
import Navbar from './Navbar';


const Service02 = () => {


  return (
   
        <>
       

         <div className="service02-header_wrapper">
        <Navbar/>

        <div className="container pb-md-3 pt-5 mt-5">
          <div className="row d-flex justify-content-center align-items-center text-center">
            <div className="col mt-md-2 pt-md-2">
              <img src={SIcon} className='pt-md-5 mt-md-5 pt-sm-3 mt-sm-3'/>
              <h1 className='heading-4 headerfont pb-0 mb-0'>Business Sale and Purchase</h1>
                <ol className="breadcrumb d-flex justify-content-center align-items-center">
                  <li className="breadcrumb-item"><a href="/">Home</a></li>
                  <li class="breadcrumb-item"><a href="/services">Services</a></li>
                 < li class="breadcrumb-item active"><a href="">Business Sale and Purchase</a></li>
                </ol>
                </div>
            </div>

          </div>
        </div>

         {/* Main-Content  */}
    
          <div className="container d-flex justify-content-center py-5" >
            <div className="row justify-content-center">
    
              <div className='service-Sec2_wapper col-lg-8 col-md-10 col-sm-12 '>
                <p>Selling a business involves several important steps to ensure a smooth handover to a new owner — including due diligence, contract drafting, contract review, negotiation, exchange and settlement. LegalVision's sale of business team assists clients at all stages of their journey.</p>
                <p>A sale of business transaction can encompass a wide range of assets. Common examples include intellectual property rights (such as trade marks), real property interests (such as a commercial lease), licences and contracts with suppliers.</p>
                <p>Our team draw on their in-depth experience to provide clients with timely, practical and high-quality advice. In the startup scene, we have worked with founders to successfully secure finance to expand their operations nationally and globally, as well as drafting the supporting documents for convertible notes, revenue loans and SAFEs (simple agreement for future equity). LegalVision also has an experienced team of specialist FinTech (financial technology) and blockchain/cryptocurrency lawyers who can advise on all aspects of how the financial regulatory framework affects tech-driven businesses. We specialise in:
                </p>
                <p>Getting your business sale over the line can be complicated. After you've agreed on the terms of your deal with a buyer, you still need to go through the formalities of signing contracts (exchange) and finalising the transaction (settlement). LegalVision's specialist lawyers can help you navigate these final steps of your business sale.</p>
    
                <p>Download  <a href="#"> LegalVision's How to Sell Your Business Guide </a> - essential reading for any seller looking to understand the moving parts that will impact a successful sale.</p>

              </div>
            </div>
          </div>

          {/* Section 03  */}

          <div className="container-fluid service-Sec3_wrapper d-flex justify-content-center flex-column pt-5 pb-4">
            <div className="row justify-content-center ">
              <h2 className='header2font text-white text-center'>5 THINGS YOU NEED TO KNOW ABOUT BANKING, FINANCE AND FINTECH</h2>
              <div className="col-lg-8 d-flex">
                <div className="col-lg-1 col-md-2 no-list text-center mt-3 d-none d-xl-block"><ol>
                  <li className='list mt-xl-2 my-lg-5 text-white'>1</li>
                  <li className='list mt-xl-5 my-lg-5 text-white'>2</li>
                  <li className='list mt-xl-5 my-lg-5 text-white'>3</li>
                  <li className='list mt-xl-5 my-lg-5 text-white'>4</li>
                  <li className='list mt-xl-4 my-lg-5 text-white'>5</li>
    
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

export default Service02
