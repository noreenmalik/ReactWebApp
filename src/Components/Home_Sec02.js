import React from 'react';
import './Home_Sec02.css';
import homedata1 from './Home_Sec02.json';
import iconchat from './icon-chat.svg';
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
        slidesToShow: 3,
        slidesToScroll: 1
    };
    var responsive = {
        dots: true,
        infinite: false,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1400,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 999,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 650,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 555,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: false

                }
            }

        ]
    };

    return (
        <div className="container-fluid homesec02_Wrapper  py-5">
            <div className="container inner-crousel pb-5 ">
                <div className="heading text-center">
                    <img className='pb-2 pt-2' src={iconchat} />
                    <h1 className='heading-1 pb-4'>SERVICES</h1>
                </div>

                <Slider {...settings}{...responsive} className="ps-md-5 px-xl-5 mx-xl-5">

                    {
                        homedata1.map((data, i) => {
                            return (
                                <div className="row">
                                    <div className="col-xl-3 col-lg-4 col-md-12 col-sm-12">

                                        <div className="bg-white text-center card-group pt-3 mb-sm-5 mb-xsm-0" key={data.id}>

                                            <div className="card" >
                                                <div className="card-img-top pt-4 pb-2" >
                                                    <div className="avatar">
                                                        <img className="icon-logo mx-auto pt-2" src={data.icon} />
                                                    </div>
                                                    <div className="card-body">
                                                      
                                                        <h3 className='card-title text-black t-bold mt-4'>{data.Title}</h3>
                                                        <p className='card-text para-norm'> {data.Description}</p>
                                                    </div>

                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            )

                        })

                    }

                </Slider>
            </div>
        </div>
    );
}


export default Home_Sec02
