import React from "react";
import SearchMovie from "./searchmovies/searchmovie/searchmovie";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import "./style.css";

const SearchBox = () => {
  return (
    <>
      <div className="cv-search-box">
        <div className="cv-search-box_input">
          <input type="text" placeholder="Search your Movie" />
          <button>Search</button>
        </div>
      </div>
      <div className="cv-search-box_movies">
        <Carousel  swipeable showArrows  >
          <SearchMovie />
          <SearchMovie />
          <SearchMovie />
          <SearchMovie />
          <SearchMovie />
          <SearchMovie />
          <SearchMovie />
          <SearchMovie />

        </Carousel>
      </div>
    </>
  );
};

export default SearchBox;
