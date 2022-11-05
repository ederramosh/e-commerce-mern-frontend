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

  return (
    <>
      <section>
        <div className="row">
          <div className="col">
            <h2 className="text-center mb-4" name="name">{item.name}</h2>
          </div>
        </div>
        <div className="row">
          <div className="col-6 mx-5">
            <img
              src={item.itemImage}
              alt={item.name}
              style={{ width: "45rem" }}
            />
          </div>
          <div className="col-4 mx-5">
            <p className="fs-4 mb-4">
              <span className="fw-semibold">Descripción:</span> <br />
              {item.features}
            </p>
            <h3 className=" mb-4" name="price">Price: ${item.price}</h3>
            <button className="btn btn-primary btn-lg my-3" onClick={() => {
              saveSale({
                idClient,
                date: moment().format(),
                name: item.name,
                price: item.price,
                tax: item.price * 0.13,
                total: item.price + (item.price * 0.13)
            })
            }}>
              Adjuntar carrito
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default ItemDetailPage;
