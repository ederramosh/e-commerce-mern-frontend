import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getGadgetsById } from "../Services/gadgetService";
import { getPCGamerById } from "../Services/gamerService";
import { getLaptopById } from "../Services/laptopService";
import { getNewArrivalById } from "../Services/newArrivalService";
import { getRefurbishedById } from "../Services/refurbishedService";
import { getStreamingById } from "../Services/streamingService";
import { useContext } from "react";
import { UserContext } from "../Context/UserContext";
import { ItemContext } from "../Context/ItemContext";
import moment from "moment";

const ItemDetailPage = () => {
  const {
    user: { idClient },
  } = useContext(UserContext);

  const { saveSale } = useContext(ItemContext);

  const { id } = useParams();
  const { type } = useParams();

  const [item, setItem] = useState({});
  const [flag, setFlag] = useState(false);

  useEffect(() => {
    let result = {};
    const getItemById = async () => {
      switch (type) {
        case "newArrival":
          result = await getNewArrivalById(id);
          setItem(result);
          break;
        case "PCGamer":
          result = await getPCGamerById(id);
          setItem(result);
          break;
        case "Streaming":
          result = await getStreamingById(id);
          setItem(result);
          break;
        case "Gadgets":
          result = await getGadgetsById(id);
          setItem(result);
          break;
        case "Laptop":
          result = await getLaptopById(id);
          setItem(result);
          break;
        case "Refurbished":
          result = await getRefurbishedById(id);
          setItem(result);
          break;
        default:
          console.log("not an option selected");
      }
    };
    getItemById();
  }, [id, type]);

  const addToCart =() => {
    saveSale({
      idClient,
      date: moment().format(),
      name: item.name,
      price: item.price,
      tax: item.price * 0.13,
      total: item.price + item.price * 0.13,
    });
    setFlag(true);
    setTimeout(() => {
      setFlag(false);
    }, 3000);
  }

  return (
    <>
      <section>
        <div className="row">
          <div className="col">
            <h2 className="text-center my-4" name="name">
              {item.name}
            </h2>
          </div>
        </div>
        <div className="row item-detail-container">
          <div className="col-5 mx-5">
            <img
              src={item.itemImage}
              alt={item.name}
              className="img-fluid"
              style={{ width: "35rem" }}
            />
          </div>
          <div className="col-5 mx-5">
            <p className="mb-4 item-detail-description">
              <span className="fw-semibold">Descripción:</span> <br />
              {item.features}
            </p>
            <h3 className=" mb-4" name="price">
              Price: ${item.price.toFixed(2)}
            </h3>
            {flag && (
              <div className="text-center my-4 py-3 px-3 text-center fs-5 text-white bg-success rounded">
                {item.name} Agregado al Carrito
              </div>
            )}
            <button
              className="btn btn-primary btn-lg my-3"
              onClick={addToCart}
            >
              Adjuntar carrito
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default ItemDetailPage;
