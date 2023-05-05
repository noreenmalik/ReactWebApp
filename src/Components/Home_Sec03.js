import React from 'react'
import icon from './icon-toolbox.svg';
import './Home_Sec03.css'

const Home_Sec03 = () => {
  return (
    <div className='container-fluid back_Wrapper'>
      <div className="row d-flex justify-content-center text-center">
        <div className="col-lg-8 col-md-10 col-sm-12 py-5">
        <img className='pt-3 pb-2' src={icon} />
        <h1 className='heading-1 pb-2'>ABOUT US</h1>
        <div className="responsive">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/V3eqrOu7Xjk?controls=0" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
    </div>
    </div>
          
        </div>
    </div>
  )
}

export default Home_Sec03
