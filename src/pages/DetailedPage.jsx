import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { API_KEY, BASE_URL } from "../api/config";
import axios from "axios";
import Sidebar from "../components/Sidebar";
import Logo from "../components/Logo";
import { HiMenuAlt4 } from "react-icons/hi";
import { Image } from "react-bootstrap";
import DetailStart from "../components/DetailStart";

const DetailedPage = () => {
  const [movie, setMovie] = useState([]);
  const { id } = useParams();
  console.log(id);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${BASE_URL}/movie/${id}?api_key=${API_KEY}&append_to_response=credits,recommendations,images,videos&include_video_language=en`
        );
        setMovie(response.data);
        console.log(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);
  return (
    <div>
      <div className="d-lg-none mb-3 bg-secondary py-3 d-flex justify-content-between align-items-center cc-container">
        <Logo />
        <div className="menudiv">
          <HiMenuAlt4 size={20} color="white" />
        </div>
      </div>
      <div className="d-flex">
        <div className="d-none d-lg-block">
          <Sidebar />
        </div>

        {movie.title && (
          <div className="video-container pt-lg-5" style={{ flexGrow: 1 }}>
            <div style={{ borderRadius: "20px" }} className="video mb-3">
              <Image
                className="w-100 h-100"
                style={{ borderRadius: "20px", objectFit: "cover" }}
                src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
              />
            </div>

            <DetailStart movie={movie}/>

          </div>
        )}
      </div>
    </div>
  );
};

export default DetailedPage;
