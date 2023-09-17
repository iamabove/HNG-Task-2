import React from "react";
import { AiFillPlayCircle } from "react-icons/ai";

const DetailedfContent = ({ movie }) => {
  const director = movie.credits.crew.find((each) => each.job === "Director");

  const writers = movie.credits.crew
    .filter((each) => each.job === "Writer")
    .slice(0, 3);
  console.log(director);

  const stars = movie.credits.cast
    .filter((each) => each.known_for_department === "Acting")
    .slice(0, 3);
  console.log("dygius", stars);
  return (
    <div>
      <div className="d-flex flex-column flex-lg-row gap-4 gap-lg-0 justify-content-between mt-3">
        <div className="firstDiv">
          <h6 data-testid="movie-overview">{movie.overview}</h6>
          <div>
            <h4>
              Director: <span>{director.name}</span>
            </h4>
            {writers.length ? (
              <h4>
                Writers:{" "}
                {writers.map((each, index) => (
                  <span key={each.id}>
                    {each.name}
                    {index === writers.length - 1 ? "." : ","}{" "}
                  </span>
                ))}
              </h4>
            ) : null}

            {stars.length ? (
              <h4>
                Stars:{" "}
                {stars.map((each, index) => (
                  <span key={each.id}>
                    {each.name}
                    {index === stars.length - 1 ? "." : ","}{" "}
                  </span>
                ))}
              </h4>
            ) : null}
          </div>
        </div>
        <div className="secondDiv">
         
        </div>
      </div>
      <div
            className="hero-button2 d-flex justify-content-center gap-2 
        w-75 align-items-center"
          >
            <AiFillPlayCircle size={20} color="white" />
            <h6 className="mb-0">Save favourite shows</h6>
          </div>
    </div>
  );
};

export default DetailedfContent;
