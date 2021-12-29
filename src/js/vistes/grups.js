import { Groups } from "../../../_commons/js/classes/Groups.js";
import { GroupsList } from "../../../_commons/js/classes/GroupsList.js";

export const formulario1 = () => {
    // Inicialitzem llista
    let llistaG = new GroupsList();

    // Configuració de l'enviament de dades
    document.querySelector("#botoEnviar2").addEventListener("click"  ,() => {
        
        event.preventDefault();
        
        var nameGroup = document.getElementById('missatge').value;
        
        let objMsg = new Groups(llistaG.autoincrementId(), nameGroup, llistaG.autoincrementId());
        llistaG.addGroup(objMsg);
        console.log(llistaG)

        alert("Grup creat amb exit");

    });
}