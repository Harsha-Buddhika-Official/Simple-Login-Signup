import { User } from 'lucide-react';
import { Link } from 'react-router-dom'; 

function Home() {
    return (
        <div className="bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200 min-h-screen flex items-center justify-center">
            <div className="w-full max-w-md p-8 bg-white dark:bg-gray-800 rounded shadow flex flex-col items-center">
                <div className="flex items-center gap-2 mb-8">
                    <User size={32} />
                    <h1 className="text-2xl font-bold">Welcome to SLog</h1>
                </div>
                <p className="mb-8 text-center text-gray-600 dark:text-gray-300">
                    Please choose an option to continue.
                </p>
                <div className="flex flex-col gap-4 w-full">
                    <Link
                        to="/login"
                        className="w-full py-2 px-4 rounded-[10px] bg-blue-600 text-white font-semibold border-2 border-blue-700 hover:bg-blue-700 hover:border-blue-800 transition-colors duration-200 shadow text-center"
                    >
                        Login
                    </Link>
                    <Link
                        to="/signup"
                        className="w-full py-2 px-4 rounded-[10px] bg-gray-200 dark:bg-gray-700 text-blue-700 dark:text-blue-300 font-semibold border-2 border-blue-300 hover:bg-blue-100 dark:hover:bg-gray-600 hover:border-blue-400 transition-colors duration-200 shadow text-center"
                    >
                        Sign Up
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Home;