/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/*.{js,ts,jsx,tsx}",
  ],
  theme: {

    patterns: {
      opacities: {
          100: "1",
          80: ".80",
          60: ".60",
          40: ".40",
          20: ".20",
          10: ".10",
          5: ".05",
      },
      sizes: {
          1: "0.25rem",
          2: "0.5rem",
          4: "1rem",
          6: "1.5rem",
          8: "2rem",
          16: "4rem",
          20: "5rem",
          24: "6rem",
          32: "8rem",
      }
    },

    extend: {

      fontSize: {
        sm: '0.750rem',
        base: '1rem',
        xl: '1.333rem',
        '2xl': '1.777rem',
        '3xl': '2.369rem',
        '4xl': '3.158rem',
        '5xl': '4.210rem',
      },
      fontFamily: {
        heading: 'Poppins',
        body: 'Poppins',
      },
      fontWeight: {
        normal: '400',
        bold: '700',
      },

      colors: {
        'text': {
          50: '#f2ecf9',
          100: '#e5d8f3',
          200: '#cab1e7',
          300: '#b08bda',
          400: '#9564ce',
          500: '#7b3dc2',
          600: '#62319b',
          700: '#4a2574',
          800: '#31184e',
          900: '#190c27',
          950: '#0c0613',
        },
        'background': {
          50: '#f2eff6',
          100: '#e6dfec',
          200: '#ccbeda',
          300: '#b29ec7',
          400: '#997db5',
          500: '#7f5da2',
          600: '#664a82',
          700: '#4c3861',
          800: '#332541',
          900: '#191320',
          950: '#0d0910',
          
          940: '#100C15',
        },
        'primary': {
          50: '#f2e8fc',
          100: '#e5d1fa',
          200: '#cca3f5',
          300: '#b275f0',
          400: '#9947eb',
          500: '#7f19e6',
          600: '#6614b8',
          700: '#4c0f8a',
          800: '#330a5c',
          900: '#19052e',
          950: '#0d0317',
        },
        'secondary': {
          50: '#f2e8fd',
          100: '#e5d1fa',
          200: '#cca3f5',
          300: '#b275f0',
          400: '#9946ec',
          500: '#7f18e7',
          600: '#6613b9',
          700: '#4c0f8a',
          800: '#330a5c',
          900: '#19052e',
          950: '#0d0217',
        },
        'accent': {
          50: '#ecf9f9',
          100: '#d8f3f3',
          200: '#b1e7e7',
          300: '#8bdada',
          400: '#64cece',
          500: '#3dc2c2',
          600: '#319b9b',
          700: '#257474',
          800: '#184e4e',
          900: '#0c2727',
          950: '#061313',
        },
      },
    },
  },
  plugins: [
    require('tailwindcss-bg-patterns'),
  ],
}

