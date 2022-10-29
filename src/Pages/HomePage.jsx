import React, { useState, useEffect } from "react";
import PrintItem from "../Components/PrintItem";
import { getNewArrival } from "../Services/newArrivalService";

const HomePage = () => {
  const [getItems, setGetItems] = useState([]);

  useEffect(() => {
    const getNewArrivalItems = async () => {
      const items = await getNewArrival();
      setGetItems(items);
    };

    getNewArrivalItems();
  }, []);

  return (
    <>
      <main className="container mt-2">
        <div className="row">
          <h3 className="text-center my-1">New Arrival</h3>
          <PrintItem getItems={getItems} type={'newArrival'} />
        </div>
      </main>
    </>
  );
};

export default HomePage;
