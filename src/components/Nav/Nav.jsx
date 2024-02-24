import React from 'react';
import {useIsScreenMobile, useIsScreenTablet} from "../../hooks/useMediaQuery";
import NavSmallScreen from "./NavSmallScreen";
import NavLargeScreen from "./NavLargeScreen";

function Nav({children}) {

  const isScreenMobile = useIsScreenMobile()
  const isScreenTablet = useIsScreenTablet()


  return (
    (isScreenMobile || isScreenTablet) ?
      <NavSmallScreen>
        {children}
      </NavSmallScreen>
      :
      <NavLargeScreen>
        {children}
      </NavLargeScreen>

  );
}


export default Nav;
