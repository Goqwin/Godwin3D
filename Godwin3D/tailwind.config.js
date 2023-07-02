/** @type {import('tailwindcss').Config} */
export const content = ["./src/**/*.{js,jsx}"];
export const mode = "jit";

export const theme = {
  extend: {
    colors: {
      primary: "#050816",
      secondary: "#aaa6c3",
      tertiary: "#151030",
      "black-100": "#100d25",
      "black-200": "#090325",
      "white-100": "#f3f3f3",
      gold: {
        200: '#FFECB3',
        300: '#FFD700',
        500: '#FFC300',
        800: '#C48200',
      },
      lime: "#00FF00",
    },
    fontFamily: {
      'sans': ['ui-sans-serif', 'system-ui', 'sans-serif'],
      'serif': ['ui-serif', 'Georgia', 'serif'],
      'mono': ['ui-monospace', 'SFMono-Regular', 'monospace'],
      'display': ['Oswald', 'sans-serif'],
      'body': ['Open Sans', 'sans-serif'],
    },
    boxShadow: {
      card: "0px 35px 120px -15px #211e35",
    },
    screens: {
      xs: "450px",
    },
    backgroundImage: {
      "hero-pattern": "url('/src/assets/herobg.png')",
    },
  },
};

export const plugins = [];


