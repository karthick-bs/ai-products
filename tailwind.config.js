export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      transitionProperty: {
        width: "width",
        height: "height",
        spacing: "margin, padding",
      },
      
    },
  },
  plugins: [],
};
