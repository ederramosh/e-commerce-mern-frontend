import axios from 'axios';

const url = `${process.env.REACT_APP_API_KEY}/v1/`;

export const getRefurbished = async () => {
    try {
        const { data: { details } } = await axios.get(`${url}refurbished/getRefurbished`);
        // console.log(details);
        return details;
    } catch (e) {
        return { error: e.response.data.details };
    }
}


export const getRefurbishedById = async ( id ) => {
    try {
        const { data: { details } } = await axios.get(`${url}refurbished/getRefurbishedById/${id}`);
        // console.log( details );
        return details;
    } catch (e) {
        return { error: e.response.data.details };
    }
}