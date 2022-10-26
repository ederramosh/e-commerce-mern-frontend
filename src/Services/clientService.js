import axios from 'axios';

const url = 'http://localhost:5000/v1/';

export const login = async (userInfo) => {
    try {
        const { data } = await axios.post(`${url}client/login`, userInfo);
        return data;
    } catch (e) {
        return { error: e.response.data.details }
    }
}

export const findById = async () => {
    try {
        const { data: { details } } = await axios.get(`${url}client/findById`, {
            headers: {
                authorization: `Bearer ${localStorage.getItem('token')}`,
            }
        });
        return details;
    } catch (e) {
        return { error: e.response.data.details }
    }
}