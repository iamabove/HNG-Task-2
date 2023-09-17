import React from "react";
import { GrFavorite } from "react-icons/gr";
import { AiOutlineUnorderedList } from "react-icons/ai";
import { Link } from "react-router-dom";

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
        <div className="secondDiv d-flex flex-column align-items-center gap-2">
          <Link>
            <div
              className="content-box d-flex gap-2 align-items-center justify-content-center "
              style={{ background: "rgba(190, 18, 60)" }}
            >
              <GrFavorite size={20} color="Rgb(255,255,255)" />
              <div>Add to favorite</div>
            </div>
          </Link>

          <Link>
            <div
              className="content-box d-flex gap-2 align-items-center justify-content-center"
              style={{ background: "rgba(190, 18, 60,0.2)", color: "black" }}
            >
              <AiOutlineUnorderedList />
              <p className="mb-0">More watch option</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DetailedfContent;
