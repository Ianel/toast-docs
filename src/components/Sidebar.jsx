import React from "react";
import { Link, useLocation } from "react-router-dom";

function Sidebar() {
    const location = useLocation();

    const navItems = [
        { path: "/", label: "Home" },
        { path: "/installation", label: "Installation" },
        { path: "/usage", label: "Usage" },
        { path: "/examples", label: "Examples" },
    ];

    const isActive = (path) => location.pathname === path;

    return (
        <aside className="fixed top-0 left-0 w-64 h-full bg-gray-800 text-white p-6">
            <div className="mb-10">
                <h1 className="text-2xl font-bold text-white">Toast.js</h1>
                <p className="text-gray-300 text-sm">
                    Elegant Vanilla JS Notifications
                </p>
            </div>
            <nav>
                {navItems.map((item) => (
                    <Link
                        key={item.path}
                        to={item.path}
                        className={`block py-2 px-4 rounded transition-colors ${
                            isActive(item.path)
                                ? "bg-gray-700 text-white"
                                : "text-gray-300 hover:bg-gray-700 hover:text-white"
                        }`}
                    >
                        {item.label}
                    </Link>
                ))}
            </nav>
            <div className="absolute bottom-6 left-6 right-6">
                <a
                    href="https://github.com/your-github-repo"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full bg-blue-600 text-white text-center py-2 rounded hover:bg-blue-700 transition-colors"
                >
                    GitHub
                </a>
            </div>
        </aside>
    );
}

export default Sidebar;
