import React, { useEffect, useState } from "react";
import CodeBlock from "./CodeBlock";

function DemoSection() {
    const [toastManager, setToastManager] = useState(null);
    const [position, setPosition] = useState("bottom-center");
    const [duration, setDuration] = useState(5000);

    useEffect(() => {
        // Dynamically load toast.js
        const script = document.createElement("script");
        script.src = "/toast.js";
        script.async = true;
        script.onload = () => {
            const manager = new ToastManager({
                position: position,
                duration: duration,
            });
            setToastManager(manager);
        };
        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        };
    }, [position, duration]);

    const showToast = (type) => {
        if (toastManager) {
            switch (type) {
                case "success":
                    toastManager.success("Operation completed successfully!", {
                        title: "Success",
                    });
                    break;
                case "error":
                    toastManager.error("An error occurred", { title: "Error" });
                    break;
                case "warning":
                    toastManager.warning("Proceed with caution", {
                        title: "Warning",
                    });
                    break;
                case "info":
                    toastManager.info("Here's some information", {
                        title: "Info",
                    });
                    break;
                default:
                    toastManager.show("Default toast message", {
                        title: "Default",
                    });
            }
        }
    };

    const positionOptions = [
        "top-left",
        "top-center",
        "top-right",
        "bottom-left",
        "bottom-center",
        "bottom-right",
    ];

    return (
        <section className="mt-12 px-4">
            <h2 className="text-2xl font-semibold mb-6 text-gray-700">
                Interactive Demo
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div>
                    <h3 className="text-lg font-semibold mb-4">
                        Toast Configuration
                    </h3>
                    <div className="space-y-4">
                        <div>
                            <label className="block mb-2">Position</label>
                            <select
                                value={position}
                                onChange={(e) => setPosition(e.target.value)}
                                className="w-full p-2 border rounded"
                            >
                                {positionOptions.map((pos) => (
                                    <option key={pos} value={pos}>
                                        {pos}
                                    </option>
                                ))}
                            </select>
                        </div>

                        <div>
                            <label className="block mb-2">Duration (ms)</label>
                            <input
                                type="number"
                                value={duration}
                                onChange={(e) =>
                                    setDuration(Number(e.target.value))
                                }
                                className="w-full p-2 border rounded"
                                min="1000"
                                max="10000"
                            />
                        </div>
                    </div>
                </div>

                <div>
                    <h3 className="text-lg font-semibold mb-4">Toast Types</h3>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                        {["default", "success", "error", "warning", "info"].map(
                            (type) => (
                                <button
                                    key={type}
                                    onClick={() => showToast(type)}
                                    className={`
                  px-4 py-2 rounded text-white capitalize text-sm
                  ${type === "default" && "bg-gray-500"}
                  ${type === "success" && "bg-green-500"}
                  ${type === "error" && "bg-red-500"}
                  ${type === "warning" && "bg-yellow-500"}
                  ${type === "info" && "bg-blue-500"}
                  hover:opacity-90 transition-opacity
                `}
                                >
                                    {type}
                                </button>
                            )
                        )}
                    </div>
                </div>
            </div>

            <div className="mt-8">
                <h3 className="text-lg font-semibold mb-4">Code Example</h3>
                <CodeBlock
                    code={`// Configure ToastManager
const toast = new ToastManager({
  position: '${position}',
  duration: ${duration}
});

// Show a toast
toast.success('Operation completed!', { 
  title: 'Success' 
});`}
                    language="javascript"
                />
            </div>
        </section>
    );
}

export default DemoSection;
