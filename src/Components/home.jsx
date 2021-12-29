import React, { useEffect, useState } from "react";
import axios from "axios";
import Filter from "./Filter";
import Product from "./Product";

const Home = () => {
  const [array, setArray] = useState([]);
  const [productList, setProductList] = useState([]);
  const [stateList, setStateList] = useState([]);
  const [cityList, setCityList] = useState([]);

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
      const stateNames = new Set();
      const cityNames = new Set();

      const temp1 = [];
      const temp2 = [];
      const temp3 = [];

      data.map((item) => {
        productNames.add(item.product_name);
        stateNames.add(item.address.state);
        cityNames.add(item.address.city);
        return null;
      });

      for (let item of productNames) {
        const result = data.filter((ite) => ite.product_name === item);
        temp1.push(item);
        temp.push(result);
      }
      for (let item of stateNames) {
        temp2.push(item);
      }
      for (let item of cityNames) {
        temp3.push(item);
      }
      setProductList(temp1);
      setStateList(temp2);
      setCityList(temp3);
      setArray(temp);
    };

    getData();
  }, []);

  const filterData = (type, query) => {
    var tempData;
    if (type === 1) {
      tempData = array.map((items) =>
        items.filter((item) => item.product_name === query)
      );
    } else if (type === 2) {
      tempData = array.map((items) =>
        items.filter((item) => item.address.state === query)
      );
    } else {
      tempData = array.map((items) =>
        items.filter((item) => item.address.city === query)
      );
    }
    console.log(tempData);
    setArray(tempData);
  };

  return (
    <div className="flex">
      <div className="box-1 p-sm">
        <Filter
          productList={productList}
          stateList={stateList}
          cityList={cityList}
          filterData={filterData}
        />
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
        {array.map((data, index) =>
          data.length !== 0 ? (
            <div style={{ marginTop: "5vh" }} key={index}>
              <Product data={data} index={index} />{" "}
            </div>
          ) : null
        )}
      </div>
    </div>
  );
};

export default Home;
