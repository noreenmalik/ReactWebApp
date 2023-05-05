import React from 'react'
import icontrust from './icon-trust.svg';
import iconprice from './icon-price-tag.svg';
import icontimeframe from './icon-time-span.svg';
import iconcrowed from './icon-crowd.svg';
import icontech from './icon-google-code.svg';
import icondoc from './icon-product-documents.svg';


const Home_Sec04 = () => {
  return (
    <div className='Home_Sec02_wrapper my-5'>
      <div className='container text-center'>
        <div className="row d-flex flex-column justify-content-center align-items-center">
          <div className="col-md-9 col-sm-10">
            <img className='p-2' src={icontrust} alt="" />
            <h1 className='font'>HOW WE HELP BUSINESSES</h1>
            <img className='p-2' src={iconprice} alt="" />
            <h4><b> Cost Certainty</b></h4>
            <p className='px-lg-5 px-sm-2 mx-xl-5'>We offer our clients a range of pricing options to suit their needs and provide transparency around legal costs. Our membership offers unlimited legal services for a low weekly fee.</p>
            <img className='p-2' src={icontimeframe} alt="" />
            <h4><b> Responsive Timeframes</b></h4>
            <p className='px-lg-5 px-sm-2 mx-xl-5'>We understand that timing is critical, particularly for businesses that have a large number of legal projects. LegalVision is committed to delivering our services within short timeframes that fit the commercial needs of our clients.</p>
            <img className='p-2' src={iconcrowed} alt="" />
            <h4><b> Specialist Lawyers</b></h4>
            <p className='px-lg-5 px-sm-2 mx-xl-4'>LegalVision caters to a full range of commercial law needs. Our lawyers are specialists, who bring extensive experience from working at leading law firms in Australia, New Zealand and across the world.</p>
            <img className='p-2' src={icontech} alt="" />
            <h4><b> Custom Technology</b></h4>
            <p className='px-lg-5 px-sm-2 mx-xl-5'>We built our tech stack from the ground up. Our team of developers build technology to help increase the efficiency of our lawyers and improve the client experience for our members.</p>
            <img className='p-2' src={icondoc} alt="" />
            <h4><b>Free Legal Information and Documents</b> </h4>
            <p className='px-lg-5 px-sm-2 mx-xl-5'>We are committed to educating business owners on legal issues. We have published over 6,000 free legal articles and resources.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home_Sec04;
