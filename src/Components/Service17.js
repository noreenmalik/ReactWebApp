import React from 'react'
import logo from './logo-lv__header.ico';
import './Home_Header.css';
import './Service01_Header.css';
import './Responsive.css';
import SIcon from './Sub-Services/17-icon-flag-outline.svg';
import './Service01.css'
import Home_Sec05 from './Home_Sec05'
import Home_Sec06 from './Home_Sec06';
import Navbar from './Navbar';


const Service17 = () => {

  return (
 
      <>
           {/* Header  */}

           <div className="service17-header_wrapper">
           <Navbar/>
          
        <div className="container pb-md-3 pt-5 mt-5">
          <div className="row d-flex justify-content-center align-items-center text-center">
            <div className="col mt-md-2 pt-md-2">
              <img src={SIcon} className='pt-md-5 mt-md-5 pt-sm-3 mt-sm-3'/>
              <h1 className='heading-4 headerfont pb-0 mb-0'>Regulatory and Compliance</h1>
                <ol className="breadcrumb d-flex justify-content-center align-items-center">
                  <li className="breadcrumb-item"><a href="/">Home</a></li>
                  <li class="breadcrumb-item"><a href="/services">Services</a></li>
                 < li class="breadcrumb-item active"><a href="">Regulatory and Compliance</a></li>
                </ol>
                </div>
            </div>

          </div>
        </div>

         {/* Main-Content  */}
  
        <div className="container d-flex justify-content-center py-5" >
          <div className="row justify-content-center">
  
            <div className='service-Sec2_wapper col-lg-8 col-md-10 col-sm-12 '>
              <p>Regulation is a broad term that refers to the body of rules through which government bodies attempt to monitor and supervise economic activity. Regulation applies to almost every sector of the economy, from professional services to primary industries.</p>
              <p>As a business grows, it must navigate a wide spectrum of rules and regulations that can impact significantly on its commercial activities. The operational environment for each business is different, so it is essential to understand and adapt to the rules that apply in your context. The regulatory landscape for your business could affect a range of core operations, including how you interact with competitors, how you package and promote your products and whether you need any licences to run your business.</p>
  
              <p>Complying with regulations is an aspect of risk management. But understanding how government rules work in practice can also enable you to make more effective business decisions — from exploring new markets to making use of government grants and incentives.</p>
  
          <p>Staying on top of regulatory obligations is a considerable burden for any business owner or senior manager. It is therefore a good idea to engage the support of a specialist lawyer, who can provide pragmatic guidance about the regulatory context for your business. LegalVision’s Regulatory and Compliance team will help your business stay compliant, while also achieving its commercial objectives.</p>
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

export default Service17
