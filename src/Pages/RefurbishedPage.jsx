import React, { useState, useEffect } from "react";
import PrintItem from "../Components/PrintItem";
import { getRefurbished } from "../Services/refurbishedService";

const RefurbishedPage = () => {
  const [getItems, setGetItems] = useState([]);

  useEffect(() => {
    const getRefurbishedItems = async () => {
      const items = await getRefurbished();
      setGetItems(items);
    };

    getRefurbishedItems();
  }, []);
  return (
    <>
      <main className="container mt-2">
        <div className="row">
          <h3 className="text-center my-1">Refurbished</h3>
          <PrintItem getItems={getItems} type={"Refurbished"} />
        </div>
      </main>
    </>
  );
};

export default RefurbishedPage;
