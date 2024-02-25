// Configuration par défaut
const defaultConfig = {
  theme: 'dark',
  // Possible values :
  // - dark
  // - light

  mainColor: 'orange',
  // Possible values (TailwindCSS's based) :
  // - black
  // - white
  // - slate
  // - gray
  // - zinc
  // - neutral
  // - teal
  // - cyan
  // - sky
  // - blue
  // - indigo
  // - violet
  // - purple
  // - fuchsia
  // - pink
  // - rose

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

module.exports = defaultConfig;