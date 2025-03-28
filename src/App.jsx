import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Installation from "./pages/Installation";
import Usage from "./pages/Usage";
import Examples from "./pages/Examples";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="installation" element={<Installation />} />
                    <Route path="usage" element={<Usage />} />
                    <Route path="examples" element={<Examples />} />
                </Route>
            </Routes>
        </Router>
    );
}

export default App;
