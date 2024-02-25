import React from "react";
import {useIsScreen2XL, useIsScreen2XS, useIsScreenLG, useIsScreenMD, useIsScreenSM, useIsScreenXL, useIsScreenXS} from "../../hooks/useMediaQuery";

function InfoHeader({
                      ...props
                    }) {
  return (
    <div className={'fixed inset-0 w-full h-8 bg-blue-950 z-50'}>
      <div className={'flex justify-around'}>
        <div>
          {useIsScreen2XL() && 'Screen size : 2XL'}
          {useIsScreenXL() && 'Screen size : XL'}
          {useIsScreenLG() && 'Screen size : LG'}
          {useIsScreenMD() && 'Screen size : MD'}
          {useIsScreenSM() && 'Screen size : SM'}
          {useIsScreenXS() && 'Screen size : XS'}
          {useIsScreen2XS() &&  'Screen size : 2XS'}
        </div>
        <div>
          {'Width : ' + document.querySelector('body').offsetWidth + 'px'}
        </div>
      </div>
    </div>
  );
}

export default InfoHeader;
