/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    theme: {
      fontFamily: {
        primary: 'Poppins',
      },
      container: {
        padding: {
          DEFAULT: '50px',
          lg: '0',
          xl: '50px',
          xxl: '50px'
        },
      },
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1440px',
      },
      extend: {
        colors: {
          primary: '#222222',
          secondary: '#F5E6E0',
        },
        backgroundImage: {
          hero: "url('./img/bg_hero.svg')",
        },
      },
    },
    plugins: [],
  };
