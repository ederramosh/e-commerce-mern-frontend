import { useState, createContext } from "react";

// Create the context for the user
const ItemContext = createContext();

// Let's get a Provider
const { Provider } = ItemContext;

// The context API is a component, so we create a component

const ItemProvider = ({ children }) => {

  const [sale, setSale] = useState([]);
  
  const saveSale = ( newSale ) => {
    setSale([...sale, newSale]);
    //  localStorage.setItem("sale", JSON.stringify(newObj));
  };

  const removeItem = (index) => {
    const copySale = [...sale];
    copySale.splice(index, 1);
    setSale(copySale);
  }

  const removeSale = () => {
    setSale([]);
  };

  // Return the component using Provider
  return (
    <Provider
      value={{
        sale,
        saveSale,
        removeSale,
        removeItem,
      }}
    >
      {children}
    </Provider>
  );
};

//Export the provider and context
export { ItemProvider, ItemContext };
