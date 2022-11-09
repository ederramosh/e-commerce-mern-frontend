import axios from 'axios';

const url = `${process.env.REACT_APP_API_KEY}/v1/`;

export const getPCGamer = async () => {
    try {
        const { data: { details } } = await axios.get(`${url}pcgamer/getPCGamer`);
        // console.log(details);
        return details;
    } catch (e) {
        return { error: e.response.data.details };
    }
}


export const getPCGamerById = async ( id ) => {
    try {
        const { data: { details } } = await axios.get(`${url}pcgamer/getPCGamerById/${id}`);
        // console.log( details );
        return details;
    } catch (e) {
        return { error: e.response.data.details };
    }
}