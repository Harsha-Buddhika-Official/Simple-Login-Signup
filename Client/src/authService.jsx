import axios from 'axios';

export const registerUser = async (userData) => {
    return await axios.post('http://localhost:3000/register', userData);
};