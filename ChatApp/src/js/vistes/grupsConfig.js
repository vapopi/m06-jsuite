import { Groups } from "../../../_commons/js/classes/Groups.js";
import { GroupsList } from "../../../_commons/js/classes/GroupsList.js";

export const formulario03 = () => {
    // Inicialitzem llista
    let llistaG = new GroupsList();

    // Configuració de l'enviament de dades
    document.querySelector("#botoEnviar2").addEventListener("click"  ,() => {
        
        event.preventDefault();
        
        var nameGroup = document.getElementById('missatge').value;
        
        let objGrp = new Groups(llistaG.autoincrementId(), nameGroup, llistaG.autoincrementId()+1);
        llistaG.setGroup(llistaG.autoincrementId(), objGrp);
        console.log(llistaG)

        alert("Grup creat amb exit");

    });
}