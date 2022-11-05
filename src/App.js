import AppRouter from './Rourter/AppRouter';
import { useEffect, useContext } from 'react';
import { UserContext } from './Context/UserContext';
// import { ItemContext } from './Context/ItemContext';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';


function App() {
  const { saveToken } = useContext(UserContext);
  // const { saveSale, sale } = useContext(ItemContext);

  useEffect(() => {
    const lsUser = JSON.parse(localStorage.getItem('user'));
    if(lsUser?.newToken) {
      const { newToken, newFirstname, newLastname, newRol, newId } = lsUser;
      saveToken(newToken, newFirstname, newLastname, newRol, newId);
    }
      // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  
  // useEffect(() => {
  //   const lsSale = JSON.parse(localStorage.getItem('sale'));
    
  //   if(lsSale?.date) {
  //     saveSale(lsSale);
  //   }
  //   console.log(sale);
  //     // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);

  return (
    <AppRouter />
  );
}

export default App;
