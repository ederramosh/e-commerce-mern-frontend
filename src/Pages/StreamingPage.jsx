import React, { useState, useEffect } from 'react'
import PrintItem from "../Components/PrintItem";
import { getStreaming } from "../Services/streamingService";

const StreamingPage = () => {
    const [getItems, setGetItems] = useState([]);

    useEffect(() => {
      const getStreamingItems = async () => {
        const items = await getStreaming();
        setGetItems(items);
      };
  
      getStreamingItems();
    }, []);
    return (
        <>
        <main className="container mt-2">
          <div className="row">
            <h3 className="text-center my-1">Streaming Equipment</h3>
            <PrintItem getItems={getItems} type={'Streaming'} />
          </div>
        </main>
      </>
  )
}

export default StreamingPage