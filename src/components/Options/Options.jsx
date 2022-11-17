import './options.css'
import React from 'react'
import imgOption1 from './../../assets/img-slide-1.png'
import imgOption2 from './../../assets/img-slide-2.png'
import imgOption3 from "./../../assets/img-slide-3.png";

const Options = () => {
  return (
    <section className="shopOptions" id="Options">
      <div className="containerOption">
        <div className="optionsImg1">
          <img src={imgOption1} alt="" />
          <div className="optionText">
            <h2>Shop Boosted Stealth</h2>
            <h5>IN STOCK</h5>
          </div>
        </div>
        <div className="optionsImg1">
          <img src={imgOption2} alt="" />
          <div className="optionText">
          <h2>Shop Boosted Plus</h2>
          <h5>IN STOCK</h5>
          </div>
        </div>
        <div className="optionsImg1">
          <img src={imgOption3} alt="" />
          <div className="optionText">
          <h2>Shop Boosted Mini</h2>
          <h5>IN STOCK</h5>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Options