//import {UsuarisList} from "./classes/usuaris-list-class";
import {Board} from "./classes/boards-class";
import {ListaBoards} from "./classes/boards-list-class"

let afegir = new ListaBoards()
console.log("1")

export function CreaHTMLFormulariAfegir(){ // L'html es cambiará pel maquetat a M09
    let html = `

        <label>Boards<br></label><input id='title' type="text"><br><br>
        <label>Descripció<br></label><textarea id='descripcio' type="text"></textarea><br><br>
        <label>Incidència</label>
        <select id="incidencia">
            <option value="1">Opcio 1</option>
            <option value="2">Opcio 2</option>
            <option value="3">Opcio 3</option>
            <option value="4">Opcio 4</option>
        </select><br><br>
        <button id='guardar'>Guardar</button>

    `
    
    var div = document.createElement("div");
    document.body.appendChild(div);
    div.innerHTML=html;

    var enviar = document.getElementById('guardar')
    var cont = 1;
 

    enviar.addEventListener('click', event =>{

        var title = document.getElementById('title')
        var descripcio = document.getElementById('descripcio')
    
        var opcion = document.getElementById('incidencia')

        if (title.value == '' || descripcio.value==''){
            window.alert("Tots els camps són necessaris")  
        }
        else{
            console.log("title.value");
            cont++;
            
            var boards = new Board(cont,title.value,descripcio.value,"2000","2001",cont,opcion.value,"2000");
            
            var alog = afegir.postBlog(boards);
        
            console.log(boards);
            

        }
    })


}