import React, { useState } from "react";
import workapi from "./API/workApi";

const HowItWorks = () => {
  const [workData, setWorkData] = useState(workapi);

  console.log(workData);
  return (
    <>
      <section>
        <div className="work-container container">
          <h1 className="main-heading text-center">How does it Works</h1>
          <div className="row">
            {workData.map((curElement, index) => {
              const { id, logo, title, info } = curElement;
              return (
                <>
                  <div className="col-12 col-lg-4 text-center work-container-subdiv">
                    <i class={`fontawesome-style ${logo}`}></i>
                    <h2 className="sub-heading">{title}</h2>
                    <p className="main-hero-para w-100">{info}</p>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default HowItWorks;
