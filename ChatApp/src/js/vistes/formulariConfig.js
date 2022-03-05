import { formulario00 } from "./formulariBase";
import { formulario0 } from "./llistatBase";
import { formulario01 } from "./llistatConfig";
import { formulario1 } from "./missatgesBase";
import { formulario02 } from "./missatgesConfig";
import { formulario3 } from "./grupsBase";
import { formulario03 } from "./grupsConfig";


export const formulario2 = () => {

    let div = document.createElement('div');
    let div2 = document.createElement('div');

    div.innerHTML=formulario00
    document.body.append(div);

    div2.innerHTML=formulario1
    document.body.append(div2);
    formulario02();
    
    document.getElementById("botoLlistes").addEventListener("click"  ,() => {

        div2.innerHTML=formulario0
        document.body.append(div2);
        formulario01();

    });       

    document.getElementById("botoMissatges").addEventListener("click"  ,() => {

        div2.innerHTML=formulario1
        document.body.append(div2);
        formulario02();

    });     
    
    document.getElementById("botoGrups").addEventListener("click"  ,() => {

        div2.innerHTML=formulario3
        document.body.append(div2);
        formulario03();

    });  
}

