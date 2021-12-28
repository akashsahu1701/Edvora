import React, { useEffect, useState } from "react";
import axios from "axios";
import Filter from "./Filter";
import Product from "./Product";

const Home = () => {
  const [array, setArray] = useState([]);

  useEffect(() => {
    const temp = [];
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
        temp.push(result);
      }
      setArray(temp);
      console.log(temp);
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
        {array.map((data, index) => (
          <div style={{ marginTop: "5vh" }} key={index}>
            <Product data={data} />{" "}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
