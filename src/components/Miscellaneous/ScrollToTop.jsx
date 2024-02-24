import {useEffect} from "react";
import {useLocation} from "react-router-dom";


function ScrollToTop(DOMelementId) {
  const pathname = useLocation();
  useEffect(() => {
    //TODO Fix bug when DOMelementId is used instead of 'header'
    const DOMheaderHeight = document.getElementById('header').offsetHeight
    window.scrollTo(0, DOMheaderHeight)
  }, [pathname])
}


export default ScrollToTop;
