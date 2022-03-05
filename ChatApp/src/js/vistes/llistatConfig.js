import { MessagesList } from "../classes/MessagesList.js";
import { GroupsList } from "../../../_commons/js/classes/GroupsList";
import { Groups } from "../../../_commons/js/classes/Groups";
import { Messages } from "../classes/Messages.js";

export const formulario01 = () => {

    // Funcio per crear la taula grups
    $.fn.carregaGrups = function() {
        var llista = new GroupsList();
        
        $('#taulaGrups > tr').remove();
        const data = llista.obtenirDades();
        data.then(
            function(value) {
                const newArr = value.filter((a) => a);
                for (let i = 0; i < newArr.length; i++) {
                    $('#taulaGrups').append('<tr><td>' + "ID: ".bold() + newArr[i].id +'</td><td>'+"NOM: ".bold()+ newArr[i].name + '</td></tr>');
                }
            }
        );
    }

    // Funcio per crear la taula missatges
    $.fn.carregaMissatges = function() {
        var llista2 = new MessagesList();

        $('#taulaMissatges > tr').remove();
        const data = llista2.obtenirDades();
        data.then(
            function(value) {
                const newArr = value.filter((a) => a);
                for (let i = 0; i < newArr.length; i++) {
                    $('#taulaMissatges').append('<tr><td>' + "ID: ".bold() + newArr[i].id +'</td><td>'+"MISSATGE: ".bold() + newArr[i].message + '</td><td>' + "DESTINATARI: ".bold()+ newArr[i].destinatari + '</td></tr>');
                }
            }
        );
    }

    $('.formulari').carregaGrups();
    $('.formulari').carregaMissatges();
    
    $("#boto1").on("click" , (event) => {
        let llista = new GroupsList();
        var value = $("#grupinpt").val();

        if(value.length > 0) {
            console.log(value);
            llista.delGroup(value);
            $('.formulari').carregaGrups();
        }else{
            alert("Indica un ID");
        }

    });

    $("#boto2").on("click" , (event) => {
        let llista = new GroupsList();
        var value = $("#grupinpt").val();
        if(value.length > 0) {
            llista.findGroup(llista,value);
        }else{
            alert("Indica un ID")
        }
    });

    $("#boto3").on("click" , (event) => {
        let llista = new GroupsList();
        var value = $("#grupinpt").val();
        if(value.length > 0) {
            let nou = prompt("Introdueix el nou grup");
            let objGrp = new Groups(value, nou, value);
            llista.setGroup(value, objGrp)
            $('.formulari').carregaGrups();
        }else{
            alert("Indica un ID")
        }
    });

    $("#boto4").on("click" , (event) => {
        let llista = new MessagesList();
        var value = $("#msg").val();
        if(value.length > 0) {
            llista.delMessage(value);
            $('.formulari').carregaMissatges();
        }else{
            alert("Indica un ID")
        }
    });

    $("#boto5").on("click" , (event) => {
        let llista = new MessagesList();
        var value = $("#msg").val();
        if(value.length > 0){
            llista.findMessage(llista, value);
        }else{
            alert("Indica un ID")
        }

    });

    $("#boto6").on("click" , (event) => {
        
        let llista = new MessagesList();
        var idUsuari = $("#msg").val();
        

        if(idUsuari.length > 0) {
            let nou = prompt("Introdueix el nou missatge");
            const data = llista.obtenirDades();
            data.then(
                function(value) {
                    let id, author, created,pubpriv, destinatari

                    const newArr = value.filter((a) => a);
                    for(let i = 0; i < newArr.length; i++){
                        if(newArr[i].id == idUsuari){
                            id = newArr[i].id;
                            author = newArr[i].author_id;
                            created = newArr[i].created;
                            pubpriv = newArr[i].pubpriv;
                            destinatari = newArr[i].destinatari;

                            let objMsg = new Messages(id, author, nou, created, pubpriv, destinatari)
                            llista.setMessage(idUsuari, objMsg)
                            $('.formulari').carregaMissatges();
                            break;
                            
                        }
                    }
                }
            )
        }else{
            alert("Indica un ID")
        }
        
    });


    $("#boto7").on("click" , (event) => {

        let llista = new MessagesList();
        $('#taulaFiltratge > tr').remove();

        const data = llista.obtenirDades();
        data.then(
            function(value) {
                var valor = $("#msgf").val();
                const newArr = value.filter((a) => a);
                const data2 = llista.filtraMessagesPerText(newArr, valor);

                for (let i = 0; i < data2.length; i++) {
                    $('#taulaFiltratge').append('<tr><td>' + "ID: ".bold() + data2[i].id +'</td><td>'+"MISSATGE: ".bold() + data2[i].message + '</td><td>' + "DESTINATARI: ".bold()+ data2[i].destinatari + '</td></tr>');
                 }
             }
        );
    });
}
