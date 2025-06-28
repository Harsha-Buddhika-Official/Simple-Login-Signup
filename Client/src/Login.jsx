import { User } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import React,{useState} from 'react';
import axios from 'axios';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        axios.post('http://localhost:3000/login', { email, password })
            .then(response => {
                console.log('Login successful:', response);
                alert('Login successful!');
                navigate('/home');
            })
            .catch(error => {
                console.error('Login failed:', error);
            });
        console.log('Login attempted with:', { email, password });

    }

    return (
        <div className='bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200'>
            <div className="flex justify-center items-center h-screen">
                <div className="w-full max-w-md p-6 bg-white dark:bg-gray-800 rounded shadow">
                    <div className="flex justify-center items-center gap-2 mb-6">
                        <User />
                        <h1 className="text-xl font-semibold">Login</h1>
                    </div>
                    <form action="" className='flex flex-col gap-4'>
                        <div className="flex flex-col">
                            <label htmlFor="Email" className="mb-1 text-sm">Email</label>
                            <input 
                                type="email" 
                                id="Email" 
                                name="Email" 
                                placeholder='Email'
                                onChange={(e) => setEmail(e.target.value)}
                                required 
                                className="border rounded px-3 py-2 bg-gray-50 dark:bg-gray-700 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>
                        <div className="flex flex-col">
                            <label htmlFor="password" className="mb-1 text-sm">Password</label>
                            <input 
                                type="password" 
                                id="password" 
                                name="password"
                                placeholder='Password'
                                onChange={(e) => setPassword(e.target.value)}
                                required
                                className="border rounded px-3 py-2 bg-gray-50 dark:bg-gray-700 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>
                        <button
                            type="submit"
                            className="self-center max-w-[50%] w-full py-2 px-4 rounded-[10px] bg-blue-600 text-white font-semibold border-2 border-blue-700 hover:bg-blue-700 hover:border-blue-800 transition-colors duration-200 shadow cursor-pointer"
                            onClick={handleLogin}
                            >
                            Login
                        </button>
                    </form>
                    <div className="text-center mt-4">
                        <span className="text-sm">Dont have an account? </span>
                        <Link
                            to="/signup"
                            className="text-blue-600 hover:underline font-medium cursor-pointer"
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