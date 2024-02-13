import parse from "html-react-parser";

function TitleH5({
                   children,
                   className = '',
                   isMarginEnabled = true,
                   ...props
                 }) {
  const classNameMargin = (isMarginEnabled) ? 'my-2 sm:my-4 ' : ''
  return (
    <h5 className={'text-md uppercase ' + classNameMargin + className}
        {...props}>
      {parse(children)}
    </h5>
  );
}


export default TitleH5;
