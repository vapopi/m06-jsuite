import {CreaHTMLFormulariAfegir} from './js/formulario'
import {HeaderOriginal,FooterOriginal} from "./js/vista/parts";

HeaderOriginal();
CreaHTMLFormulariAfegir()
FooterOriginal();

let div = document.createElement("div")
document.body.append(div);

var todosx = fetch('https://jsuite04-default-rtdb.firebaseio.com/boards')
.then(data => data.json())  
.then (todo => {
    console.log(todo)
    const myArrClean = todo.filter(Boolean)
    llistaBoards = new LlistaBoards(myArrClean);
    CrearFormularioHTML(llistaBoards)
})