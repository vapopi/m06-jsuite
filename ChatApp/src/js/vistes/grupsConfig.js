import { Groups } from "../../../_commons/js/classes/Groups.js";
import { GroupsList } from "../../../_commons/js/classes/GroupsList.js";

export const formulario03 = () => {
    // Inicialitzem llista
    let llistaG = new GroupsList();

    // Configuració de l'enviament de dades
    $("#botoEnviar2").on("click" , (event) => {
        event.preventDefault();
        
        var nameGroup = $('#missatge').val();
        let objGrp = new Groups(llistaG.autoincrementId(), nameGroup, llistaG.autoincrementId());
        llistaG.setGroup(llistaG.autoincrementId(), objGrp);

        alert("Grup creat amb exit");

    });
}