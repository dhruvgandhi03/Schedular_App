/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        anybody: ["Anybody"],
        apple: ["SF Pro Display"],
      },
      colors: {
        boxborder: "#281a29",
      },
    },
  },
  plugins: [],
};
