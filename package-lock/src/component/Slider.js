
import 'bootstrap/dist/css/bootstrap.css'; 

import img1 from '../assets/harload.jpg'
import img2 from'../assets/lon.jpg'
import img3 from '../assets/filmto.jpg'
// import img4 from '../assets/lon.jpg'
import './Slider.css'

import React from 'react';
import Slider from 'react-slick';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from 'react-router-dom';

const NextArrow = (props) => {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{
                ...style,
                display: 'block',
                right: 20,
                zIndex: 1,
                color: 'white',
                fontSize: '30px', 
                background: 'rgba(0, 0, 0, 0.5)',
				borderRadius:'50%',
                width: '50px', 
                height: '50px',
				display:'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                textAlign:'center' 
            }}
            onClick={onClick}
        >
            <FontAwesomeIcon icon={faAngleRight} />
        </div>
    );
};

const PrevArrow = (props) => {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{
                ...style,
                display: 'block',
                left: 20,
                zIndex: 1,
                color: 'white',
                fontSize: '30px', 
                background: 'rgba(0, 0, 0, 0.5)',
                borderRadius: '50%',
                width: '50px', 
                height: '50px', 
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                // border: '2px solid white' 
            }}
            onClick={onClick}
        >
            <FontAwesomeIcon icon={faAngleLeft} />
        </div>
    );
};

const Slide = () => {
    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />
    };

    const slidesData = [
        { id: 1, content: "Your favorite channels all in one place", imgSrc: "https://wallpapers.com/images/hd/the-godfather-gentle-touch-vq3pfn0569s7n40k.jpg" },
        { id: 2, content: "Slide 2 Content", imgSrc: "https://c4.wallpaperflare.com/wallpaper/812/567/688/pulp-fiction-movies-minimalism-monochrome-wallpaper-preview.jpg" },
        { id: 3, content: "Slide 3 Content", imgSrc: "https://rukminim2.flixcart.com/image/850/1000/l2tcfbk0/poster/s/i/u/small-poster-movie-the-godfather-sla822-wall-poster-13x19-inches-original-imaek7mxguwkxftz.jpeg?q=90&crop=false" }
    ];

    return (
        <div className="slider-container">
			
            <div className='hh2'>
                <h4>
                    Unleash the Unknown
                </h4>
                <h4>
                    In your 
                    convenient Language..
                </h4>
                <Link to="/Collections">
                    <button className='btn'>
                        Explore Now
                    </button>
                </Link>
            </div>
            <Slider {...settings} className='slides'>
                {slidesData.map(slide => (
                    <div key={slide.id} className="slide-item">
                        <img
                            className="d-block w-100 h-60"
                            src={slide.imgSrc}
                            alt={`Slide ${slide.id}`}
                        />
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default Slide;
