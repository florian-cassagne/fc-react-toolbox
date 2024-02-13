import {animationDefault, shadowDefault} from "../../utils/StyleAssets";

function ImageLink({
                     href,
                     src,
                     title = '',
                     alt = '',
                     target = '_blank',
                     className = '',
                     classNameImage = '',
                     zoomDisabled = false,
                     ...props
                   }) {
  return (
    <div className={'w-full flex justify-center ' + animationDefault + className} {...props}>
      <a href={href}
         className={'relative w-[95%] hover:bg-neutral-500 '
           + shadowDefault
           + animationDefault
           + (!zoomDisabled ? 'hover:w-full ' : '')
           + classNameImage}
         target={target}>
        <div className={'image-mask absolute inset-0 w-full h-full hover:bg-black/50 ' + animationDefault}>
          <p className={'image-mask__info hidden'}>Cliquez pour y accéder !</p>
        </div>
        <img src={src}
             title={title}
             alt={alt}/>
      </a>
    </div>

  )
}


export default ImageLink;
