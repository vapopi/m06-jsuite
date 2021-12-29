export const formulario1 = () => {
    
    // Creació de la taula de grups
    var arr1 = new Array();
    arr1 = JSON.parse(localStorage.getItem("groups"));
    var tbl = document.getElementById('taulaGrups');
    var items = JSON.parse(localStorage["groups"]);

    if(localStorage.getItem("groups") == null || items.length == 0){

        var r = tbl.insertRow();
        var cell1 = r.insertCell();
        var cell2 = r.insertCell();

        cell1.innerHTML = "Res a mostrar";
        cell2.innerHTML = "Res a mostrar";

    }else{

        for(let i = 0; i < arr1.length; i++){
            var r = tbl.insertRow();
            var cell1 = r.insertCell();
            var cell2 = r.insertCell();
    
            cell1.innerHTML = arr1[i].id;
            cell2.innerHTML = arr1[i].name;
        }
    }

    // Creació de la taula de missatges
    var arr2 = new Array();
    arr2 = JSON.parse(localStorage.getItem("messages"));
    var tbl2 = document.getElementById('taulaMissatges');
    var items2 = JSON.parse(localStorage["messages"]);

    if(localStorage.getItem("messages") == null || items2.length == 0){

        var r = tbl2.insertRow();
        var cell1 = r.insertCell();
        var cell2 = r.insertCell();
        var cell3 = r.insertCell();

        cell1.innerHTML = "Res a mostrar";
        cell2.innerHTML = "Res a mostrar";
        cell3.innerHTML = "Res a mostrar";

    }else{

        for(let i = 0; i < arr2.length; i++){
            var r = tbl2.insertRow();
            var cell1 = r.insertCell();
            var cell2 = r.insertCell();
            var cell3 = r.insertCell();

            cell1.innerHTML = arr2[i].id;
            cell2.innerHTML = arr2[i].message;
            cell3.innerHTML = arr2[i].destinatari;
        }
    }
}

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

});