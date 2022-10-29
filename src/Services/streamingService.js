import axios from 'axios';

const url = 'http://localhost:5000/v1/';

export const getStreaming = async () => {
    try {
        const { data: { details } } = await axios.get(`${url}streamingequipment/getStreamingEquipment`);
        console.log(details);
        return details;
    } catch (e) {
        return { error: e.response.data.details };
    }
}

export const getStreamingById = async ( id ) => {
    try {
        const { data: { details } } = await axios.get(`${url}streamingequipment/getStreamingEquipmentById/${id}`);
        console.log( details );
        return details;
    } catch (e) {
        return { error: e.response.data.details };
    }
}