import {setContent, setIsOpen} from "../../features/viewerSlice";
import {useDispatch} from "react-redux";
import DivDefault from "../Content/DivDefault";
import React from "react";
import {animationDefault, colorImportant} from "../../utils/StyleAssets";

function ButtonClose({className = '', ...props}) {
  return (
    <button className={`viewer__button-close absolute top-0 left-0 w-10 h-10 text-2xl rounded-tl-md md:rounded-tl-lg shadow-lg
    ${colorImportant} 
    ${animationDefault}
    ${className}
    `}
            onClick={props.onClick}
            {...props}>
      X
    </button>
  )
}

function Viewer({children, item, ...props}) {

  const dispatch = useDispatch()

  function close() {
    const viewer = document.querySelector(".viewer")
    viewer.classList.add("anim-to-left-fade-out")
    setTimeout(() => {
      dispatch(setIsOpen(false));
      dispatch(setContent(item));
    }, 1000)
  }

  function resetAnimations(selector) {
    setTimeout(() => {
      document.querySelector(selector).classList.remove("anim-to-left-fade-in")
    }, 1000)
  }

  return (
    <div className={'viewer fixed z-40 top-[2%] md:top-[5%] left-[2%] md:left-[5%] w-[96%] h-[96%] md:w-[90%] md:h-[90%] overflow-hidden anim-to-left-fade-in anim-duration--fast border bg-black rounded-md md:rounded-lg'}
         onLoad={() => resetAnimations('.viewer')}
         {...props}>

      <DivDefault className={'viewer__content absolute inset-0 overflow-y-auto h-full w-full my-4 sm:my-0 p-2 xs:p-4 lg:p-8'}>
        {children}
      </DivDefault>
      <ButtonClose onClick={close}/>
    </div>
  );
}


export default Viewer;