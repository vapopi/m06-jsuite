import { Tickets } from "../js/classes/Tickets.js";
import { TicketsList } from "../js/classes/TicketsList.js";
import { UsuarisList } from "../../_commons/js/classes/UsersList.js";



export const EleForm = () => {

    let ticket = new Tickets();
    let llistatickets = new TicketsList();
    console.log(llistatickets.tickets)
    let llista2 = new UsuarisList();

    let dropdown = document.getElementById('grup');
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

document.querySelector("#enviar").addEventListener("click" , (event) => {
  event.preventDefault()
  var titulo = document.getElementById('title').value
  var desc = document.getElementById('desc').value
  var today = new Date();
  var fecha = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
  let objticket = new Tickets(llistatickets.autoincrementId(),titulo,desc,fecha,fecha)
  llistatickets.addTicket(objticket);
  });
var arr1 = new Array();
var Parent = document.getElementById('TicketsHechos');
if (localStorage.getItem("tickets") == null){

    localStorage.setItem("","tickets");
    var r = Parent.insertRow();
    var cell1 = r.insertCell();
    var cell2 = r.insertCell();
    var cell3 = r.insertCell();
    var cell4 = r.insertCell();
}else{
    while(Parent.hasChildNodes())
    {
        Parent.removeChild(Parent.firstChild);
    }
    arr1 = JSON.parse(localStorage.getItem("tickets"));
    for(let i = 0; i < arr1.length; i++){

        var r = Parent.insertRow();
        var cell1 = r.insertCell();
        var cell2 = r.insertCell();
        var cell3 = r.insertCell();
        var cell4 = r.insertCell();
        cell1.innerHTML = "ID: ".bold() + arr1[i].id;
        cell2.innerHTML = "Titol: ".bold() + arr1[i].title;
        cell3.innerHTML = "Descripcio: ".bold() + arr1[i].desc;
        cell4.innerHTML = "Creado: ".bold()+arr1[i].created;
    }
}
}
