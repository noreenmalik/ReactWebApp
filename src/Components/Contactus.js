import React from 'react'
import './Contactus.css';
import Contact_Header from './Contact_Header';
import iconenvelope from './Contact/icon-envelope.png';
import Location from './Location';
import phone from './Contact/icon-cell-phone.svg'


const Contactus = () => {
  return (
    <>
      <Contact_Header />
      <div className="container ">
        <div className="row">
          <div className="col-lg-6 col-md-10 col-sm-12 cont-form ">
          <div className="col-12">
            <h2>Contact Us</h2>
            <div className="desc"><p>LegalVision is a commercial law firm that assists businesses and employers through our membership. We cannot assist with personal, employee, family or consumer law matters.</p></div>

          </div>

          <form className='justify-content-center'>
            <div className="col-6">
              <label>First Name</label>
              <input type="text" className="form-control" aria-label="First name" />
            </div>


            <div className="col-6">
              <label>Last Name</label>
              <input type="text" className="form-control" aria-label="Last name" />
            </div>

            <div className="col-6">
              <label>E-mail</label>
              <input type="email" class="form-control" id="inputEmail4" />
            </div>
        <div className="col-6">
        <label>Phone</label>
        <input type="tel" class="form-control" id="inputEmail4"/>
        </div>
        <div className="col-11 txt-bx">
         <label>Tell Us about Your Enquiry</label>
         <textarea rows="4" name="comment" form="usrform"></textarea>
        </div>
        
     
        <div className="col-11 foot-desc"><p>By submitting this form, you agree to receive emails from LegalVision and can unsubscribe at any time. View our Privacy Policy.</p></div>
        <div class="col-11 pb-3">
        <button type="submit" class="main-btn  primary-btn w-100">Submit Now</button>
         </div>
        
      

          </form>

        </div>
        </div>
      </div>

      <div className="col-12 cal-us text-center">
        <img src={phone} className='pt-4 pb-2' />
        <h2>CALL US ON</h2>
        <span><a href="">1300 544 755 </a></span>
        <p>Monday - Thursday: 8:30am to 6pm AEST<br />
          Friday: 8:30am to 5pm AEST<br />
          Overseas Callers: +61 2 8074 7400</p>
      </div>
      <div className="col-12 maill-us text-center py-5 ">
       <img src={iconenvelope} width="40rem" />
        <h2>EMAIL US</h2>
        <span>info@legalvision.com.au</span>

      </div>



      {/* Locations  */}
     <Location/>
</>
  )

}

export default Contactus
