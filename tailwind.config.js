/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{html,js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                "toast-bg": {
                    default: "hsl(0 0% 100%)",
                    success: "hsl(143.6 64.4% 96.7%)",
                    error: "hsl(359 100% 97.4%)",
                    warning: "hsl(39 100% 96.3%)",
                    info: "hsl(209 95.5% 96.7%)",
                },
                "toast-border": {
                    default: "hsl(214.3 31.8% 91.4%)",
                    success: "hsl(142.1 76.2% 36.3%)",
                    error: "hsl(359 100% 45.5%)",
                    warning: "hsl(38 92.2% 50.2%)",
                    info: "hsl(204 94.4% 52.1%)",
                },
                "toast-text": {
                    default: "hsl(222.2 47.4% 11.2%)",
                    success: "hsl(142.1 76.2% 26.3%)",
                    error: "hsl(359 100% 35.5%)",
                    warning: "hsl(38 92.2% 40.2%)",
                    info: "hsl(204 94.4% 42.1%)",
                },
            },
            boxShadow: {
                toast: "0 4px 6px rgba(0,0,0,0.1)",
            },
            borderRadius: {
                toast: "0.5rem",
            },
        },
    },
    plugins: [],
};
