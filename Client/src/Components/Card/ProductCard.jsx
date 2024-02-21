import React from "react";
import "./ProductCard.css";
const ProductCard = ({ productData }) => {
  return (
    <>
      <section id="Product-Container">
        {productData.map((curElem) => {
          const { id, image, name, category, description } = curElem;

          return (
            <>
              <div className="Product-Card" key={id}>
                <div className="Product-Content">
                  <h3 className="Product-Id">{id}</h3>
                  <img src={image} className="img" alt="image"></img>
                  <h3 className="Product-Name">{name}</h3>

                  <h2 className="Product-Category">{category}</h2>
                  <p className="Product-Desc">{description}</p>
                  <button type="button" id="" className="btn">
                    Book Now
                  </button>
                </div>
              </div>
            </>
          );
        })}
      </section>
    </>
  );
};

export default ProductCard;
