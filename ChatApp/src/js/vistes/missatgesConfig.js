import { Messages } from "../classes/Messages.js";
import { MessagesList } from "../classes/MessagesList.js";
import { UsersList } from "../../../_commons/js/classes/UsersList.js";
import { GroupsList } from "../../../_commons/js/classes/GroupsList.js";
 
export const formulario02 = () => {

    // Inicialitzem llistes
    let llista = new MessagesList();
    let llista2 = new UsersList();
    let llista3 = new GroupsList();

    
    let dropdown = document.getElementById('destinatari');
    dropdown.length = 0;

    let dropdown2 = document.getElementById('grup');
    dropdown2.length = 0;

    let option, option2;

    // Creació del desplegable dels usuaris (url JSON)
/*     async function usuaris() {
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
    usuaris(); */

    // Creació del desplegable dels usuaris (FIREBASE)
    const data = llista2.obtenirDades();

    data.then(
        function(value) {
            for (let i = 0; i < value.length; i++) {
                option = document.createElement('option');
                option.text = value[i].username;
                dropdown.add(option);
            }
        }
    );

/*  // Creació del desplegable dels grups (LOCALSTORAGE)

    let dropdown3 = document.getElementById('grup');
    
 
    dropdown3.length = 0;
    var groups = JSON.parse(localStorage.getItem("groups"));
    for (let i = 0; i < groups.length; i++) {
        option2 = document.createElement('option');
        option2.text = groups[i].name;
        dropdown3.add(option2);
    } */


    // Creació del desplegable dels grups (FIREBASE)
    const data2 = llista3.obtenirDades();
    
    data2.then(
        function(value) {
            console.log(value)
            const newArr = value.filter((a) => a);
            for (let i = 0; i < newArr.length; i++) {
                option2 = document.createElement('option');
                option2.text = newArr[i].name;
                dropdown2.add(option2);
            }
        }
    );
    

    // Configuració de la visibilitat (RADIO BUTTONS)
    document.getElementById('opcio1').checked = true;

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
        var select2 = document.getElementById('grup');
        
    
        var today = new Date();
        var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
        var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    
        const data = llista.obtenirDades();
        data.then(
            function(value) {
                if(seleccio.checked){
                    var grup = select2.options[select2.selectedIndex].value;
                    let objMsg = new Messages(llista.autoincrementId(value), 1, message, date+" "+time, seleccionado, grup);
                    llista.setMessage(llista.autoincrementId(value), objMsg);
                }else{
                    var usuari = select.options[select.selectedIndex].value;
                    let objMsg = new Messages(llista.autoincrementId(value), 1, message, date+" "+time, seleccionado, usuari);
                    llista.setMessage(llista.autoincrementId(value), objMsg);
                }

                alert("Missatge enviat amb exit");
            }
        )
    });
}
