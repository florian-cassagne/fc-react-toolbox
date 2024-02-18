import React from "react";


function SectionBig({
                      children,
                      className = '',
                      ...props
                    }) {
  return (
    <section className={'py-16 sm:py-24 lg:py-32 ' + className}
             {...props}>
      {children}
    </section>
  )
}


export default SectionBig;
