import React, { useState } from "react";
import { useDispatch } from'react-redux';
import "./style.css";
import {createMovie} from "../../../actions/movies"

const AdminInput = () => {
  const dispatch = useDispatch()
  const [movieData, setMovieData] = useState({
    title: "",
    discription: "",
    genre: "",
    profilePage: "",
    coverPage: "",
    rating: "",
  });
  console.log(`data: ${movieData}`);
  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(createMovie(movieData));
  }

  return (
    <div className="cv-admin_panel-input">
      <div className="cv-admin_panel-input-container">
        <h2>Add A Movie</h2>
        <form
          autoComplete="off"
          noValidate
          onSubmit={handleSubmit}
          encType="multipart/form-data"
        >
          <input
            className="cv-admin_panel-inputs"
            placeholder="Enter Title"
            onChange={(e) =>
              setMovieData({ ...movieData, title: e.target.value })
            }
          />
          <input
            className="cv-admin_panel-inputs"
            placeholder="Add Discription"
            onChange={(e) =>
              setMovieData({ ...movieData, discription: e.target.value })
            }
          />
          <input
            className="cv-admin_panel-inputs"
            // type="number"
            placeholder="Add Rating"
            onChange={(e) =>
              setMovieData({ ...movieData, rating: e.target.value })
            }
          />
          <input
            className="cv-admin_panel-inputs"
            placeholder="Add Genre"
            onChange={(e) =>
              setMovieData({ ...movieData, genre: e.target.value })
            }
          />
          <div className="cv-admin_panel-inputs-file">
            <div className="cv-admin_panel-inputs-file-1">
              <label>Add cover page</label>
              <input
                className="cv-admin_panel-inputs-file"
                type="file"
                onChange={(e) =>
                  setMovieData({ ...movieData, coverPage: e.target.files[0] })
                }
              />
            </div>
            <div className="cv-admin_panel-inputs-file-1">
              <label>Add profile page</label>

              <input
                className="cv-admin_panel-inputs-file"
                type="file"
                onChange={(e) =>
                  setMovieData({ ...movieData, profilePage: e.target.files[0] })
                }
              />
            </div>
          </div>
          <button type="submit">Add a movie</button>
        </form>
      </div>
    </div>
  );
};

export default AdminInput;
