import React from 'react'
import Homesec06 from './Home_Sec06.json';
import './Home_Sec06.css'
import {Link} from "react-router-dom";
import crowd1 from './icon-crowd1.svg';


const Home_Sec06 = () => {
  return (
    <div className="container-fluid homesec06_Wrapper py-5">
      <div className='container text-center '>
      <img className='p-2' src={crowd1} alt="" />
        <h1 className='pb-4'>MEET SOME OF OUR LAWYERS</h1>
          
        <div className="row d-flex justify-content-center ">
          {
            Homesec06.map(data => {
              return (
                <div className="card-group col-lg-4 col-md-6 col-sm-8  justify-content-center" key={data.id}>
                     <Link to={data.link}>
                  <div className="card my-3 text-center bg-transparent">
                    <div className="card-img-top">
                      <div className="avatar">
                        <Link to={data.link}>
                          <img src={data.logo} className="img-avatar" />
                        </Link>
                      </div>
                      <div className="card-body">
                        <h4 className='card-title'>{data.name}</h4>
                        <p className='designation'>{data.designation}</p>
                      </div>
                    </div>
                  </div>
                  </Link>
                </div>
              
              )
            })

          }
          <p ><a className='link' href="/ourteam">View all legal team profiles</a></p>
         
        </div>
      </div>

    </div>
  )
}

export default Home_Sec06

