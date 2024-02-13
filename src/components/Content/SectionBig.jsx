import React from "react";


function SectionBig({
                      children,
                      className = '',
                      ...props
                    }) {
  return (
    <section className={'my-16 sm:my-24 lg:my-32 ' + className}
             {...props}>
      {children}
    </section>
  )
}


export default SectionBig;
