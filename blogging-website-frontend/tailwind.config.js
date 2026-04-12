/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {

        colors: {
            white: "#242424",
            black: "#F5F5F5",
            grey: "#353535",
            "dark-grey": "#C2C2C2",
            red: "#FF6B6B",
            transparent: "transparent",
            twitter: "#1DA1F2",
            purple: "#C4B5FD"
        },

        fontSize: {
            'sm': '12px',
            'base': '14px',
            'xl': '16px',
            '2xl': '20px',
            '3xl': '28px',
            '4xl': '38px',
            '5xl': '50px',
        },

        extend: {
            fontFamily: {
              inter: ["'Inter'", "sans-serif"],
              gelasio: ["'Gelasio'", "serif"]
            },
        },

    },
    plugins: [],
};
