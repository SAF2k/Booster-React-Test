import "./eskate.css"
import React from 'react'
import ElectSkate from '../../assets/e-skate-main.png'

const ESkate = () => {
  return (
    <section className="ESkateBanner" id="ESkateBanners">
      <div className="ESBannerImg">
        <img src={ElectSkate} alt="ElectricSkate" className="ESImg" />
      </div>
      <div className="ESDescription">
        <h5>High-performance</h5>
        <h2>Electric Skateboards</h2>
        <h5 className="secondh5">
          Cruising campus, going to work or getting through that long list of
          errands has never been easier or more fun.
        </h5>
      </div>
      <div className="ESButton">
        <button className="booster">Shop Now</button>
      </div>
    </section>
  );
}

export default ESkate