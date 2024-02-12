import {animationDefault} from "../../../utils/StyleAssets";

function Image({
                 src,
                 title = '',
                 alt = '',
                 target,
                 className = '',
                 classNameImage = '',
                 isEnhancedMode = true,
                 adjustSize = true,
                 ...props
               }) {
  classNameImage += (isEnhancedMode) ? 'w-[95%] hover:w-full shadow-[0_0_5px_3px_rgba(255,255,255,0.3)] ' : ''

  return (
    <div className={'flex justify-center ' + animationDefault + className + (adjustSize ? 'w-full' : '')} {...props}>
      <img src={src}
           className={animationDefault + classNameImage}
           title={title}
           alt={alt}/>
    </div>
  )
}


export default Image;
