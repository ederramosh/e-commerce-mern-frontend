import { useState, createContext } from "react";

// Create the context for the user
const UserContext = createContext();

// Let's get a Provider
const { Provider } = UserContext;

// The context API is a component, so we create a component

const UserProvider = ({ children }) => {
    // Create the global status with an useState
    const initialState = {
        token: null,
    }
    const [user, setUser] = useState(initialState);

    // Manage the states
    const saveToken = (newToken) => {
        setUser({
            ...user,
            token: newToken,
        });
        localStorage.setItem("token", newToken);
      }
    
      const removeInfoUser = () => {
        setUser(initialState);
        localStorage.clear();
      };

      // Return the component using Provider
      return (
        <Provider value={{
            user,
            saveToken,
            removeInfoUser,
        }}>
            {children}
        </Provider>
        )
}

//Export the provider and context
export {
    UserProvider,
    UserContext,
};