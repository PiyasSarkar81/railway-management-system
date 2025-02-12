import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_BACKEND_URL || 'http://localhost:5000/api';

export const registerUser = async (userData) => {
    return axios.post(`${API_BASE_URL}/auth/register`, userData);
};

export const loginUser = async (credentials) => {
    return axios.post(`${API_BASE_URL}/auth/login`, credentials);
};



export const addTrain = async (trainData, token) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/trains`, trainData, {
            headers: {
                'x-api-key': import.meta.env.VITE_ADMIN_API_KEY, // Ensure this matches the backend API key
                Authorization: `Bearer ${token}`, // Ensure the token is valid
            },
        });
        return response;
    } catch (error) {
        console.error('Error adding train:', error); // Log the error for debugging
        throw error;
    }
};

export const getTrains = async (source, destination) => {
    try {
        const response = await axios.get(`${API_BASE_URL}/trains`, {
            params: { source, destination },
        });
        return response;
    } catch (error) {
        throw error;
    }
};


export const bookSeat = async (bookingData, token) => {
    try {
        console.log('Booking API URL:', `${API_BASE_URL}/bookings`); // Debug log
        const response = await axios.post(`${API_BASE_URL}/bookings`, bookingData, {
            headers: { Authorization: `Bearer ${token}` },
        });
        return response;
    } catch (error) {
        console.error('Booking API Error:', error); // Debug log
        throw error;
    }
};