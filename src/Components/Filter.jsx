import React, { useState } from "react";

const Filter = ({ productList, stateList, cityList, filterData }) => {
  const [products, setProducts] = useState("");
  const [state, setState] = useState("");
  const [city, setCity] = useState("");
  return (
    <div className="filter-box">
      <div className="col-1">Filter</div>
      <hr className="col-1" style={{ backgroundColor: "#a5a5a5" }} />
      <select
        onChange={(e) => {
          filterData(1, e.target.value);
          setProducts(e.target.value);
          setState("");
          setCity("");
        }}
        className="col-2"
        value={products}
      >
        <option value="">Products</option>
        {productList.map((val, index) => (
          <option key={index} value={val}>
            {val}
          </option>
        ))}
      </select>
      <select
        value={state}
        onChange={(e) => {
          filterData(2, e.target.value);
          setState(e.target.value);
          setProducts("");
          setCity("");
        }}
        className="col-2"
      >
        <option value="">States</option>
        {stateList.map((val, index) => (
          <option key={index} value={val}>
            {val}
          </option>
        ))}
      </select>
      <select
        value={city}
        onChange={(e) => {
          filterData(3, e.target.value);
          setCity(e.target.value);
          setProducts("");
          setState("");
        }}
        className="col-2"
      >
        <option value="">City</option>
        {cityList.map((val, index) => (
          <option key={index} value={val}>
            {val}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Filter;
