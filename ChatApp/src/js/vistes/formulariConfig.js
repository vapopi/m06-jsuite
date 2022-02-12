import { formulario00 } from "./formulariBase";
import { formulario0 } from "./llistatBase";
import { formulario01 } from "./llistatConfig";
import { formulario1 } from "./missatgesBase";
import { formulario02 } from "./missatgesConfig";
import { formulario3 } from "./grupsBase";
import { formulario03 } from "./grupsConfig";
import { header1,footer1 } from "./headerfooter";


export const formulario2 = () => {

    $("body").append(formulario00)
    
    $("#botoLlistes").on("click",function() {
        $("#divPrincipal").hide();
        $("body").append(formulario0)
        formulario01();
        footer1();
    });   

    $("#botoMissatges").on("click",function() {
        $("#divPrincipal").hide();
        $("body").append(formulario1);
        formulario02();
        footer1();
    });  
    
    $("#botoGrups").on("click",function() {
        $("#divPrincipal").hide();
        $("body").append(formulario3);
        formulario03();
        footer1();
    }); 

}

