import React from "react";
import "./style.css";
import { AiFillStar } from "react-icons/ai";
import post from "../../../assets/post1.jpg"


const SearchMovie = () => {
  return (
    <div className="cv-search_movies">
      <div className="cv-search_movies_media">
        <img src={post} alt="" />
      </div>
      <div className="cv-search_movies_title">
        <h4>Interseller</h4>
        <div className="cv-search_movies_title-rating">
          <AiFillStar color="#ffde59" />
          <p>10</p>
        </div>
      </div>
    </div>
  );
};

export default SearchMovie;
