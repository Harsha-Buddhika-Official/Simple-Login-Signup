export default function Home() {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 max-w-md w-full">
                <h1 className="text-2xl font-bold text-center mb-6 text-gray-800 dark:text-gray-200">Welcome Home</h1>
                <p className="text-center text-gray-600 dark:text-gray-400">This is the home page after successful login.</p>
            </div>
        </div>
    );
}