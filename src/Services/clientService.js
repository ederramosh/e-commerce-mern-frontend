import axios from 'axios';

const url = `${process.env.REACT_APP_API_KEY}/v1/`;

export const login = async (userInfo) => {
    try {
        const { data } = await axios.post(`${url}client/login`, userInfo);
        return data;
    } catch (e) {
        return { error: e.response.data.details }
    }
}

export const signUp = async (userInfo) => {
    try {
        const { data: { details } } = await axios.post(`${url}client/`, userInfo);
        console.log('impresion desde el signUp');
        console.log(details);
        return details;
    } catch (e) {
        return { error: e.response.data.details };
    }
}

export const findById = async () => {
    try {
        const user = JSON.parse(localStorage.getItem('user'));
        const { data: { details } } = await axios.get(`${url}client/findById`, {
            headers: {

                authorization: `Bearer ${user.newToken}`,
            }
        });
        return details;
    } catch (e) {
        return { error: e.response.data.details }
    }
}

export const updateClientInfo = async (body) => {
    try {
        const user = JSON.parse(localStorage.getItem('user'));
        const { data: { details } } = await axios.put(`${url}client/updateByEmail`, body , {
            headers: {
                authorization: `Bearer ${user.newToken}`,
            }
        });
        return details;
    } catch (e) {
        
    }
}