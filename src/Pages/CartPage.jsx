import React from "react";
import { useContext } from "react";
import { ItemContext } from "../Context/ItemContext";
import PaypalButtons from "../Components/PaypalButtons";

const CartPage = () => {
  const { sale } = useContext(ItemContext);

  const total = sale.reduce((valorActual, siguienteValor) => {
    return (
      (typeof valorActual === "number" ? valorActual : valorActual.total) +
      siguienteValor.total
    );
  }, 0);

  return (
    <>
      <div className="row">
        <div className="col-8">
          <table className="table">
            <thead>
              <tr>
                <th scope="col">Name</th>
                <th scope="col">Price</th>
                <th scope="col">Tax</th>
                <th scope="col">Total</th>
              </tr>
            </thead>
            <tbody>
              {sale.map((item, index) => (
                <tr key={index}>
                  <th scope="row">{item.name}</th>
                  <td>$ {item.price.toFixed(2)}</td>
                  <td>$ {item.tax.toFixed(2)}</td>
                  <td>$ {item.total.toFixed(2)}</td>
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
          <PaypalButtons currency="USD" amount={total.toFixed(2)}/>
        </div>
      </div>
    </>
  );
};

export default CartPage;
