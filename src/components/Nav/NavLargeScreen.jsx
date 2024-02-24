import React from 'react';

function Nav({children, ...props}) {

  return (
    <nav id={'nav'} className={'sticky top-0 w-full py-2 z-20 uppercase text-sm xs:text-base sm:text-lg lg:text-xl bg-black/90'}>
      <ul className={'nav-elements flex justify-center w-full '}>
        {children}
      </ul>
    </nav>
  );
}


export default Nav;
