import parse from "html-react-parser";

import {transitionFadeIn} from "../../../utils"
import './under-construction.css'

function UnderConstruction({children, deliveryDate, className}) {
  return (
    <div className={'under-construction py-1 my-16 ' + className}
         {...transitionFadeIn}>
      <div className="md:text-xl bg-black/90 py-8">
        <p className={'text-center pb-4'}>
          🛠️ UNDER CONSTRUCTION 🛠️
        </p>
        <p className={'p-1 md:!p-2 pb-4'}>
          {children}
        </p>
        <p className={'text-center'}>
          {deliveryDate && (
            parse(` Livraison prévue pour le <b>${deliveryDate}</b>`)
          )}
        </p>
      </div>

    </div>
  );
}


export default UnderConstruction;
