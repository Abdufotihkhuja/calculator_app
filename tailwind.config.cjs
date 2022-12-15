/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                lightBlue: "#ADE2FF",
                mediumBlue: "#2CA8FF",
                btnBlue: "#29A8FF",
                darkBlue: "#109DFF",
                boldBlue: "#007AFF",
                // Dark
                btnDark: "#303136",
                btnDarkBlue: "#005DB2",
                btnDarkGray: "#616161",
                fontGrayColor: "#A5A5A5",

                // Light
                btnLight: "#FFFFFF",
                btnLightBlue: "#005DB2",

                equalBtn: "#1991FF",

                // Inputs
                outputDarkColor: "#FFFFFF",
                outputLightColor: "#424242",

                inputFontColor: "#818181",
                inputIsColor: "#109DFF",
            },
            fontFamily: {
                poppins: ["Poppins", "sans-serif"],
            },
            screens: {
                esm: "320px",
                xbg: "1620px",
            },
        },
    },
    plugins: [],
};
