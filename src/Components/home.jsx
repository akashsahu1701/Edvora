import React, { useEffect } from "react";
import axios from "axios";
import Filter from "./Filter";
import Product from "./Product";

const Home = () => {
  var Array = [];

  // eslint-disable-next-line
  useEffect(() => {
    const getData = async () => {
      await axios
        .get("https://assessment-edvora.herokuapp.com")
        .then((res) => {
          console.log(res);
          seperateData(res.data);
        })
        .catch((err) => {
          console.error(err);
        });
    };

    const seperateData = (data) => {
      const productNames = new Set();
      data.map((item) => {
        productNames.add(item.product_name);
        return null;
      });
      for (let item of productNames) {
        const result = data.filter((ite) => ite.product_name === item);
        Array.push(result);
      }
    };
    getData();
  }, []);

  return (
    <div className="flex">
      <div className="box-1 p-sm">
        <Filter />
      </div>
      <div className="box-2 p-me ">
        <div
          className="col-2 text-1"
          style={{ fontSize: "5vh", marginTop: "3vh", fontWeight: "500" }}
        >
          Edvora
        </div>
        <div
          className="col-1 text-1"
          style={{ fontSize: "4vh", marginTop: "3vh", fontWeight: "500" }}
        >
          Products
        </div>
        {Array.map((item, index) => (
          <Product key={index} data={item} />
        ))}
      </div>
    </div>
  );
};

export default Home;
