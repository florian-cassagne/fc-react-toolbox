import React from "react";

function LoadingSpinner() {
  let imgSpinner = '/img/misc/spinner-new.gif';

  return (
    <img src={imgSpinner}
         alt={"loading spinner"}
         className={'w-8 my-4 mx-auto'}/>
  );
}


export default LoadingSpinner;
