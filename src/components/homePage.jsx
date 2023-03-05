import React from "react";
import SearchBox from "./searchbox/searchMain";

import "./style.css";
import MoviePost from "./widget/movieposts/moviepost/moviepost";
// import coverpage from "./assets/coverpage.jpg"
// import coverpagemobile from "./assets/coverpagemobile.jpg"
// import coverpagetablet from "./assets/coverpagetablet.jpg"

const HomePage = () => {
  return (
    <div className="cv-homepage">
      <div className="cv-homepage-hero">
        <h1>Confused?</h1>
        <h4>What to watch?</h4>
      </div>
      <div className="cv-homepage-genre">
        <SearchBox />
        <h2>Choose your taste....</h2>
        <div className="cv-homepage-genre-caterories">
          <div className="cv-homepage-genre-cards">
            <h3>Action</h3>
          </div>
          <div className="cv-homepage-genre-cards">
            <h3>Comedy</h3>
          </div>
          <div className="cv-homepage-genre-cards">
            <h3>Horror</h3>
          </div>
          <div className="cv-homepage-genre-cards">
            <h3>Mystery</h3>
          </div>
        </div>
        <div className="cv-homepage_moviepost">
          <MoviePost />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
