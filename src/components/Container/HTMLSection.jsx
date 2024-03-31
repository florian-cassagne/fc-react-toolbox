import React from "react";


function HTMLSection({
                      children,
                      className = '',
                      ...props
                    }) {
  return (
    <section className={'py-8 sm:py-12 lg:py-16 ' + className}
             {...props}>
      {children}
    </section>
  )
}


export default HTMLSection;
