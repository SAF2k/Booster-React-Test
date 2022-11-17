import './home.css'
import React from 'react'
import bannerImg from '../../assets/home-img.png'
import electrek from "../../assets/patners-4.png";
import techCrunch from "../../assets/patners-2.png";
import Pm from "../../assets/patners-1.png";
import wired from "../../assets/patners-3.png";


const Home = () => {
  return (
    <>
      <section className="banner" id="home">
        <div className="bannerImg">
          <img src={bannerImg} alt="banner" className="homeImg" />
        </div>
        <div className="bannerDescription">
          <h2>Welcome to Boosted USA</h2>
          <h5>
            The Holy Grail of Electric Skateboards and One REVolutionary Scooter
          </h5>
        </div>
        <div className="bannerButton">
          <button className="booster">BOOSTED REVS</button>
          <button className="booster">BOOSTED BOARDS</button>
        </div>
      </section>
      <section>
        <div className="partners">
          <img src={electrek} alt="" srcset="" />
          <img src={techCrunch} alt="" srcset="" />
          <img src={Pm} alt="" srcset="" />
          <img src={wired} alt="" srcset="" />
        </div>
      </section>
    </>
  );
}

export default Home