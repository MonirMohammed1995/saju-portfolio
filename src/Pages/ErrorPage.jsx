import React from "react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <main className="min-h-screen bg-gray-900 flex flex-col justify-center items-center px-6 text-center text-gray-200">
      <h1
        aria-label="Error 404"
        className="text-9xl font-extrabold mb-6 select-none"
        style={{
          background:
            "linear-gradient(90deg, #2563eb, #0891b2, #22d3ee)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        404
      </h1>
      <p className="text-2xl font-semibold mb-4">Oops! Page Not Found.</p>
      <p className="text-gray-400 max-w-md mb-8">
        The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
      </p>
      <Link
        to="/"
        className="inline-block px-8 py-3 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full font-semibold shadow-lg hover:from-blue-700 hover:to-cyan-600 focus:outline-none focus:ring-4 focus:ring-cyan-400 transition-transform transform hover:scale-105"
        aria-label="Go back to home page"
      >
        Go Back Home
      </Link>
    </main>
  );
};

export default ErrorPage;
