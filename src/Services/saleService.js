import axios from 'axios';

const url = 'http://localhost:5000/v1/';

export const submitSale = async (sale) => {
    try {
        const { data: { details } } = await axios.post(`${url}sale`, sale, {
            headers: {
                authorization: `Bearer ${localStorage.getItem('token')}`,
            }
        });
        return details;
    } catch (e) {
        return { error: e.response.data.details };
    }
}