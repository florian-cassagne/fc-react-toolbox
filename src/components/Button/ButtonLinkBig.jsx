import ButtonLink from "./ButtonLink";

function ButtonLinkBig({
                         children,
                         className = '',
                         ...props
                       }) {
  return (
    <ButtonLink className={'w-full md:w-1/2 mr-[25%] ml-[25%]' + className} {...props}>
      {children}
    </ButtonLink>
  );
}


export default ButtonLinkBig;
