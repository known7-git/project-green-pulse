import axios from 'axios';

const API_BASE_URL = 'https://api.example.com/carbon-footprint';

export const fetchFootprintData = async () => {
    try {
        const response = await axios.get(`${API_BASE_URL}/data`);
        return response.data;
    } catch (error) {
        console.error('Error fetching footprint data:', error);
        throw error;
    }
};

export const submitFootprintData = async (data) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/submit`, data);
        return response.data;
    } catch (error) {
        console.error('Error submitting footprint data:', error);
        throw error;
    }
};