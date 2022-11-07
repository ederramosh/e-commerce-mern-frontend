import React from "react";
import { NavLink } from "react-router-dom";

const PrintItem = ({ getItems, type }) => {
  return (
    <>
      {getItems.map((item, key) => {
        return (
          <div className="card col-4 px-3 mx-3 my-3" style={{ width: "20rem" }} key={key}>
            <img src={item.itemImage} className="card-img-top mt-3" alt="..." />
            <div className="card-body">
              <h5 className="card-title">{item.name}</h5>
              <p className="card-text">{item.features}</p>
              <p className="card-text fs-5">Precio: ${item.price}</p>
              <div className="text-center">
              <NavLink to={`/item-detail/${item._id}/${type}`} className="btn btn-primary btn-lg my-3">
                Ver Articulo
              </NavLink>
              </div>
            </div>
          </div>
        );
      })}
    </>
  )
};

export default PrintItem;
