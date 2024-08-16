import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import axios from "axios";
import "./Carousel.css";
import { Typography } from "@mui/material";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", right: "10px", zIndex: "1" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", left: "10px", zIndex: "1" }}
      onClick={onClick}
    />
  );
}

export function CarouselSpacing() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8081/api/movies/get')
      .then(response => {
        setMovies(response.data);
      })
      .catch(error => console.error('Error fetching movie details:', error));
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  if (movies.length === 0) {
    return <Typography color="white">Loading...</Typography>;
  }

  return (
    <div className="tubi-slider">
      <Slider {...settings}>
        {movies.map((movie) => (
          <div key={movie.id} className="slider-item">
            <div className="slider-content card">
              <img
                src={movie.posterUrl}
                alt={movie.title}
                className="card-img-top"
              />
              <div className="card-body">
                <h5 className="card-title">{movie.title}</h5>
                <p className="card-text">
                  {movie.year} • {movie.duration}
                </p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
