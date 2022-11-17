import React from 'react'
import './midpage.css'
import board1 from '../../assets/img-1.png'
import board2 from "../../assets/img-2.png";

const Midpage = () => {
  return (
    <section className="midPage" id="aboutBoards">
      <div className="boardDoc">
        <h2>Looking for Boosted Boards, or Boosted Revs?</h2>
        <h5>
          Boosted USA acquired all of the remaining inventory directly from
          Boosted. This means we have the electric skateboards and scooter you
          all love and have been looking for. Get your hands on these highly
          sought after products while supplies last.
        </h5>
      </div>
      <div className="boardImg">
        <div className="image1">
          <img src={board1} alt="board1" />
          <div className="infoImage">
            <h3>Shop Boosted Boards</h3>
            <h5>In Stock</h5>
          </div>
        </div>
        <div className="image1">
          <img src={board2} alt="board2" />
          <div className="infoImage">
            <h3>Shop Boosted Revs</h3>
            <h5>In Stock</h5>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Midpage