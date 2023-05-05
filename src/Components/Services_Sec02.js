import React from 'react'
import Servicesec02 from './Secvices_Sec02.json';
import './Services_Sec02.css'
import { Link } from "react-router-dom";

const Services_Sec02 = () => {
    return (
        <div className="container services02_Wrapper py-5">
          
                <div className="row d-flex justify-content-center px-lg-5 mx-lg-5">
              
                    {
                        Servicesec02.map(item => {
                            return (
                            
                                     <div class="col-lg-3 col-md-4 col-sm-12 my-2 mx-0">
                                   <div class="card" key={item.id}>
                              
                                      <Link to={item.link}>
                                            <div className="card text-center pt-4 pb-2">
                                                <div className="card-img-top">
                                                    <div className="avatar m1">
                                                        <img className='S-icon' src={item.icon} /> 
                                                    </div>
                                                    <div className="avatar m2">
                                                        <img className='S-icon' src={item.icon_w} /> 
                                                    </div>
                                                    <div className="card-body">
                                                        <h4 className='card-title'>{item.title}</h4>
                                                    </div>
                                                </div>
                                            </div>
                                        </Link>

                                </div> 
                               
                               </div> 
                           
                             )
           
                        })

                    }
                    </div>
             </div>
   
        
    
     )
}

export default Services_Sec02
