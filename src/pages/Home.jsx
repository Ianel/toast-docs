import React from "react";
import { Link } from "react-router-dom";

function Home() {
    return (
        <div className="max-w-4xl mx-auto px-4">
            <div className="text-center mb-16">
                <h1 className="text-3xl md:text-5xl font-bold mb-4 text-gray-800">
                    Toast.js
                </h1>
                <p className="text-base md:text-xl text-gray-600 mb-8">
                    A lightweight, customizable toast notification library for
                    Vanilla JavaScript
                </p>
                <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
                    <Link
                        to="/installation"
                        className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
                    >
                        Get Started
                    </Link>
                    <a
                        href="https://github.com/Ianel/js-toast"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="border border-blue-600 text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-50 transition-colors"
                    >
                        View on GitHub
                    </a>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="bg-white p-6 rounded-lg shadow-md">
                    <h2 className="text-xl md:text-2xl font-semibold mb-4 text-gray-800">
                        Lightweight
                    </h2>
                    <p className="text-base text-gray-600">
                        Minimal footprint, no dependencies, pure Vanilla
                        JavaScript implementation.
                    </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                    <h2 className="text-xl md:text-2xl font-semibold mb-4 text-gray-800">
                        Customizable
                    </h2>
                    <p className="text-base text-gray-600">
                        Multiple positioning options, custom styling, and easy
                        configuration.
                    </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                    <h2 className="text-xl md:text-2xl font-semibold mb-4 text-gray-800">
                        Responsive
                    </h2>
                    <p className="text-base text-gray-600">
                        Built-in mobile responsiveness with adaptive layouts.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Home;
