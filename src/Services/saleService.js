import axios from 'axios';

const url = `${process.env.REACT_APP_API_KEY}/v1/`;

export const submitSale = async (sale) => {
    try {
        const user = JSON.parse(localStorage.getItem('user'));
        const { data: { details } } = await axios.post(`${url}sale`, sale, {
            headers: {
                authorization: `Bearer ${user.newToken}`,
            }
        });
        return details;
    } catch (e) {
        return { error: e.response.data.details };
    }
}