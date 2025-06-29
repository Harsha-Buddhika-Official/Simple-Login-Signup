import React, { useState } from 'react';
import { User } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { registerUser } from './authService';

function SignUp() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await registerUser({ name, email, password });
            if (response.data) {
                alert('Registration successful!');
                navigate('/login');
            } else {
                alert('Registration failed. Please try again.');
            }
        } catch (error) {
            console.error('Registration error:', error);
            alert('Registration failed. Please try again.');
        }
    };

    return (
        <div className='bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200 min-h-screen px-2 sm:px-0'>
            <div className="flex justify-center items-center min-h-screen">
                <div className="w-full max-w-xs sm:max-w-md p-4 sm:p-6 bg-white dark:bg-gray-800 rounded shadow">
                    <div className="flex justify-center items-center gap-2 mb-4 sm:mb-6">
                        <User />
                        <h1 className="text-lg sm:text-xl font-semibold">Sign Up</h1>
                    </div>
                    <form onSubmit={handleSubmit} className='flex flex-col gap-3 sm:gap-4'>
                        <div className="flex flex-col">
                            <label htmlFor="FullName" className="mb-1 text-xs sm:text-sm">Name</label>
                            <input 
                                type="text" 
                                id="FullName" 
                                name="FullName" 
                                placeholder='Full Name'
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                required 
                                className="border rounded px-3 py-2 bg-gray-50 dark:bg-gray-700 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                            />
                        </div>
                        <div className="flex flex-col">
                            <label htmlFor="Email" className="mb-1 text-xs sm:text-sm">Email</label>
                            <input 
                                type="email" 
                                id="Email" 
                                name="Email" 
                                placeholder='Email'
                                value={email}
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
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                                className="border rounded px-3 py-2 bg-gray-50 dark:bg-gray-700 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                            />
                        </div>
                        <button
                            type="submit"
                            className="self-center w-full max-w-[70%] sm:max-w-[50%] py-2 px-4 rounded-[10px] bg-blue-600 text-white font-semibold border-2 border-blue-700 hover:bg-blue-700 hover:border-blue-800 transition-colors duration-200 shadow cursor-pointer text-sm sm:text-base"
                        >
                            Submit
                        </button>
                        <div className="text-center mt-3 sm:mt-4">
                            <span className="text-xs sm:text-sm">Already have an account? </span>
                            <Link
                                to="/login"
                                className="text-blue-600 hover:underline font-medium cursor-pointer text-xs sm:text-sm"
                            >
                                Log in
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default SignUp;