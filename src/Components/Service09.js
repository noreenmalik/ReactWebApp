import React from 'react'
import logo from './logo-lv__header.ico';
import './Home_Header.css';
import './Service01_Header.css';
import './Responsive.css';
import SIcon from './Sub-Services/9-icon-computer-with-person-outline.svg';
import './Service01.css'
import Home_Sec05 from './Home_Sec05'
import Home_Sec06 from './Home_Sec06';
import Navbar from './Navbar';


const Service09 = () => {
  return (
 
      <>
           {/* Header  */}

           <div className="service09-header_wrapper">
          <Navbar/>

        <div className="container pb-md-3 pt-5 mt-5">
          <div className="row d-flex justify-content-center align-items-center text-center">
            <div className="col mt-md-2 pt-md-2">
              <img src={SIcon} className='pt-md-5 mt-md-5 pt-sm-3 mt-sm-3'/>
              <h1 className='heading-4 headerfont pb-0 mb-0'>E-Commerce</h1>
                <ol className="breadcrumb d-flex justify-content-center align-items-center">
                  <li className="breadcrumb-item"><a href="/">Home</a></li>
                  <li class="breadcrumb-item"><a href="/services">Services</a></li>
                 < li class="breadcrumb-item active"><a href="">E-Commerce</a></li>
                </ol>
                </div>
            </div>

          </div>
        </div>

         {/* Main-Content  */}
  
        <div className="container d-flex justify-content-center py-5" >
          <div className="row justify-content-center">
  
            <div className='service-Sec2_wapper col-lg-8 col-md-10 col-sm-12 '>
              <p>An increasing number of Australians are turning their hobbies and side-projects into online businesses. Would-be entrepreneurs should familiarise themselves with their legal obligations when selling goods online.</p>
              <p>Our online business lawyers can help you set up your ecommerce store, by:</p>
              <ul>
                <li>drafting your sales terms and conditions;</li>
                <li>advising on business structuring;</li>
                <li>protecting your intellectual property, including registering trade marks;</li>
                <li>advising on privacy obligations;</li>
                <li>advising on compliance with the Australian Consumer Law (including consumer guarantees);</li>
                <li>drafting contracts to engage third parties (e.g. developers, distributors and service providers);</li>
                <li>recovering any outstanding payments; and</li>
                <li>resolving disputes.</li>
              </ul>
  
              <p>Our team of business lawyers specialise in consumer law, privacy law, contracts and online business law. We have worked with thousands of clients in the B2B and B2C space, as well as wholesalers and marketplace operators. Our team brings a unique global perspective having practised across the US, Europe and Asia. This extensive experience best position us to help clients looking to tap into international markets.</p>
  
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

export default Service09