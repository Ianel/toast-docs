import React from "react";
import CodeBlock from "../components/CodeBlock";

function Installation() {
    const cdnInstall = `<!-- Add Toast.js to your HTML -->
<script src="https://cdn.example.com/toast.js"></script>

<!-- Or download and include locally -->
<script src="path/to/toast.js"></script>`;

    const npmInstall = `# Coming soon: npm package
npm install toast-js-library`;

    const initCode = `// Create a new ToastManager instance
const toastManager = new ToastManager({
  position: 'bottom-center', // Optional configuration
  duration: 5000,
  maxWidth: 500
});`;

    return (
        <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl font-bold mb-8 text-gray-800">
                Installation
            </h1>

            <section className="mb-12">
                <h2 className="text-2xl font-semibold mb-4 text-gray-700">
                    CDN Usage
                </h2>
                <CodeBlock code={cdnInstall} language="html" />
            </section>

            <section className="mb-12">
                <h2 className="text-2xl font-semibold mb-4 text-gray-700">
                    NPM (Coming Soon)
                </h2>
                <CodeBlock code={npmInstall} language="bash" />
            </section>

            <section>
                <h2 className="text-2xl font-semibold mb-4 text-gray-700">
                    Initialization
                </h2>
                <CodeBlock code={initCode} language="javascript" />
            </section>
        </div>
    );
}

export default Installation;
