import React from 'react'
import './footer.css'
import goImg1 from './../../assets/footer-3.png'
import goImg2 from './../../assets/footer-1.png'
import goImg3 from './../../assets/footer-2.png'
import goImg4 from "./../../assets/footer-4.png";
import FooterLogo from "./../../assets/foot_brand_logo.png";
import PaymentsImg from './../../assets/payment.png'

const Footer = () => {
  return (
    <section className="footerContainer" id="footers">
      <div className="footerPart1">
        <div className="goInfo">
          <img src={goImg1} alt="GoImage-1" />
          <div className="goText">
            <h2>Go Fast</h2>
            <h5>
              Boosted is known for its premium performance boards offering a
              next-level experience.
            </h5>
          </div>
        </div>
        <div className="goInfo">
          <img src={goImg2} alt="GoImage-2" />
          <div className="goText">
            <h2>Go Far</h2>
            <h5>
              With optional extended battery life, you can get wherever you need
              to go reliably.
            </h5>
          </div>
        </div>
        <div className="goInfo">
          <img src={goImg3} alt="GoImage-3" />
          <div className="goText">
            <h2>Go Safe</h2>
            <h5>
              Safety is a #1 priority for Boosted, always wear a helmet when
              riding.
            </h5>
          </div>
        </div>
        <div className="goInfo">
          <img src={goImg4} alt="GoImage-4" />
          <div className="goText">
            <h2>Built to Last!</h2>
            <h5>
              Boosted products are engineered to last for years and are
              extremely reliable.
            </h5>
          </div>
        </div>
      </div>

      <div className="footerPart2">
        <div className="footerLogo">
          <img src={FooterLogo} alt="" />
        </div>

        <div className="footerExport">
          <div className="exploreText">
            <h2>Explore</h2>
            <div className="exploreList">
              <a href="/">Electric Skateboards</a>
              <a href="/">Electric Scooters</a>
              <a href="/">Accessories</a>
              <a href="/">FAQs</a>
              <a href="/">Warranty</a>
              <a href="/">Quick Start Guide</a>
              <a href="/">Contact</a>
              <a href="/">Gift Card</a>
              <a href="/">Accessibility Statement</a>
            </div>
          </div>
        </div>

        <div className="footerAbout">
          <div className="goText2">
            <h2>About Boosted USA</h2>
            <h5>
              Boosted empowers people everywhere to commute across their cities,
              campuses, and communities in ways that were never before possible.
              Boosted is solving one of the biggest problems people face each
              day: transportation.
            </h5>
            <div className="footerAddress">
              <h4>CaliRides LLC - DBA Boosted USA</h4>
              <h4>1281 Andersen Drive Ste.K</h4>
              <h4>San Rafael, CA 94901</h4>
            </div>
          </div>
        </div>
      </div>

      <div className="footerPart3">
        <div className="copyRight">
          <h5>&#169; 2022</h5>
          <h5 style={{ color: "#ff614c" }}>Booster USA.</h5>
          <h5> All Rights Reserved.</h5>
          <h5 style={{ color: "#ff614c" }}>Terms of Service.</h5>
          <h5> Built by</h5>
          <h5 style={{ color: "#ff614c" }}>BH</h5>
        </div>
        <div className="paymentMethods">
          <img src={PaymentsImg} alt="Payment-Options" />
        </div>
      </div>
    </section>
  );
}

export default Footer