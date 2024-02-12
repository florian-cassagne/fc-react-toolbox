import './separator.css'


//TODO Précharger automatiquement les my-{size} où size est entre 1 et 8, avec Tailwind
function Separator({
                     size = 4,
                     className = '',
                     isVisible = false,
                     ...props
                   }) {

  return (
    <div className={'separator my-' + size + ` ${(isVisible) ? '' : 'opacity-0'}` + className} {...props} />
  )

}


export default Separator;
