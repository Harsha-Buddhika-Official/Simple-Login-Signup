export default function Home() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900 px-2 sm:px-0">
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4 sm:p-8 w-full max-w-sm sm:max-w-md">
        <h1 className="text-xl sm:text-2xl font-bold text-center mb-4 sm:mb-6 text-gray-800 dark:text-gray-200">
          Welcome Home
        </h1>
        <p className="text-center text-gray-600 dark:text-gray-400 text-sm sm:text-base">
          This is the home page after successful login.
        </p>
      </div>
    </div>
  );
}
