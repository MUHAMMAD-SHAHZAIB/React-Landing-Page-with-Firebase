import React, { useState } from "react";
import WorksAPI from "../API/WorkAPI";

const HowItWorks = () => {
  const [WorkItem, SetWorkItem] = useState(WorksAPI);
  return (
    <>
      <section>
        <div className="work-container container">
          <h1 className="main-heading text-center">How Does It Work</h1>
          <div className="row">
            {WorkItem.map(val => {
              const { id, logo, title, info } = val;
              return (
                <div
                  className="col-12 col-lg-4 text-center work-container-subdiv"
                  key={id}
                >
                  <i class={`fontawesome-style ${logo}`}></i>
                  <h2 className="sub-heading">{title}</h2>
                  <p className="main-hero-pera w-100">{info}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default HowItWorks;
