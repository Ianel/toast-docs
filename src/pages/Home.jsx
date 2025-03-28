import React from "react";
import { Link } from "react-router-dom";

function Home() {
    return (
        <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
                <h1 className="text-5xl font-bold mb-4 text-gray-800">
                    Toast.js
                </h1>
                <p className="text-xl text-gray-600 mb-8">
                    A lightweight, customizable toast notification library for
                    Vanilla JavaScript
                </p>
                <div className="flex justify-center space-x-4">
                    <Link
                        to="/installation"
                        className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
                    >
                        Get Started
                    </Link>
                    <a
                        href="https://github.com/your-github-repo"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="border border-blue-600 text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-50 transition-colors"
                    >
                        View on GitHub
                    </a>
                </div>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
                <div className="bg-white p-6 rounded-lg shadow-md">
                    <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                        Lightweight
                    </h2>
                    <p className="text-gray-600">
                        Minimal footprint, no dependencies, pure Vanilla
                        JavaScript implementation.
                    </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                    <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                        Customizable
                    </h2>
                    <p className="text-gray-600">
                        Multiple positioning options, custom styling, and easy
                        configuration.
                    </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                    <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                        Responsive
                    </h2>
                    <p className="text-gray-600">
                        Built-in mobile responsiveness with adaptive layouts.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Home;
