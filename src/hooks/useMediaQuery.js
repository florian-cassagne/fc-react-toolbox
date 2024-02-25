import {useMediaQuery} from "react-responsive";
import config from "../toolbox.config";


export const useIsScreen2XL = () => useMediaQuery({query: `
(min-width:${config.responsive.breakpoint.xxl}px)
`});

export const useIsScreenXL = () => useMediaQuery({query: `
(min-width:${config.responsive.breakpoint.xl}px) and
(max-width:${config.responsive.breakpoint.xxl-1}px)
`});

export const useIsScreenLG = () => useMediaQuery({query: `
(min-width:${config.responsive.breakpoint.lg}px) and
(max-width:${config.responsive.breakpoint.xl-1}px)
`});

export const useIsScreenMD = () => useMediaQuery({query: `
(min-width:${config.responsive.breakpoint.md}px) and
(max-width:${config.responsive.breakpoint.lg-1}px)
`});

export const useIsScreenSM = () => useMediaQuery({query: `
(min-width:${config.responsive.breakpoint.sm}px) and
(max-width:${config.responsive.breakpoint.md-1}px)
`});

export const useIsScreenXS = () => useMediaQuery({query: `
(min-width:${config.responsive.breakpoint.xs}px) and
(max-width:${config.responsive.breakpoint.sm-1}px)
`});

export const useIsScreen2XS = () => useMediaQuery({query: `
(max-width:${config.responsive.breakpoint.xs-1}px)
`});


export const useIsScreenMobile = () => useMediaQuery({query: `
(max-width:${config.responsive.breakpoint.sm-1}px)
`});
export const useIsScreenTablet = () => useMediaQuery({query: `
(min-width:${config.responsive.breakpoint.sm}px) and 
(max-width:${config.responsive.breakpoint.lg-1}px)
`});
export const useIsScreenDesktop = () => useMediaQuery({query: `
(min-width:${config.responsive.breakpoint.lg}px)
`});