import { MessagesList } from "../classes/MessagesList.js";

export const formulario01 = () => {

    // Funcio per crear la taula grups
    function carregaGrups() {

        var arr1 = new Array();

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
        }
    }

    // Funcio per crear la taula missatges
    function carregaMissatges() {

        var arr2 = new Array();

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
        }
    }

    carregaGrups();
    carregaMissatges();

    // Configuració dels botons
    document.querySelector("#boto1").addEventListener("click"  ,() => {
        
        var value = document.getElementById("grup").value;
        var items = JSON.parse(localStorage["groups"]);

        for(let i = 0; i < items.length; i++){
            if(items[i].id == value){
                items.splice(i,1);
                localStorage.setItem('groups', JSON.stringify(items));
                console.log(localStorage.getItem("groups"));
                alert("Grup esborrat amb exit");
                break;
            }
        }

        carregaGrups();

    });

    document.querySelector("#boto2").addEventListener("click"  ,() => {

        var value = document.getElementById("grup").value;
        var items = JSON.parse(localStorage["groups"]);

        for(let i = 0; i < items.length; i++){
            if(items[i].id == value){
                alert("ID: " + items[i].id + "\n" + "Nom del grup: " + items[i].name + "\n" + "Parent id: " + items[i].parent_id);
                break;
            }
        }
    });

    document.querySelector("#boto3").addEventListener("click"  ,() => {

        var value = document.getElementById("grup").value;
        var items = JSON.parse(localStorage["groups"]);
        let nom = prompt("Introdueix el nou nom del grup");

        for(let i = 0; i < items.length; i++){
            if(items[i].id == value){
                items[i].name = nom;
                localStorage.setItem('groups', JSON.stringify(items));
                alert("Nom del grup canviat amb exit");
                break;
            }
        }

        carregaGrups();
    });

    document.querySelector("#boto4").addEventListener("click"  ,() => {

        var value = document.getElementById("msg").value;
        var items = JSON.parse(localStorage["messages"]);

        for(let i = 0; i < items.length; i++){
            if(items[i].id == value){
                items.splice(i,1);
                localStorage.setItem('messages', JSON.stringify(items));
                console.log(localStorage.getItem("messages"));
                alert("Missatge esborrat amb exit");
                break;
            }
        }

        carregaMissatges();
    });

    document.querySelector("#boto5").addEventListener("click"  ,() => {

        var value = document.getElementById("msg").value;
        var items = JSON.parse(localStorage["messages"]);

        for(let i = 0; i < items.length; i++){
            if(items[i].id == value){
                alert("ID: " + items[i].id + "\n" + "Author id: " + items[i].author_id + "\n" + "Message: " + items[i].message + "\n" + "Created: " + items[i].created + "\n" +  "Destinatari: " + items[i].destinatari + "\n" + "Tipus: " + items[i].pubpriv + "\n");
                break;
            }
        }
    });

    document.querySelector("#boto6").addEventListener("click"  ,() => {

        var value = document.getElementById("msg").value;
        var items = JSON.parse(localStorage["messages"]);
        let nou = prompt("Introdueix el nou missatge");

        for(let i = 0; i < items.length; i++){
            if(items[i].id == value){
                items[i].message = nou;
                localStorage.setItem('messages', JSON.stringify(items));
                alert("Missatge canviat amb exit");
                break;
            }
        }

        carregaMissatges();
    });

    document.querySelector("#boto7").addEventListener("click"  ,() => {

        let llista = new MessagesList();

        var Parent = document.getElementById('taulaFiltratge');

        while(Parent.hasChildNodes())
        {
            Parent.removeChild(Parent.firstChild);
        }

        var value = document.getElementById("msgf").value;
        let filtrarM = llista.filtraMessagesPerText(value);

        for(let i = 0; i < filtrarM.length; i++){

            var r = Parent.insertRow();
            var cell1 = r.insertCell();
            var cell2 = r.insertCell();
            var cell3 = r.insertCell();

            cell1.innerHTML = "ID: ".bold() + filtrarM[i].id;
            cell2.innerHTML = "Message: ".bold() + filtrarM[i].message;
            cell3.innerHTML = "Destinatari: ".bold() + filtrarM[i].destinatari;
            
        }

    });
}