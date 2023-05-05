import React from 'react'
import Service01_Header from './Service01_Header';
import './Service01.css'
import Home_Sec05 from './Home_Sec05'
import Home_Sec06 from './Home_Sec06';
// import './Home_Header.css';
// import './Service01_Header.css';
// import './Responsive.css';




const Service01 = () => {
  
  return (
    <>
      <Service01_Header />
      

      <div className="container d-flex justify-content-center py-5" >
        <div className="row justify-content-center">

          <div className='service-Sec2_wapper col-lg-8 col-md-10 col-sm-12 '>
            <p>Business owners can obtain debt finance through secured and unsecured loans, including revenue loans and convertible notes. Our banking and finance team have an established reputation in advising SMEs, startups and corporate clients both nationally and globally with their financing needs.</p>
            <p>Our experienced lawyers can assist with:</p>
            <ul>
              <li>drafting, reviewing and negotiating loan agreements, security documents and guarantees;</li>
              <li>advising startups and investors in relation to revenue loans, convertible notes and term sheets;</li>
              <li>advising and representing parties in disputes that may arise from financing arrangements, including payment defaults.</li>
            </ul>

            <p>Our team draw on their in-depth experience to provide clients with timely, practical and high-quality advice. In the startup scene, we have worked with founders to successfully secure finance to expand their operations nationally and globally, as well as drafting the supporting documents for convertible notes, revenue loans and SAFEs (simple agreement for future equity).

              LegalVision also has an experienced team of specialist FinTech (financial technology) and blockchain/cryptocurrency lawyers who can advise on all aspects of how the financial regulatory framework affects tech-driven businesses. We specialise in:</p>

            <ul>
              <li>advising on obtaining an Australian Financial Services Licence (AFSL) and ongoing compliance, as well as seeking exemptions or relief;</li>
              <li>advising on compliance with the Anti-Money Laundering and Counter-Terrorism Financing Act;</li>
              <li>advising on blockchain, crpyto, NFT (non-fungible tokens), DAOs (decentralised autonomous organisations), IDOs (initial dex offerings), ICOs (initial coin offerings) and ITOs (initial token offerings);</li>
              <li>advising on the Consumer Data Right (CDR), open banking and financial compliance.</li>
            </ul>
          </div>
        </div>
      </div>
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
      <Home_Sec05/>
      <Home_Sec06/>

    </>
  )
}

export default Service01

