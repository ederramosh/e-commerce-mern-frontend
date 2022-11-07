import React, { useState, useEffect } from "react";
import PrintItem from "../Components/PrintItem";
import { getPCGamer } from "../Services/gamerService";

const GamerPage = () => {
  const [getItems, setGetItems] = useState([]);

  useEffect(() => {
    const getPCGamerItems = async () => {
      const items = await getPCGamer();
      setGetItems(items);
    };

    getPCGamerItems();
  }, []);

  return (
    <>
      <main className="container mt-2">
        <div className="row text-center main-container">
          <h3 className="text-center my-1">PC Gamers</h3>
          <PrintItem getItems={getItems} type={'PCGamer'} />
        </div>
      </main>
    </>
  );
};

export default GamerPage;
