import React from "react";
import CodeBlock from "../components/CodeBlock";
import DemoSection from "../components/DemoSection";

function Usage() {
    const basicUsageCode = `// Create a ToastManager instance
const toast = new ToastManager();

// Show different types of toasts
toast.success('Operation successful!');
toast.error('Something went wrong');
toast.warning('Proceed with caution');
toast.info('Important information');

// Custom toast with options
toast.show('Custom message', {
  type: 'default',
  title: 'Custom Title',
  duration: 3000 // 3 seconds
});`;

    const configOptionsCode = `// Customize ToastManager globally
const toast = new ToastManager({
  position: 'top-right',     // Toast position
  duration: 5000,            // Default display time (ms)
  gap: 12,                   // Space between toasts
  zIndex: 9999,              // Z-index of toast container
  maxWidth: 500,             // Maximum toast width
  minWidth: 280,             // Minimum toast width
  mobileMaxWidth: '95%'      // Mobile max width
});`;

    const positionOptions = [
        "top-left",
        "top-center",
        "top-right",
        "bottom-left",
        "bottom-center",
        "bottom-right",
    ];

    return (
        <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl font-bold mb-8 text-gray-800">
                Usage Guide
            </h1>

            <section className="mb-12">
                <h2 className="text-2xl font-semibold mb-4 text-gray-700">
                    Basic Usage
                </h2>
                <CodeBlock code={basicUsageCode} language="javascript" />
            </section>

            <section className="mb-12">
                <h2 className="text-2xl font-semibold mb-4 text-gray-700">
                    Configuration Options
                </h2>
                <CodeBlock code={configOptionsCode} language="javascript" />

                <div className="mt-6">
                    <h3 className="text-xl font-semibold mb-4 text-gray-700">
                        Positioning Options
                    </h3>
                    <div className="grid grid-cols-3 gap-4">
                        {positionOptions.map((position) => (
                            <div
                                key={position}
                                className="bg-gray-100 p-3 rounded text-center"
                            >
                                {position}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <DemoSection />
        </div>
    );
}

export default Usage;
