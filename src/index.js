import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ItemProvider } from "./Context/ItemContext";
import { UserProvider } from "./Context/UserContext";
import { PayPalScriptProvider } from "@paypal/react-paypal-js";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <UserProvider>
    <ItemProvider>
      <PayPalScriptProvider
        options={{
          "client-id":
            "AX3xOy8eihMKZggRwZ-wzo4B6Dbo59WTOIIpQxFzqGrKnGDhQkELIvdtojkU3RN79YsdQAgsOZNBt2F1",
            currency: "USD"
        }}
      >
        <App />
      </PayPalScriptProvider>
    </ItemProvider>
  </UserProvider>
);
