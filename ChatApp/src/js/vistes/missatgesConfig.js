// import 'jquery';
import { Messages } from "../classes/Messages.js";
import { MessagesList } from "../classes/MessagesList.js";
import { UsersList } from "../../../_commons/js/classes/UsersList.js";
import { GroupsList } from "../../../_commons/js/classes/GroupsList.js";
 
export const formulario02 = () => {

    // Inicialitzem llistes
    let llista = new MessagesList();
    let llista2 = new UsersList();
    let llista3 = new GroupsList();

    let option, option2;

    // Creació del desplegable dels usuaris (FIREBASE)
    const data = llista2.obtenirDades();
    data.then(
        function(value) {
            for (let i = 0; i < value.length; i++) {
                option += '<option value="' + value[i].username + '">' + value[i].username + '</option>';
            }
            $('#destinatari').append(option);
        }
    );

    // Creació del desplegable dels grups (FIREBASE)
    const data2 = llista3.obtenirDades();
    data2.then(
        function(value) {
            console.log(value)
            const newArr = value.filter((a) => a);
            for (let i = 0; i < newArr.length; i++) {
                option2 += '<option value="' + newArr[i].name + '">' + newArr[i].name + '</option>';
            }
            $('#grup').append(option2);
        }
    );
    

    // Configuració de la visibilitat (RADIO BUTTONS)
    $('#opcio1').attr('checked', true);

    $("#opcio1").on("click" , (event) => {
        if($('#opcio1').is(':checked')) {
            $('#destinatari').attr('disabled', true);
            $('#grup').attr('disabled', false);
        }
    });
    
    $("#opcio2").on("click" , (event) => {
        if($('#opcio2').is(':checked')) {
            $('#destinatari').attr('disabled', false);
            $('#grup').attr('disabled', true);
        }
    });
    
    // Configuració de l'enviament de dades
    $("#botoEnviar").on("click" , (event) => {
        event.preventDefault();
    
        var message = $('#missatge').val();
        var seleccionado = $('input[type=radio][name="opcio"]:checked').val();
        
        var today = new Date();
        var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
        var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
        
        const data = llista.obtenirDades();
        data.then(
            function(value) {
                if($('#opcio1').is(':checked')) {
                    var grup = $('#grup option:selected').text();
                    let objMsg = new Messages(llista.autoincrementId(value), 1, message, date+" "+time, seleccionado, grup);
                    llista.setMessage(llista.autoincrementId(value), objMsg);
                    console.log(llista.autoincrementId(value))
                }else{
                    var usuari = $('#destinatari option:selected').text();
                    let objMsg = new Messages(llista.autoincrementId(value), 1, message, date+" "+time, seleccionado, usuari);
                    llista.setMessage(llista.autoincrementId(value), objMsg);
                    console.log(llista)
                }

                alert("Missatge enviat amb exit");
            }
        )
    });
}
