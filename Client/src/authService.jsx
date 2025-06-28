import axios from 'axios';

export const registerUser = async (userData) => {
    return await axios.post('http://localhost:3001/register', userData);
};