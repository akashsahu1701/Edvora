import React from "react";

const Filter = ({ productList, stateList, cityList, filterData }) => {
  return (
    <div className="filter-box">
      <div className="col-1">Filter</div>
      <hr className="col-1" style={{ backgroundColor: "#a5a5a5" }} />
      <select
        onChange={(e) => filterData(1, e.target.value)}
        placholder="Select Any Values"
        className="col-2"
      >
        {productList.map((val, index) => (
          <option key={index} value={val}>
            {val}
          </option>
        ))}
      </select>
      <select
        onChange={(e) => filterData(2, e.target.value)}
        placholder="Select Any Values"
        className="col-2"
      >
        {stateList.map((val, index) => (
          <option key={index} value={val}>
            {val}
          </option>
        ))}
      </select>
      <select
        onChange={(e) => filterData(3, e.target.value)}
        placholder="Select Any Values"
        className="col-2"
      >
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
