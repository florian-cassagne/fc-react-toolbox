import parse from "html-react-parser";

import {transitionFadeIn} from "../../../utils/PropsAssets"
import './under-construction.css'

function UnderConstruction({children, deliveryDate}) {
  return (
    <div className={'under-construction py-1 my-16'}
         {...transitionFadeIn}>
      <div className="md:text-xl bg-black/90 py-8">
        <p className={'text-center pb-4'}>
          🛠️ EN TRAVAUX 🛠️
        </p>
        <p className={'p-1 md:p-2 pb-4'}>
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
