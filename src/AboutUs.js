import React, { useState } from "react";
import HowToUse from "./API/HowToUse";

const AboutUs = () => {
  const [aboutData, SetAboutData] = useState(HowToUse);

  return (
    <>
      <section className="common-section our-services">
        <div className="container mb-5">
          <div className="row">
            <div className="col-12 col-lg-5 text-center our-service-leftside-img">
              <img src="./images/hero3.jpg" alt="about-img" />
            </div>
            {/* first section right side content */}
            <div className="col-12 col-lg-7 our-services-list">
              <h3 className="mini-title">
                --AVAILABLE @ GOGGLE AND IOS APP STORE ONLY
              </h3>
              <h1 className="main-heading">How to use the App</h1>
              {aboutData.map((curElem, index) => {
                const { id, title, info } = curElem;
                return (
                  <>
                    <div className="row our-services-info">
                      <div className="col-1 our-services-number">{id}</div>
                      <div className="col-10 our-services-data">
                        <h2>{title}</h2>
                        <p className="main-hero-para">{info}</p>
                      </div>
                    </div>
                  </>
                );
              })}

              <br />
              <button className="btn-style btn-style-border">learn more</button>
            </div>
          </div>
        </div>
      </section>
      {/* 2nd part of about us section */}
      <section className="common-section our-services our-services-rightside">
        <div className="container mb-5">
          <div className="row">
            {/* first section right side content */}
            <div className="col-12 col-lg-7 our-services-rightside-content">
              <h3 className="mini-title">--SUPPORT IN ANY LANGUAGE</h3>
              <h1 className="main-heading">
                World class support available 24/7
              </h1>
              {aboutData.map((curElem, index) => {
                const { id, title, info } = curElem;
                return (
                  <>
                    <div className="row our-services-info">
                      <div className="col-1 our-services-number">{id}</div>
                      <div className="col-10 our-services-data">
                        <h2>{title}</h2>
                        <p className="main-hero-para">{info}</p>
                      </div>
                    </div>
                  </>
                );
              })}

              <br />
              <button className="btn-style btn-style-border">learn more</button>
            </div>
            {/* images section */}
            <div className="col-12 col-lg-5 our-service-rightside-img">
              <img src="./images/callcenter.jpg" alt="about-img" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutUs;
