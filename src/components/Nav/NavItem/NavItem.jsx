import React from 'react';
import {animationDefault} from "../../../utils/StyleAssets";
import {Link, useLocation} from "react-router-dom";



function NavItem({children, link, id = null, isExternLink = false, disabled = false, className = '', ...props}) {
  let location = useLocation();

  return (
    <li className={'nav-element ease-in-out hover:text-orange-300 hover:scale-105 '
      + ((location.pathname === link) ? 'text-orange-300 ' : '')
      + animationDefault + className}
        {...props}>
      {
        isExternLink ? (
            <a href={link} className={'block px-2 sm:px-5 py-2'}>
              {children}
            </a>
          )
          :
          <Link to={link} className={'block px-2 sm:px-5 py-2'}>
            {children}
          </Link>

      }
    </li>
  );
}


export default NavItem;
