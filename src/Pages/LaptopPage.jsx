import React, { useState, useEffect } from "react";
import PrintItem from "../Components/PrintItem";
import { getLaptop } from "../Services/laptopService";

const LaptopPage = () => {
    const [getItems, setGetItems] = useState([]);

  useEffect(() => {
    const getLaptopItems = async () => {
      const items = await getLaptop();
      setGetItems(items);
    };

    getLaptopItems();
  }, []);
  return (
    <>
      <main className="container mt-2">
        <div className="row text-center main-container">
          <h3 className="text-center my-1">Laptops</h3>
          <PrintItem getItems={getItems} type={'Laptop'} />
        </div>
      </main>
    </>
  )
}

export default LaptopPage