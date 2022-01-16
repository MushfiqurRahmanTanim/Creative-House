module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  mode: "jit",
  theme: {

    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }
    },
    container: {
      center: true,
      padding:"1rem",
    },
    extend: {
      colors: {
        navy: '#0a192f',
        darkblue: '#223464',
        lightNavy: '#112240',
        lightestNavy: '#233554',
        navyShadow: 'rgba(2, 12, 27, 0.7)',
        darkSlate: '#495670',
        lightSlate: '#a8b2d1',
        lightestSlate: '#ccd6f6',
        blueWhite: '#e6f1ff',
        green: '#64ffda',
        greenTint: 'rgba(100, 255, 218, 0.1)',
      },
      fontFamily:{
        poppins: "'Poppins', sans-serif",
        roboto: "'Roboto', sans-serif"
    },
  }
  },

  plugins: [],
}
