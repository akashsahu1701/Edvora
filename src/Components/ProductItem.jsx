import React from "react";

const ProductItem = ({ item }) => {
  return (
    <div className="item-box col-1">
      <div className="flex">
        <div>
          <img className="item-images" src={item.image} alt="test" />
        </div>
        <div className="m-t">
          <div
            className="col-2"
            style={{ fontSize: "13px", marginBottom: "1vh" }}
          >
            {item.product_name}
          </div>
          <div style={{ fontSize: "11px", marginBottom: "1vh" }}>
            {item.brand_name}
          </div>
          <div
            className="col-2"
            style={{ fontSize: "12px", marginBottom: "1vh" }}
          >
            $ {item.price}
          </div>
        </div>
      </div>
      <div
        className="flex m-s"
        style={{
          fontSize: "11px",
          padding: "0 10px",
          justifyContent: "space-between",
        }}
      >
        <div>Location</div>
        <div>{item.date.slice(0, 10)}</div>
      </div>
      <div className="m-s" style={{ fontSize: "11px", paddingLeft: "10px" }}>
        {item.discription}
      </div>
    </div>
  );
};

export default ProductItem;
