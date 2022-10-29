import axios from 'axios';

const url = 'http://localhost:5000/v1/';

export const getLaptop = async () => {
    try {
        const { data: { details } } = await axios.get(`${url}laptop/getLaptop`);
        console.log(details);
        return details;
    } catch (e) {
        return { error: e.response.data.details };
    }
}


export const getLaptopById = async ( id ) => {
    try {
        const { data: { details } } = await axios.get(`${url}laptop/getLaptopById/${id}`);
        console.log( details );
        return details;
    } catch (e) {
        return { error: e.response.data.details };
    }
}