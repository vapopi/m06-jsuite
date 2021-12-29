import { Messages } from "../classes/Messages.js";
import { MessagesList } from "../classes/MessagesList.js";
import { UsersList } from "../../../_commons/js/classes/UsersList.js";
 
export const formulario1 = () => {

    // Inicialitzem llistes
    let llista = new MessagesList();
    let llista2 = new UsersList();

    // Creació del desplegable dels usuaris
    let dropdown = document.getElementById('destinatari');
    dropdown.length = 0;

    async function usuaris() {
        const url = await llista2.obtenirDades();
        const request = new XMLHttpRequest();
        request.open('GET', url, true);
        
        request.onload = function() {
          if (request.status === 200) {
            const data = JSON.parse(request.responseText);
            let option;
            for (let i = 0; i < data.length; i++) {
              option = document.createElement('option');
              option.text = data[i].username;
              dropdown.add(option);
            }
           }
        }
        request.send();
    }
    usuaris();

    // Creació del desplegable dels grups
    let dropdown2 = document.getElementById('grup');
    let option;
    if(localStorage.getItem("groups") == null){
        option = document.createElement('option');
        option.text = "";
        dropdown2.add(option);
    }else{
        dropdown2.length = 0;
        var groups = JSON.parse(localStorage.getItem("groups"));
        for (let i = 0; i < groups.length; i++) {
            option = document.createElement('option');
            option.text = groups[i].name;
            dropdown2.add(option);
        }
    }

    // Configuració de la visibilitat
    document.querySelector("#opcio1").addEventListener("click"  ,() => {
    
        var seleccio = document.getElementById('opcio1');
    
        if (seleccio.checked) {
            document.getElementById('destinatari').disabled = true;
            document.getElementById('grup').disabled = false;
        }
    });
    
    document.querySelector("#opcio2").addEventListener("click"  ,() => {
    
        var seleccio2 = document.getElementById('opcio2');
    
        if (seleccio2.checked) {
            document.getElementById('destinatari').disabled = false;
            document.getElementById('grup').disabled = true;
        }
    
    });
    
    // Configuració de l'enviament de dades
    document.querySelector("#botoEnviar").addEventListener("click"  ,() => {
        
        event.preventDefault();
    
        var seleccio = document.getElementById('opcio1');
        var message = document.getElementById('missatge').value
        var seleccionado = document.querySelector('input[name="opcio"]:checked').value;
        
        var select = document.getElementById('destinatari');
        var usuari = select.options[select.selectedIndex].value;
        var select2 = document.getElementById('grup');
        var grup = select2.options[select2.selectedIndex].value;
    
        var today = new Date();
        var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
        var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    
        if(seleccio.checked){
            let objMsg = new Messages(llista.autoincrementId(), 1, message, date+" "+time, seleccionado, grup);
            llista.addMessage(objMsg);
            console.log(llista)
        }else{
            let objMsg = new Messages(llista.autoincrementId(), 1, message, date+" "+time, seleccionado, usuari);
            llista.addMessage(objMsg);
            console.log(llista)
        }

        alert("Missatge enviat amb exit");
    
    });
}
