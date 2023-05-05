import React from 'react'
import logo from './logo-lv__header.ico';
import './Home_Header.css';
import './Service01_Header.css';
import './Responsive.css';
import SIcon from './Sub-Services/16-icon-tall-building-outline.svg';
import './Service01.css'
import Home_Sec05 from './Home_Sec05'
import Home_Sec06 from './Home_Sec06';
import Navbar from './Navbar';


const Service16 = () => {

  return (

    <>
      {/* Header  */}

      <div className="service16-header_wrapper">
        <Navbar/>
        
        <div className="container pb-md-3 pt-5 mt-5">
          <div className="row d-flex justify-content-center align-items-center text-center">
            <div className="col mt-md-2 pt-md-2">
              <img src={SIcon} className='pt-md-5 mt-md-5 pt-sm-3 mt-sm-3' />
              <h1 className='heading-4 headerfont pb-0 mb-0'>Property and Leasing</h1>
              <ol className="breadcrumb d-flex justify-content-center align-items-center">
                <li className="breadcrumb-item"><a href="/">Home</a></li>
                <li class="breadcrumb-item"><a href="/services">Services</a></li>
                < li class="breadcrumb-item active"><a href="">Property and Leasing</a></li>
              </ol>
            </div>
          </div>

        </div>
      </div>

      {/* Main-Content  */}

      <div className="container d-flex justify-content-center py-5" >
        <div className="row justify-content-center">

          <div className='service-Sec2_wapper col-lg-8 col-md-10 col-sm-12 '>
            <p>Commercial and Retail leases are complex documents that must balance the rights of the landlord and tenant and provide for numerous eventualities during the term of the lease – such as if the premises are damaged or if the tenant defaults on the lease.</p>
            <p>Generally, the landlord provides the tenant with the lease, which contains terms relating to the rent, the term of the lease, permitted use of the premises, any bank guarantee or security deposit, maintenance requirements and make good and termination provisions.</p>
            <p>At LegalVision, we draft a broad range of lease documents including commercial leases, retail leases, licences, assignments of lease, variations of lease and subleases.</p>
            <p>In relation to retail leasing, we also advise on the preparation of disclosure statements and the landlord’s obligations under State Specific Retail Legislation</p>
            <p>LegalVision’s experienced commercial leasing lawyers have extensive knowledge of commercial, retail, industrial and rural leasing. We can draft and negotiate leases in all Australian jurisdictions, as well as:</p>
            <ul>
              <li>draft ancillary transactions including licence agreements, assignments, solar and technology leasing and lease surrender;</li>
              <li>assist tenants manage their leasing portfolio; and</li>
              <li>manage all commercial and retail leasing needs for a range of corporate organisation and government bodies.</li>
            </ul>

            <p>Our team is pragmatic and efficient and deliver quality advice to SMEs, franchisors, shopping centres and large corporates.</p>

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

      <Home_Sec05 />
      <Home_Sec06 />

    </>
  )
}

export default Service16
