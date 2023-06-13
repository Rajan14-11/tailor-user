const { defaultHead } = require('next/head');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "login-gradient":
          "radial-gradient(circle, rgba(93,114,149,1) 0%, rgba(30,41,59,1) 50%, rgba(5,25,57,1) 100%)",
        "login-form": "linear-gradient(to right, #434343 0%, black 100%);",
      },
      colors: {
        redish: "#E7717D",
        primary: "#E7717D",
        primaryFocus: "#e44555",
        secondary: "#1e293b",
        neutral: "#f1f5f9",
        neutralFocus: "#C2CAD0",
        soil: "#C2B9B0",
        darkBrown: "#7E685A",
        lightGreen: "#AFD275",
      },
      fontFamily:{
        "primary" : ["Josefin Sans",],
        "secondary":["Yeseva One"],
        "neutral":["Noto Sans"]
      },
      animation: {
        flip1: "flip1 10s cubic-bezier(0.23,1,0.32,1.2) infinite",
        aboutAnimation: "aboutAnimation 2s ease-in forwards",
        aboutAnimationPhone: "aboutAnimationPhone 2s ease-in forwards",
      },
      keyframes: {
        flip1: {
          "0%": {
            marginTop: "-360px",
          },
          "5%": {
            marginTop: "-270px",
          },
          "25%": {
            marginTop: "-270px",
          },
          "30%": {
            marginTop: "-180px",
          },
          "50%": {
            marginTop: "-180px",
          },
          "55%": {
            marginTop: "-90px",
          },
          "75%": {
            marginTop: "-90px",
          },
          "80%": {
            marginTop: "0px",
          },
          "99.99%": {
            marginTop: "0px",
          },
          "100%": {
            marginTop: "-360px",
          },
        },
        aboutAnimation: {
          to: {
            transform: "translateX(20%) translateY(-10%)",
          },
        },
        aboutAnimationPhone: {
          to: {
            transform: "translateX(0%) translateY(0%);",
          },
        },
      },
    },
  },
  plugins: [],
};
