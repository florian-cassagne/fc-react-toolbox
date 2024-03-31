// Configuration par défaut
const config = {
  // Possible values :
  // - dark
  // - light
  theme: 'dark',

  // Possible values (TailwindCSS's based) :
  // - black
  // - white
  // - red
  // - orange
  // - green
  // - cyan
  // - blue
  // - purple
  colorPrimary: 'orange',
  colorSecondary: 'blue',

  responsive: {
    breakpoint: {
      xs: 480,
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280,
      xxl: 1536,
    },
  },
};

export default config;