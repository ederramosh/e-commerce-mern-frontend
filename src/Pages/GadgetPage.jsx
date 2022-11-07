import React, { useState, useEffect } from "react";
import PrintItem from "../Components/PrintItem";
import { getGadgets } from "../Services/gadgetService";

const GadgetPage = () => {
  const [getItems, setGetItems] = useState([]);

  useEffect(() => {
    const getGadgetsItems = async () => {
      const items = await getGadgets();
      setGetItems(items);
    };

    getGadgetsItems();
  }, []);

  return (
    <>
      <main className="container mt-2">
        <div className="row text-center main-container">
          <h3 className="text-center my-1">Gadgets</h3>
          <PrintItem getItems={getItems} type={"Gadgets"} />
        </div>
      </main>
    </>
  );
};

export default GadgetPage;