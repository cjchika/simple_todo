/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    colors: {
      white: "#ffffffff",
      slate: "#1e293b",
      ash: "#ccc",
      btn_dis: "#666666",
      red: "#dc2626",
      lite_red: "#fbdada",
      lite_green: "#eff7f1",
      emerald: {
        400: "#34d399",
        500: "#10b981",
      },
    },
  },
  plugins: [],
};
