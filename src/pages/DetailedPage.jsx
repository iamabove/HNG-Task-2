import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { API_KEY, BASE_URL } from "../api/config";
import axios from "axios";
import Sidebar from "../components/Sidebar";
import Logo from "../components/Logo";
import { HiMenuAlt4 } from "react-icons/hi";
import { Image } from "react-bootstrap";
import DetailedfContent from "../components/DetailedfContent";
import DetailedStart from "../components/DetailStart"


const DetailedPage = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState([]);

  console.log(id);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get(
          `${BASE_URL}/movie/${id}?api_key=${API_KEY}&append_to_response=credits,recommendations,images,videos&include_video_language=en`
        );
        const { release_date } = data;

        const localDate = new Date(Date.UTC(...release_date.split("-")));

        setMovie({ ...data, release_date: localDate.toDateString() });

        console.log(movie);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);
  return (
    <div>
      <div className=" d-flex d-lg-none justify-content-between align-items-center mb-3 cc-container py-3 bg-secondary">
        <Logo color={"white"} />
        <div className="menu-div"></div>
      </div>

      <div className="d-flex ">
        <div className="d-none d-lg-block">
          <Sidebar />
        </div>
        {movie.title && (
          <div className="video-container pt-lg-5" style={{ flexGrow: 1 }}>
            <div className="video mb-3">
              <Image
                className="w-100 h-100"
                style={{ objectFit: "cover", borderRadius: "20px" }}
                src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
              />
            </div>
            <div className="px-3">
              <DetailedStart movie={movie} />
              <DetailedfContent movie={movie} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default DetailedPage;
