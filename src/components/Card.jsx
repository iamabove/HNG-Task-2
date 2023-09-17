import React, { useState } from "react";
import { Image } from "react-bootstrap";
import { Link } from "react-router-dom";

const Card = ({ data, percentage }) => {


  return (
    <div data-testid="movie-card">
      <Link to={`/movies/${data.id}`}>
        <div>
          <Image
            style={{ objectFit: "cover" }}
            className="w-100 h-100"
            src={`https://image.tmdb.org/t/p/w500${data.poster_path}`}
            data-testid="movie-poster"
          />
        </div>
        {/* <h1 className="sans title mb-0 text-white overview">
          {data[current].title.length > 32
            ? `${data[current].title.slice(0, 29).trim()}...`
            : data[current].title}
        </h1> */}
      
      <h4 data-testid="movie-released-date">{data.release_date}</h4>
      <h1 data-testid="movie-title">
        {data.title}
      </h1>
      <div className="d-flex justify-content-between align-items-center">
        <div className="d-flex align-items-center gap-2">
          <div style={{ width: "40px", height: "auto" }}>
            <Image
              className="w-100 h-100"
              src="https://res.cloudinary.com/dbxvk3apv/image/upload/v1694595577/cofeshop/MV5BMTk3ODA4Mjc0NF5BMl5BcG5nXkFtZTgwNDc1MzQ2OTE_1_qaz2ip.webp"
            />
          </div>
          <h3 style={{ fontWeight: "700" }} className="small-text mb-0">
            {data.vote_average.toFixed(2)} / 10
          </h3>
        </div>

        <div className="d-flex align-items-center gap-3">
          <div style={{ width: "15px", height: "auto" }}>
            <Image
              className="w-100 h-100"
              src="https://res.cloudinary.com/dbxvk3apv/image/upload/v1694596461/cofeshop/PngItem_1381056_1_1_fkoyqh.png"
            />
          </div>
          <p className="mb-0">{percentage}</p>
        </div>
      </div>
      {/* <h1>{data.genre}</h1> */}
      </Link>
    </div>
  );
};

export default Card;
