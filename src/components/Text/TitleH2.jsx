import {transitionFadeIn} from "../../utils/PropsAssets";
import parse from "html-react-parser";

function TitleH2({
                   children,
                   className = '',
                   transitionEnabled = true,
                   ...props
                 }) {

  return (
    <h2 className={'text-xl xs:text-2xl sm:text-2xl md:text-3xl lg:text-3xl my-6 sm:my-10 lg:my-12 text-center uppercase ' + className}
        {...props}
        {...(transitionEnabled ? transitionFadeIn : {})}>
      {parse(children)}
    </h2>
  );
}


export default TitleH2;
