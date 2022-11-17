import './rev.css'
import React from 'react'
import revImg1 from './../../assets/e-skate-1.png'
import revImg2 from "./../../assets/e-skate-2.png";

const Rev = () => {
  return (
    <section className="revBanner" id="rev">
      <div className="revContent">
        <div className="revImg1">
          <img src={revImg1} alt="revImage1" />
        </div>
        <div className="revImg2">
          <img src={revImg2} alt="revImage2" />
        </div>
        <div className="revInfo">
          <h2>Boosted Rev</h2>
          <h5>
            There's never been an electric scooter quite like this. Speed past
            traffic at 24 mph. Go up to 22 miles on a single charge. You'll get
            there in no time at all. Stop and go with the roll of your thumb.
            Its intuitive design means there’s almost no learning curve.
          </h5>
          <div className="revButton">
            <button>Shop Now</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Rev