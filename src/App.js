import AppRouter from './Rourter/AppRouter';
import { useEffect, useContext } from 'react';
import { UserContext } from './Context/UserContext';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';


function App() {
  const { saveToken } = useContext(UserContext);
  useEffect(() => {
    const token = localStorage.getItem('token');
    if(token) {
      saveToken(token);
    }
      // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  

  return (
    <AppRouter />
  );
}

export default App;
