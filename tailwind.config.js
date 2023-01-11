/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "pink-light": "#F9EEF0",
        "pink-bold": "#D9818E",
        "black": "#010101",
        "lake": "#0C3133",
        "gray": "#565969"
      },
      fontFamily: {
        "barlow": "'Barlow', sans-serif",
        "eupharia": "'Euphoria Script', cursive"
      },
      padding: {
        "button": "1.188rem 1.563rem 1.25rem 1.688rem"
      },
      dropShadow: {
        "button": "0 4px 4px rgba(0,0,0,.25)",
        "dropdown": "0 4px 20px rgba(0,0,0,.06)"
      },
      borderRadius: {
        "20": "1.25rem",
        "30": "1.875rem"
      },
      aspectRatio: {
        "video": "117 / 60"
      },
      lineHeight: {
        "09": "0.9",
        "11": "1.1",
        "12": "1.2",
        "17": "1.7"
      },
      fontSize: {
        "17": "1.063rem"
      },
      screens: {
        "lgx": {'max': '1023px'}
      }
    },
  },
  plugins: [],
}
