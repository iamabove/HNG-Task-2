import React, { useState, useEffect } from "react";
import axios from "axios";
import { API_KEY, BASE_URL } from "../api/config";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Spinner from "../utils/Spinner";
import { Link } from "react-router-dom";
import { FaGreaterThan } from "react-icons/fa";
import { Row, Col } from "react-bootstrap";
import Card from "../components/Card";

const Home = () => {
  const [HeroMovies, setHeroMovies] = useState([]);
  const [featuredMovies, setFeaturedMovies] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(
          `${BASE_URL}/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`
        );
        setHeroMovies(response.data.results.slice(0, 5));

        // const { release_date } = data;

        // const localDate = new Date(Date.UTC(...release_date.split("-")));

        // setFeaturedMovies({ ...data, release_date: localDate.toDateString() });
        setFeaturedMovies(response.data.results.slice(5, 15));
      } catch (err) {
        console.log(err);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  console.log(HeroMovies);
  console.log(featuredMovies);

  return (
    <div>
      <Navbar />
      {loading && <Spinner />}
      {!loading && !error && (
        <div>
          <Hero data={HeroMovies} />
          <div className="mt-5 d-flex align-items-center justify-content-between cc-container">
            <h2 className="mb-0">Featured Movies</h2>
            <Link className="seemore mb-0">
              <div className="d-flex gap-2 align-items-center">
                <p className="mb-0">See More</p>
                <FaGreaterThan className="mb-0" color="#be123c" />
              </div>
            </Link>
          </div>
          <div className="mt-4 cc-container">
            <Row data-testid="movie-card" className="card-gap">
              {featuredMovies.map((each) => (
                <Col xs={6} md={4} xl={3}>
                  <Card data-testid="movie-card" data={each} />
                </Col>
              ))}
            </Row>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
