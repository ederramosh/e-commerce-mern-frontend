import React from "react";
import { useContext } from "react";
import { ItemContext } from "../Context/ItemContext";
import PaypalButtons from "../Components/PaypalButtons";

import trash from "./images/trash-icon.png";
import { NavLink } from "react-router-dom";

const CartPage = () => {
  const { sale, removeItem } = useContext(ItemContext);

  const total = sale.reduce((valorActual, siguienteValor) => {
    return (
      (typeof valorActual === "number" ? valorActual : valorActual.total) +
      siguienteValor.total
    );
  }, 0);

  return (
    <>
      {sale.length === 0 ? (
        <div className="row my-5">
          <div className="col text-center fs-2">
            There are no items in the cart
          </div>
        </div>
      ) : (
        <div className="row">
          <div className="col-8">
            <table className="table">
              <thead>
                <tr className="text-center">
                  <th scope="col">Name</th>
                  <th scope="col">Price</th>
                  <th scope="col">Tax</th>
                  <th scope="col">Total</th>
                  <th scope="col">Remove</th>
                </tr>
              </thead>
              <tbody>
                {sale.map((item, index) => (
                  <tr key={index}>
                    <th scope="row">{item.name}</th>
                    <td>$ {item.price.toFixed(2)}</td>
                    <td>$ {item.tax.toFixed(2)}</td>
                    <td>$ {item.total.toFixed(2)}</td>
                    <td>
                      <NavLink
                        onClick={() => {
                          removeItem(item.id);
                        }}
                      >
                        <div className="text-center">
                          <img
                            src={trash}
                            alt="Remove"
                            className="mx-auto"
                            style={{ width: "2rem" }}
                          />
                        </div>
                      </NavLink>
                    </td>
                  </tr>
                ))}
                <tr className="fw-bold">
                  <td colSpan={3}>Total</td>
                  <td colSpan={2}>$ {total.toFixed(2)}</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="col-4">
            <PaypalButtons currency="USD" amount={total.toFixed(2)} />
          </div>
        </div>
      )}
    </>
  );
};

export default CartPage;
