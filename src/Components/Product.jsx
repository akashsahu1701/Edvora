import React from "react";
import arrow from "../Assets/arrow.png";
import ProductItem from "./ProductItem";

const Product = ({ data }) => {
  const scroll = () => {
    document.getElementById("container").scrollLeft += 40;
  };
  return (
    <div>
      <div
        className="col-1 text-1"
        style={{ fontSize: "3vh", marginTop: "3vh", fontWeight: "500" }}
      >
        Product Name
      </div>
      <hr
        className="col-1"
        style={{
          width: "94%",
          marginLeft: "2px",
          backgroundColor: "rgba(203, 203, 203, 0.5)",
        }}
      />
      <div className="flex">
        <div id="container" className="product-box flex">
          {data.map((item, index) => (
            <div className="col-2" key={index}>
              <ProductItem item={item} />
            </div>
          ))}
        </div>
        <div className="arrow">
          <img onClick={() => scroll()} src={arrow} alt="next" />{" "}
        </div>
      </div>
    </div>
  );
};

export default Product;