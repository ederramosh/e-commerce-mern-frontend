import axios from 'axios';

const url = 'http://localhost:5000/v1/';

export const login = async (userInfo) => {  
    const result = await axios.post(`${url}client/login`, userInfo);
    return result;
}
