import config from "../toolbox.config";

const colorPrimary = config.colorPrimary
const colorSecondary = config.colorSecondary
const theme = config.theme

function adaptLightness(lightness) {
  return (theme === 'light') ? 1000 - lightness : lightness
}


export const colorTextClass =
  (theme === 'light') ? 'text-black' : 'text-white'

export const colorTextImportantClass =
  `text-${colorPrimary}-${adaptLightness(200)}`
  ||
  'text-orange-200'

export const colorTextImportantClassHover =
  `hover:text-${colorPrimary}-${adaptLightness(300)}`
  ||
  'hover:text-orange-300'

export const colorBackgroundClass =
  (theme === 'light') ? 'bg-white' : 'bg-neutral-950'

//TODO Gestion color on hover
export const colorPrimaryClass =
  `bg-${colorPrimary}-${adaptLightness(900)}`
  ||
  'bg-orange-900'

export const colorPrimaryClassHover =
  `hover:bg-${colorPrimary}-${adaptLightness(800)}`
  ||
  'hover:bg-orange-800'

export const colorSecondaryClass =
  `bg-${colorSecondary}-${adaptLightness(900)}`
  ||
  'bg-neutral-900'
export const colorSecondaryClassHover =
  `hover:bg-${colorSecondary}-${adaptLightness(800)}`
  ||
  'hover:bg-neutral-800'

export const colorSecondaryHoverClass = 'hover:bg-neutral-800 '

export const colorImportantClass =
  'bg-red-600 hover:bg-red-500 border border-red-300 '
export const animationDefault = 'animation-all duration-200 '

export const shadowDefault = 'shadow-[0_0_5px_3px_rgba(255,255,255,0.3)] '
