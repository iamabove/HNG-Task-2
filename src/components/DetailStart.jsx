import React from "react";
import { AiFillStar } from "react-icons/ai";
import DetailedfContent from "./DetailedfContent"

const DetailStart = ({ movie }) => {
  return (
    <div>
      <div className="d-flex justify-content-between flex-wrap gap-3 gap-lg-0 ">
        <div className="d-flex align-items-center gap-2 flex-wrap">
          <h3 data-testid = "movie-title" className="mb-0">{movie.title}</h3>
          <div
            style={{
              width: "10px",
              height: "10px",
              borderRadius: "50%",
              background: "black",
            }}
          />
          <h3 data-testid = "movie-release-date"  className="mb-0">{movie.release_date}</h3>
          <div
            style={{
              width: "10px",
              height: "10px",
              borderRadius: "50%",
              background: "black",
            }}
          />
          <h3 className="mb-0"> PG-{movie.adult ? "18+" : 13}</h3>
          <div
            style={{
              width: "10px",
              height: "10px",
              borderRadius: "50%",
              background: "black",
            }}
          />
          <h3 data-testid="movie-runtime" className="mb-0">
            {movie.runtime}
          </h3>

          <div className="d-flex gap-2">
            {movie.genres.slice(0, 2).map((each) => (
              <div
                key={each.id}
                style={{
                  padding: "10px 20px",
                  border: "1px solid rgba(248, 231, 235, 1)",
                  borderRadius: "15px",
                }}
              >
                <p className="mb-0">{each.name}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="d-flex gap-2 align-items-center">
          <div className="d-flex gap-2 align-items-center">
            <AiFillStar size={20} color={"gold"} />
            <h3 className="mb-0" style={{ color: "#E8E8E8" }}>
              {movie.vote_average.toFixed(2)}
            </h3>
          </div>{" "}
          <h3 className="mb-0">|</h3>
          <h3 style={{ color: "#666666" }} className="mb-0">
            {movie.vote_average.toFixed(2)}
          </h3>
        </div>
      </div>
      <h3 style={{ color: "rgb(102,102,102)" }}>{movie.vote_count}</h3>
      {/* <DetailedfContent movie={movie}/> */}
    </div>
  );
};

export default DetailStart;
