/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          background: "#EDE0D4", // cream
          primary: "#B08968", // lightBrown
          secondary: "#7F5539", // mediumBrown
          text: "#9C6644", // darkBrown
        },
      },
    },
    plugins: [],
  }