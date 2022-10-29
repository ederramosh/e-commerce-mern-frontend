import axios from 'axios';

const url = 'http://localhost:5000/v1/';

export const getGadgets = async () => {
    try {
        const { data: { details } } = await axios.get(`${url}gadgets/getGadgets`);
        console.log(details);
        return details;
    } catch (e) {
        return { error: e.response.data.details };
    }
}


export const getGadgetsById = async ( id ) => {
    try {
        const { data: { details } } = await axios.get(`${url}gadgets/getGadgetsById/${id}`);
        console.log( details );
        return details;
    } catch (e) {
        return { error: e.response.data.details };
    }
}