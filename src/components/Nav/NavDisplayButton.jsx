import {faBars} from "@fortawesome/free-solid-svg-icons";

import React from 'react';

import Image from "../Media/Image"

function NavDisplayButton({isDisplayed, setDisplayed}) {

  let imgMenuBars = '/img/misc/icons/menu-bars.png';
  let imgClose = '/img/misc/icons/close.png';

  return (
    <div className={'nav__display-button p-2 w-10'}
          onClick={() => setDisplayed(!isDisplayed)}>
        <Image className={'transition-all duration-500 ' +
          (!isDisplayed ? '!w-0 ' : '')}
               src={imgMenuBars}
               isEnhancedMode={false}
        />
        <Image icon={faBars} className={'transition-all duration-500 ' +
          (isDisplayed ? '!w-0 ' : '')}
               src={imgClose}
               isEnhancedMode={false}
        />

    </div>
  );
}


export default NavDisplayButton;
