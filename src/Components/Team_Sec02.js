import React from 'react'
import Teamsec02 from './Team_Sec02.json';
import {Link} from "react-router-dom";

const Team_Sec02 = () => {
  return (
    <div className="container-fluid teamsec02_Wrapper pt-5 px-5 ">
    {/* <div className='container text-center '> */}
        
      <div className="row d-flex justify-content-center">
        {
         Teamsec02.map(team => {
            return (
              <div className="card-group col-lg-2 col-md-4 col-sm-6 col-xsm-8 mx-md-2 justify-content-center" key={team.id}>
                   <Link to={team.link}>
                <div className="card my-3  text-center bg-transparent">
                  <div className="card-img-top">
                    <div className="avatar">
                      <Link to={team.link}>
                        <img style={{width:"8rem"}}  src={team.logo} className="img-avatar"/>
                      </Link>
                    </div>
                    <div className="card-body">
                      <h4 className='card-title'>{team.name}</h4>
                      <h5 className='designation para-g'>{team.designation}</h5>
                    </div>
                  </div>
                </div>
                </Link>
              </div>
            
            )
          })

        }
      
       
      </div>
    </div>

//   </div>
  )
}

export default Team_Sec02
