import React from "react";
import "./HomeCard.css";

const HomeCard = ({ homeData }) => {
  return (
    <>
      <section className="main-card--cointainer">
        {homeData.map((curElem) => {
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
                  <img src={image} alt="images" className="card-media" />

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

export default HomeCard;
