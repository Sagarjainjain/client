import React from 'react';
import { AiFillStar } from "react-icons/ai";
import Posts1 from "../../../assets/post1.jpg";
import "./style.css"

const MoviePost = () => {
  return (
    <div className="cv-moviepost">
        <div className='cv-moviepost-media'>
            <img src={Posts1} alt="image001" />
        </div>
        <div className='cv-moviepost-title'>
            <h4>Interstellar</h4>
            <span><AiFillStar/> <h5>9</h5></span>
        </div>
    </div>
  )
}

export default MoviePost