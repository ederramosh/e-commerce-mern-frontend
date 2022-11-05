import { useEffect } from "react";
import { usePayPalScriptReducer, PayPalButtons } from "@paypal/react-paypal-js";
import { useContext } from "react";
import { ItemContext } from "../Context/ItemContext";
import { submitSale } from "../Services/saleService";

// Custom component to wrap the PayPalButtons and handle currency changes
const PaypalButtons = ({ currency, amount }) => {
  const { sale, removeSale } = useContext(ItemContext);
  
  const style = { layout: "vertical" };
  // usePayPalScriptReducer can be use only inside children of PayPalScriptProviders
  // This is the main reason to wrap the PayPalButtons in a new component
  const [{ options, isPending }, dispatch] = usePayPalScriptReducer();

  const saleHandler = async () => {

    const saleRequest = {
      idClient: sale[0].idClient,
      date: sale[0].date,
      purchase: sale.map((item) => {
        return ({
          name: item.name,
          price: item.price.toFixed(2),
          tax: item.tax.toFixed(2),
          total: item.total.toFixed(2),
        });
      }),
    };

    await submitSale(saleRequest);
    removeSale();
  }

  useEffect(() => {
    dispatch({
      type: "resetOptions",
      value: {
        ...options,
        currency: currency,
      },
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currency]);

  return (
    <>
      {isPending && <div className="spinner" />}
      <PayPalButtons
        style={style}
        disabled={false}
        forceReRender={[amount, currency, style]}
        fundingSource={undefined}
        createOrder={(data, actions) => {
          return actions.order
            .create({
              purchase_units: [
                {
                  amount: {
                    currency_code: currency,
                    value: amount,
                  },
                },
              ],
            })
            .then((orderId) => {
              // Your code here after create the order
              console.log("Order ID es: ", orderId);
              return orderId;
            });
        }}
        onApprove={function (data, actions) {
          //Here you can store in the API the sales and clean the cart
          
          return actions.order.capture().then(function () {
            // Your code here after capture the order
            saleHandler();
          });
        }}
      />
    </>
  );
};

export default PaypalButtons;
