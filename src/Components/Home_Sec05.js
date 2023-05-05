import React from 'react';
import './Home_Sec05.css';
import homedata5 from './Home_Sec05.json';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const Home_Sec02 = () => {

    var settings = {
        dots: true,
        infinite: true,
        className: "center",

        centerPadding: "10px",
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 1
    };
    var responsive = {
        dots: true,
        infinite: false,
        speed: 300,
        slidesToShow: 6,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            }

        ]
    };

    return (
        <div className="container Homesec05_Wrapper text-center d-flex flex-column justify-content-center align-items-center pt-5">
           
                <div className="heading text-center py-3">
                    <h2 className='pb-4 color'>Trusted by these satisfied clients</h2>
                </div>
              <div className='w-75 py-3'>
                <Slider {...settings}{...responsive} >

                    {
                        homedata5.map((data, i) => {
                        
                            return (
                                
                           <div className='logo-slide'>
                                        <div  key={data.id}>
                                                    <div className="avatar">
                                                        <img className= "icon-logo05" src={data.icon} />
                                                    </div>
                                        </div>
                                              
                             </div>            
                                           
                            )

                        })

                    }

                </Slider>
                </div>
                <p className='pb-5 pt-4' ><a className='link' href=""> Read more testimonials and reviews</a></p>  
                </div>
          
    );
}


export default Home_Sec02
