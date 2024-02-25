import React from 'react';

function NavHome({children}) {
  let navElementClasses = 'nav-element mr-4 xl:!mr-8 border-2 border-orange-900 hover:border-orange-500 hover:bg-orange-700 transition-all duration-200 ease-in-out ';

  return (
    <li className={navElementClasses}>
      <a href={'/'} className={'block px-5 py-2'}>
        {children}
      </a>
    </li>
  );
}


export default NavHome;
