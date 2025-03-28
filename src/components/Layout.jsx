import React from "react";
import { Outlet, Link } from "react-router-dom";
import Sidebar from "./Sidebar";

function Layout() {
    return (
        <div className="flex flex-col md:flex-row min-h-screen bg-gray-100">
            <Sidebar />
            <main className="flex-1 p-4 md:p-10 md:ml-64 bg-white shadow-md overflow-y-auto">
                <Outlet />
            </main>
        </div>
    );
}

export default Layout;
