import React from 'react'
import img from "../assets/images/homeImage.png"
import { Link } from 'react-router-dom'
import "../assets/css/HomeHeader.css"


export default function HomeHeader() {
  return (
    <div className='homeHeader'>
      <div className="homeContainer">
        <div className="homeContent">
          <div className="homeTitle">
            Bringing AI to Financial Markets
          </div>
          <div className="homeText">
            Richmond Analytica provides solutions in Big Data and Artificial Intelligence applied to Financial Markets...
          </div>
          <div className="homeButtom">
            <Link className='btn btn-custom btn-lg page-scroll'
              to="/about"
            >Read More</Link>
          </div>
        </div>
        <div className="homeImage">
          <img src={img} />
        </div>
      </div>
    </div>
  )
}
