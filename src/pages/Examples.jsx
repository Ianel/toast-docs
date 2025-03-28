import React, { useEffect, useRef } from "react";
import CodeBlock from "../components/CodeBlock";

function Examples() {
    const toastManagerRef = useRef(null);

    useEffect(() => {
        const script = document.createElement("script");
        script.src = "/toast.js";
        script.async = true;
        script.onload = () => {
            toastManagerRef.current = new ToastManager();
        };
        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        };
    }, []);

    const showToast = (type) => {
        if (toastManagerRef.current) {
            switch (type) {
                case "success":
                    toastManagerRef.current.success(
                        "Operation completed successfully!"
                    );
                    break;
                case "error":
                    toastManagerRef.current.error("Something went wrong.");
                    break;
                case "warning":
                    toastManagerRef.current.warning("Proceed with caution.");
                    break;
                case "info":
                    toastManagerRef.current.info(
                        "Here's some important information."
                    );
                    break;
                default:
                    toastManagerRef.current.show("Default toast message");
            }
        }
    };

    const toastCode = `// Basic usage
const toast = new ToastManager();

// Success toast
toast.success('Operation completed!');

// Error toast
toast.error('Something went wrong');

// Warning toast
toast.warning('Be careful');

// Info toast
toast.info('Important information');`;

    return (
        <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl font-bold mb-8 text-gray-800">Examples</h1>

            <section className="mb-12">
                <h2 className="text-2xl font-semibold mb-4 text-gray-700">
                    Basic Usage
                </h2>
                <CodeBlock code={toastCode} language="javascript" />
            </section>

            <section>
                <h2 className="text-2xl font-semibold mb-4 text-gray-700">
                    Live Demonstrations
                </h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {["default", "success", "error", "warning", "info"].map(
                        (type) => (
                            <button
                                key={type}
                                onClick={() => showToast(type)}
                                className={`px-4 py-2 rounded text-white capitalize 
                ${type === "default" && "bg-gray-500"}
                ${type === "success" && "bg-green-500"}
                ${type === "error" && "bg-red-500"}
                ${type === "warning" && "bg-yellow-500"}
                ${type === "info" && "bg-blue-500"}
                hover:opacity-90 transition-opacity`}
                            >
                                {type} Toast
                            </button>
                        )
                    )}
                </div>
            </section>
        </div>
    );
}

export default Examples;
