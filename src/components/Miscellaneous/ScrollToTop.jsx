import {useEffect} from "react";


function ScrollToTop(DOMelementId, currentPathname) {
  //const pathname = useLocation();
  useEffect(() => {
    //TODO Fix bug when DOMelementId is used instead of 'header'
    const DOMheaderHeight = document.getElementById('header').offsetHeight
    window.scrollTo(0, DOMheaderHeight)
  }, [currentPathname])
}


export default ScrollToTop;
