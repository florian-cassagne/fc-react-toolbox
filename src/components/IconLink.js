import {animationDefault} from "../../utils/StyleAssets";

function IconLink({
                    image,
                    link,
                    title = '',
                    alt = '',
                    target = '',
                    imgClassName = '',
                    className = '',
                    ...props
                  }) {
  return (
    <a className={'w-12 mx-4 ease-in-out hover:scale-110 hover-darken '
      + animationDefault
      + className}
       href={link}
       target={target}
       {...props}>
      <img src={image}
           className={'w-full ' + imgClassName}
           title={title}
           alt={alt}/>
    </a>

  )
}


export default IconLink;
