import {rellenarDatos} from "./formulari.js"
import { EleForm } from "./ElementosForm.js"
import {header1,footer1} from "./headerfooter.js"

export const VerForm = () =>{ 
    let div = document.createElement('div')

    div.innerHTML=rellenarDatos()
    document.body.append(div)
    EleForm()

}

