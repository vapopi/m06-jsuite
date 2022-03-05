import { MessagesList } from "../classes/MessagesList.js";
import { GroupsList } from "../../../_commons/js/classes/GroupsList";
import { Groups } from "../../../_commons/js/classes/Groups";
import { Messages } from "../classes/Messages.js";

export const formulario01 = () => {

    // Funcio per crear la taula grups
    function carregaGrups() {

        // Carregar amb localstorage
/*          var arr1 = new Array();

        var Parent = document.getElementById('taulaGrups');

        if(localStorage.getItem("groups") == null){
            
            localStorage.setItem("","groups");
            var r = Parent.insertRow();
            var cell1 = r.insertCell();
            var cell2 = r.insertCell();

            cell1.innerHTML = "Res a mostrar";
            cell2.innerHTML = "Res a mostrar";

        }else{
            while(Parent.hasChildNodes())
            {
                Parent.removeChild(Parent.firstChild);
            }
            arr1 = JSON.parse(localStorage.getItem("groups"));
            for(let i = 0; i < arr1.length; i++){
                
                var r = Parent.insertRow();
                var cell1 = r.insertCell();
                var cell2 = r.insertCell();

                cell1.innerHTML = "ID: ".bold() + arr1[i].id;
                cell2.innerHTML = "NOM: ".bold()+arr1[i].name;
            }
        } */

        // Carregar amb firebase
        var llista = new GroupsList();
        var Parent = document.getElementById('taulaGrups');

        while(Parent.hasChildNodes())
        {
            Parent.removeChild(Parent.firstChild);
        }
        const data = llista.obtenirDades();
        data.then(
            function(value) {
                const newArr = value.filter((a) => a);
                for (let i = 0; i < newArr.length; i++) {
                    var r = Parent.insertRow();
                    var cell1 = r.insertCell();
                    var cell2 = r.insertCell();
                    cell1.innerHTML = "ID: ".bold() + newArr[i].id;
                    cell2.innerHTML = "NOM: ".bold()+ newArr[i].name;
                }
            }
        );
    }

    // Funcio per crear la taula missatges
    function carregaMissatges() {

        // Carregar amb localstorage
/*         var arr2 = new Array();

        var Parent = document.getElementById('taulaMissatges');

        if(localStorage.getItem("messages") == null){

            var r = Parent.insertRow();
            var cell1 = r.insertCell();
            var cell2 = r.insertCell();
            var cell3 = r.insertCell();

            cell1.innerHTML = "Res a mostrar";
            cell2.innerHTML = "Res a mostrar";
            cell3.innerHTML = "Res a mostrar";

        }else{
            while(Parent.hasChildNodes())
            {
                Parent.removeChild(Parent.firstChild);
            }
            arr2 = JSON.parse(localStorage.getItem("messages"));
            for(let i = 0; i < arr2.length; i++){
                var r = Parent.insertRow();
                var cell1 = r.insertCell();
                var cell2 = r.insertCell();
                var cell3 = r.insertCell();

                cell1.innerHTML = "ID: ".bold()+arr2[i].id;
                cell2.innerHTML = "MESSAGE: ".bold()+arr2[i].message;
                cell3.innerHTML = "DESTINATARI: ".bold()+arr2[i].destinatari;
            }
        } */

        // Carregar amb firebase
        var llista2 = new MessagesList();
        var Parent = document.getElementById('taulaMissatges');

        while(Parent.hasChildNodes())
        {
            Parent.removeChild(Parent.firstChild);
        }
        const data = llista2.obtenirDades();
        
        data.then(
            function(value) {
                const newArr = value.filter((a) => a);
                for (let i = 0; i < newArr.length; i++) {
                    var r = Parent.insertRow();
                    var cell1 = r.insertCell();
                    var cell2 = r.insertCell();
                    var cell3 = r.insertCell();
                    cell1.innerHTML = "ID: ".bold() + newArr[i].id;
                    cell2.innerHTML = "MISSATGE: ".bold()+ newArr[i].message;
                    cell3.innerHTML = "DESTINATARI: ".bold()+newArr[i].destinatari;
                }
            }
        );
    }

    carregaGrups();
    carregaMissatges();

    
    // Configuració dels botons
    document.querySelector("#boto1").addEventListener("click"  ,() => {

        let llista = new GroupsList();
        var value = document.getElementById("grup").value;
        if(value.length > 0)
        {
            llista.delGroup(value);
            carregaGrups();
        }else{
            alert("Indica un ID")
        }


    });

    document.querySelector("#boto2").addEventListener("click"  ,() => {
        
        let llista = new GroupsList();
        var value = document.getElementById("grup").value;
        if(value.length > 0)
        {
            llista.findGroup(llista,value);
        }else{
            alert("Indica un ID")
        }
    });

    document.querySelector("#boto3").addEventListener("click"  ,() => {

        let llista = new GroupsList();
        var value = document.getElementById("grup").value;
        if(value.length > 0)
        {
            let nou = prompt("Introdueix el nou grup");
            
            let objGrp = new Groups(value, nou, value);

            // llista.editGroup(value,nou)
            
            llista.setGroup(value, objGrp)
            carregaGrups();
        }else{
            alert("Indica un ID")
        }

        
    });


    document.querySelector("#boto4").addEventListener("click"  ,() => {

        let llista = new MessagesList();
        var value = document.getElementById("msg").value;
        if(value.length > 0)
        {
            llista.delMessage(value);
            carregaMissatges();
        }else{
            alert("Indica un ID")
        }
    });

    document.querySelector("#boto5").addEventListener("click"  ,() => {
        
        let llista = new MessagesList();
        var value = document.getElementById("msg").value;
        if(value.length > 0)
        {
            llista.findMessage(llista, value);
        }else{
            alert("Indica un ID")
        }

    });

    document.querySelector("#boto6").addEventListener("click"  ,() => {
        
        let llista = new MessagesList();
        var idUsuari = document.getElementById("msg").value;
        if(idUsuari.length > 0)
        {
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
                            carregaMissatges();
                            break;
                            
                        }
                    }
                }
            )
        }else{
            alert("Indica un ID")
        }
        
        /* llista.editMessage(idUsuari,nou) */
        
    });


    document.querySelector("#boto7").addEventListener("click"  ,() => {

        let llista = new MessagesList();
        var Parent = document.getElementById('taulaFiltratge');

        while(Parent.hasChildNodes())
        {
            Parent.removeChild(Parent.firstChild);
        }

        const data = llista.obtenirDades();

        data.then(
            function(value) {
                const newArr = value.filter((a) => a);
                var valor = document.getElementById("msgf").value;
                const data2 = llista.filtraMessagesPerText(newArr, valor);

                for (let i = 0; i < data2.length; i++) {
                    var r = Parent.insertRow();
                    var cell1 = r.insertCell();
                     var cell2 = r.insertCell();
                     var cell3 = r.insertCell();
                     cell1.innerHTML = "ID: ".bold() + data2[i].id;
                     cell2.innerHTML = "MISSATGE: ".bold()+ data2[i].message;
                     cell3.innerHTML = "DESTINATARI: ".bold()+data2[i].destinatari;
                 }
             }
        );
    });
}
