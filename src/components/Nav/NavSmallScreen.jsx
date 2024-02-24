import React, {useState} from 'react';
import {NavDisplayButton} from "./index";

function Nav({children, ...props}) {
  const [isDisplayed, setDisplayed] = useState(false)

  return (
    <nav id={'nav'} className={'fixed top-0 px-2 z-20 uppercase text-xl bg-black/90 rounded-b-lg'}>
      <NavDisplayButton isDisplayed={isDisplayed} setDisplayed={setDisplayed} />
        {isDisplayed && (
          <ul className={'nav-elements w-full'}>
            {children}
          </ul>
        )}
    </nav>
  );
}


export default Nav;
