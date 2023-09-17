import React, { useState } from "react";
import { Image } from "react-bootstrap";
import { AiFillPlayCircle } from "react-icons/ai";

const Hero = ({ data }) => {
  const [current, setCurrent] = useState(0);
  return (
    <div className="hero-container position-relative">
      <Image
        src={`https://image.tmdb.org/t/p/original/${data[current].backdrop_path}`}
        className="w-100 h-100"
      />
      <div className="position-absolute w-100 hero-text">
        <div className="cc-container">
          <div className="text-holder">
            <h1 className="sans title mb-0 text-white overview">
              {data[current].title.length > 32
                ? `${data[current].title.slice(0, 29).trim()}...`
                : data[current].title}
            </h1>
            <div className="d-flex gap-3 align-items-center">
              <div style={{ width: "40px", height: "auto" }}>
                <Image
                  className="w-100 h-100"
                  src="https://res.cloudinary.com/dbxvk3apv/image/upload/v1694595577/cofeshop/MV5BMTk3ODA4Mjc0NF5BMl5BcG5nXkFtZTgwNDc1MzQ2OTE_1_qaz2ip.webp"
                />
              </div>
              <p className="small-text mb-0">
                {data[current].vote_average.toFixed(2)}% / 10
              </p>
            </div>
            <h6 data-testid = "movie-overview"  className="text-white overview">
              {data[current].overview.length > 240
                ? `${data[current].overview.slice(0, 237).trim()}...`
                : data[current].overview}
            </h6>
            <div className="hero-button d-flex gap-2 align-items-center">
              <AiFillPlayCircle size={20} color="white" />
              <h6 className="mb-0">Watch Trailer</h6>
            </div>
          </div>
        </div>
      </div>
      <div className="position-absolute hero-number">
        <div className="d-flex flex-column gap-0">
          {[...Array(5)].map((_, index) => (
            <div className="d-flex gap-2 align-items-center" key={index}>
              <div
                style={{ border: "1px solid red" }}
                className={`${current === index ? "d-block" : "d-none"}`}
              />
              <p
                className={`small-text mb-0 overview ${
                  current === index ? "active" : ""
                }`}
                onClick={() => setCurrent(index)}
              >
                {index + 1}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;
