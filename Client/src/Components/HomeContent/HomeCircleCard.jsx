import React from "react";
import "./HomeCircleCard.css";
const HomeCircleCard = ({ homeCircleData }) => {
  return (
    <>
      <section className="main-circle-card--cointainer">
        {homeCircleData.map((curElem) => {
          const { name, image, description } = curElem;

          return (
            <>
              <div className="card-container">
                <div className="card ">
                  <div className="card-body">
                    <h2 className="card-title"> {name} </h2>
                    <span className="card-description color_lg">
                      {description}
                    </span>
                    <div className="card-more">More</div>
                  </div>
                  <img
                    src={image}
                    alt="images"
                    className="card-media img_circle"
                  />

                  <button className="btn_medium">Explore </button>
                </div>
              </div>
            </>
          );
        })}
      </section>
    </>
  );
};

export default HomeCircleCard;
