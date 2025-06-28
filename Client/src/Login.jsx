import { User } from 'lucide-react';
import { Link } from 'react-router-dom';

function Login() {
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
                                required 
                                placeholder='Email'
                                className="border rounded px-3 py-2 bg-gray-50 dark:bg-gray-700 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>
                        <div className="flex flex-col">
                            <label htmlFor="password" className="mb-1 text-sm">Password</label>
                            <input 
                                type="password" 
                                id="password" 
                                name="password"
                                required
                                placeholder='Password' 
                                className="border rounded px-3 py-2 bg-gray-50 dark:bg-gray-700 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>
                        <button
                            type="submit"
                            className="self-center max-w-[50%] w-full py-2 px-4 rounded-[10px] bg-blue-600 text-white font-semibold border-2 border-blue-700 hover:bg-blue-700 hover:border-blue-800 transition-colors duration-200 shadow cursor-pointer"
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