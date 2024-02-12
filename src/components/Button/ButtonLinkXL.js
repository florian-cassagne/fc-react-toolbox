import ButtonLink from "./ButtonLink";

function ButtonLinkXL({children,
                        className = '',
                        ...props}) {
    return (
      <ButtonLink className={'w-full ' + className}
                  isColored={false}
                  isLarger
                  isTransitionEnabled
                  {...props}>
          {children}
      </ButtonLink>
    );
}


export default ButtonLinkXL;
