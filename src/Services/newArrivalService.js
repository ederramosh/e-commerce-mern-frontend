import axios from 'axios';

const url = `${process.env.REACT_APP_API_KEY}/v1/`;

export const getNewArrival = async () => {
    try {
        const { data: { details } } = await axios.get(`${url}newarrival/getNewArrival`);
        // console.log(details);
        return details;
    } catch (e) {
        return { error: e.response.data.details };
    }
}

export const getNewArrivalById = async ( id ) => {
    try {
        const { data: { details } } = await axios.get(`${url}newarrival/getNewArrivalById/${id}`);
        // console.log( details );
        return details;
    } catch (e) {
        return { error: e.response.data.details };
    }
}