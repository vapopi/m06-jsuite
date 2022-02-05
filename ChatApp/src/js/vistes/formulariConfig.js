import { formulario00 } from "./formulariBase";
import { formulario0 } from "./llistatBase";
import { formulario01 } from "./llistatConfig";
import { formulario1 } from "./missatgesBase";
import { formulario02 } from "./missatgesConfig";
import { formulario3 } from "./grupsBase";
import { formulario03 } from "./grupsConfig";
import { header1,footer1 } from "./headerfooter";


export const formulario2 = () => {

    let div = document.createElement('div');
    
    div.innerHTML=formulario00
    document.body.append(div);
    
    document.getElementById("botoLlistes").addEventListener("click"  ,() => {

        div.innerHTML=formulario0
        document.body.append(div);
        formulario01();
        footer1();

    });       

    document.getElementById("botoMissatges").addEventListener("click"  ,() => {

        div.innerHTML=formulario1
        document.body.append(div);
        formulario02();
        footer1();

    });     
    
    document.getElementById("botoGrups").addEventListener("click"  ,() => {

        div.innerHTML=formulario3
        document.body.append(div);
        formulario03();
        footer1();

    });  
}

