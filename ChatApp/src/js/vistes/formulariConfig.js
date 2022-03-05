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

    $("body").append(formulario1)
    formulario02();
    
    $("#botoLlistes").on("click",function() {
        $("#divPrincipalm").hide();
        $("#divPrincipalg").hide();
        $("#divPrincipall").show();
        $("body").append(formulario0)
        formulario01();
    });   

    $("#botoMissatges").on("click",function() {
        $("#divPrincipall").hide();
        $("#divPrincipalg").hide();
        $("#divPrincipalm").show();
        $("body").append(formulario1);
        formulario02();
    });  
    
    $("#botoGrups").on("click",function() {
        $("#divPrincipall").hide();
        $("#divPrincipalm").hide();
        $("#divPrincipalg").show();
        $("body").append(formulario3);
        formulario03();
    }); 

}

