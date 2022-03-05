import { Groups } from "../../../_commons/js/classes/Groups.js";
import { GroupsList } from "../../../_commons/js/classes/GroupsList.js";

export const formulario03 = () => {
    // Inicialitzem llista
    let llistaG = new GroupsList();

    // Configuració de l'enviament de dades
    document.querySelector("#botoEnviar2").addEventListener("click"  ,() => {
        
        event.preventDefault();

        
        var nameGroup = document.getElementById('missatgeg').value;
        const data3 = llistaG.obtenirDades();

        data3.then(
            function(value) {
                let objGrp = new Groups(llistaG.autoincrementId(value), nameGroup, llistaG.autoincrementId(value));
                llistaG.setGroup(llistaG.autoincrementId(value), objGrp);
                alert("Grup creat amb exit");
            }
        )
    });
}
