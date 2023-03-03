import React from "react";
import { FcAddDatabase } from "react-icons/fc";
import { AiFillEdit } from "react-icons/ai";
import "./style.css";
import post from "../../assets/post1.jpg";
import { Link } from "react-router-dom";

const AdminMovies = () => {
  var numberofmovies = 100;
  return (
    <div className="cv-admin_panel-list">
      <div className="cv-admin_panel-list_heading">
        <h1>{`Number of Movies  ${numberofmovies}`}</h1>
        <Link to="/admin-panel/add">
        <button>
          Add a Movie <FcAddDatabase />
        </button>
        </Link>
      </div>
      <div className="cv-admin_panel-lists">
        <div className="cv-admin_panel-lists_post">
          <img src={post} alt="" />
          <div className="cv-admin_panel-lists_title">
            <h3>Interstaller</h3>
            <p>
              One of the reasons Interstellar is so beloved is because of its
              scientific accuracy. The idea of time dilation due to gravity on
              the behemoth planet, wormholes, and even the black hole shown was
              ahead of its time
            </p>
          </div>
          <h5>
            Edit <AiFillEdit />
          </h5>
        </div>
      </div>
    </div>
  );
};

export default AdminMovies;
