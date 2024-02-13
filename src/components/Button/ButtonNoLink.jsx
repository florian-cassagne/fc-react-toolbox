import Section from "./Section";
import {colorPrimary} from "../../utils/StyleAssets";

function ButtonNoLink({
                        children,
                        className = '',
                        ...props
                      }) {
  return (
    <Section className={'cursor-pointer ' + colorPrimary + className} {...props}>
      {children}
    </Section>
  );
}


export default ButtonNoLink;
