import { User } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
import axios from 'axios';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        setError('');
        axios.post('http://localhost:3000/login', { email, password })
            .then(response => {
                if (response.data.success) {
                    alert('Login successful!');
                    navigate('/home');
                } else {
                    setError(response.data.message || 'Login failed.');
                }
            })
            .catch(error => {
                if (error.response && error.response.data && error.response.data.message) {
                    setError(error.response.data.message);
                } else {
                    setError('An error occurred. Please try again.');
                }
            });
    }

    return (
        <div className='bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200 min-h-screen px-2 sm:px-0'>
            <div className="flex justify-center items-center min-h-screen">
                <div className="w-full max-w-xs sm:max-w-md p-4 sm:p-6 bg-white dark:bg-gray-800 rounded shadow">
                    <div className="flex justify-center items-center gap-2 mb-4 sm:mb-6">
                        <User />
                        <h1 className="text-lg sm:text-xl font-semibold">Login</h1>
                    </div>
                    {error && (
                        <div className="mb-2 sm:mb-4 text-red-600 text-center font-medium text-sm sm:text-base">{error}</div>
                    )}
                    <form action="" className='flex flex-col gap-3 sm:gap-4'>
                        <div className="flex flex-col">
                            <label htmlFor="Email" className="mb-1 text-xs sm:text-sm">Email</label>
                            <input 
                                type="email" 
                                id="Email" 
                                name="Email" 
                                placeholder='Email'
                                onChange={(e) => setEmail(e.target.value)}
                                required 
                                className="border rounded px-3 py-2 bg-gray-50 dark:bg-gray-700 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                            />
                        </div>
                        <div className="flex flex-col">
                            <label htmlFor="password" className="mb-1 text-xs sm:text-sm">Password</label>
                            <input 
                                type="password" 
                                id="password" 
                                name="password"
                                placeholder='Password'
                                onChange={(e) => setPassword(e.target.value)}
                                required
                                className="border rounded px-3 py-2 bg-gray-50 dark:bg-gray-700 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                            />
                        </div>
                        <button
                            type="submit"
                            className="self-center w-full max-w-[70%] sm:max-w-[50%] py-2 px-4 rounded-[10px] bg-blue-600 text-white font-semibold border-2 border-blue-700 hover:bg-blue-700 hover:border-blue-800 transition-colors duration-200 shadow cursor-pointer text-sm sm:text-base"
                            onClick={handleLogin}
                            >
                            Login
                        </button>
                    </form>
                    <div className="text-center mt-3 sm:mt-4">
                        <span className="text-xs sm:text-sm">Dont have an account? </span>
                        <Link
                            to="/signup"
                            className="text-blue-600 hover:underline font-medium cursor-pointer text-xs sm:text-sm"
                        >
                            Sign Up
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;