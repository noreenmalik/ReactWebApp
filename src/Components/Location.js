import React from 'react'
import iconLocation from './Contact/icon-location-marker-on-top-paper.png';
import Area from './Location.json'
import './Contactus.css'

const Location = () => {
  return (
    <>

    <div className="container-fluid Location_Wrapper py-5">
      <div className='container text-center '>
      <img className='' src={iconLocation} />
        <h1 className='my-0 text-white header2font'>LOCATIONS</h1>
        <p className='text-white para-norm px-4'>LegalVision's tech model allows us to deliver legal services online. We work with businesses across Australia and from around the world. If you wish to meet us in person, you are welcome to visit any of our offices.</p>
          
        <div className="row d-flex justify-content-center ">
          {
            Area.map(cities => {
              return (
                <div className="card-group col-lg-3 col-md-6 col-sm-8  justify-content-center" key={cities.id}>
                   
                  <div className="card mt-3 text-center bg-transparent mb-0">
                 
                     
                    <p className='color py-0 my-0'>{cities.city}</p>                    
                  
                     
                     <p className='card-title text-white py-0  para-small'>{cities.place}</p>
                      <i> <p className='designation text-white py-0 para-norm px-lg-4'>{cities.location}</p></i> 
                      </div>
                    </div>
           
              
             
              
              )
            })

          }
         
      </div>
      </div>
      </div>

   
    </>
  )
}

export default Location
