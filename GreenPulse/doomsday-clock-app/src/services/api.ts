import axios from 'axios';

const API_URL = 'https://api.climatechange.com/doomsday'; // Replace with the actual API endpoint

export const fetchDoomsdayData = async () => {
    try {
        const response = await axios.get(API_URL);
        return response.data;
    } catch (error) {
        console.error('Error fetching doomsday data:', error);
        throw error;
    }
};