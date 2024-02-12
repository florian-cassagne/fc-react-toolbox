import {setContent, setIsOpen} from "../../../features/viewerSlice";
import {useDispatch} from "react-redux";
import DivDefault from "../Content/DivDefault";
import ButtonClose from "../Button/ButtonClose";


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