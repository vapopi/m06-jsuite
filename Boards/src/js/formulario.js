import {Board} from "./classes/boards-class";
import {LlistaBoards} from "./classes/boards-list-class"

let afegir = new LlistaBoards()
let llistaboards = new LlistaBoards()

export function CreaHTMLFormulariAfegir(){
    let html = `
    <div class="formulari">
        <div class="formulari__panell">
            <div class="formulari__capcalera">
                <h1>Boards</h1>
            </div>
            <div class="formulari__contingut">

                <label>Titol</label><br><input id='titol' type="text"><br><br>
                <label>Descripció</label><br><textarea id='descripcio' type="text"></textarea><br><br>
                <label>Incidència</label>
                <select id="incidencia" name="carlist" form="carform">
                    <option value="A">A</option>
                    <option value="B">B</option>
                    <option value="C">C</option>
                    <option value="D">D</option>
                </select><br><br>
                <button class='' id='guardar'>Guardar</button>
            </div>
            <br>
            <div>
                <button class="btn btn-success" id='buttn_list'>Llistar</button>
                <button class="btn btn-primary" id='buttn_filter'>Filtrar</button>
                <button class="btn btn-danger" id="buttn_add">Afegir</button>
            </div>
            <br>
            <table id="taula">
                <tr>
                    <td>ID</td>
                    <td>Titol</td>
                    <td>Descripció</td>
                    <td>Author_id</td>
                    <td>Ticket_id</td>
                    <td>Creat</td>
                    <td>Opcións</td>
                <tr>
    `
    var div = document.createElement("div");
    document.body.appendChild(div);
    llistaboards.board.forEach((n,a,array)=>{
    
        html += `<tr>
                    <td class='laid' id='${llistaboards.getId(a)}'>${llistaboards.getId(a)}</td>
                    <th><input id="Titol${llistaboards.getId(a)}" type="text" readonly value=${llistaboards.getTitol(a)}></th>
                    <th><input id="Descripcio${llistaboards.getId(a)}" type="text" readonly value=${llistaboards.getDescripcio(a)}></th>
                    <th>${llistaboards.getAuthorId(a)}</th>
                    <th>${llistaboards.getTicketId(a)}</th>
                    <th>${llistaboards.getCreat(a)}</th>
                    <td><button class="delete btn btn-danger">🗑️</button><button class="update btn btn-primary">✏️</button><button class="btn btn-success">😌😀</button></td>
                </tr>`
    })
 
    div.innerHTML=html;
    var enviar = document.getElementById('guardar')
    var cont = 1;

    var esborrar = document.getElementsByClassName('delete')
    var update = document.getElementsByClassName('update')
    var edit = true;
    var updates = [];

    enviar.addEventListener('click', event =>{

        var titol = document.getElementById('titol')
        var descripcio = document.getElementById('descripcio')
        var opcion = document.getElementById('incidencia')

        if (titol.value == '' || descripcio.value==''){
            window.alert("Tots els camps són necessaris")  

        }
        else{
            var newIndex = parseInt(llistaboards.lastIndex()) + 1

            var boards = new Board(newIndex,titol.value,descripcio.value,"2018","2019",cont,opcion.value,"2020");
            
            var log = afegir.postBlog(boards);
            location.reload();

        }
    })

    for(var x=0;x<esborrar.length;x++){
        esborrar[x].addEventListener('click', event =>{
            const id = event.target.parentNode.parentNode.parentNode.getElementsByClassName('laid')[0].innerHTML
            const table = event.target.parentNode.parentNode.parentNode
            llistaboards.delete(id,table)
            
        })
    }

    for(var x = 0;x<update.length;x++){
        update[x].addEventListener("click", event =>{
            var inputs = event.target.parentNode.parentNode.parentNode.getElementsByTagName("input");
            var id = event.target.parentNode.parentNode.parentNode.getElementsByClassName('laid')[0].innerHTML
            
            console.log(inputs);
            if(edit){
                for (var y = 0;y<inputs.length;y++){
                    inputs[y].removeAttribute("readonly")

                }
                edit = false

            }else{
                for (var y = 0;y<inputs.length;y++){
                    inputs[y].setAttribute("readonly", "true");
                    console.log(inputs[y].value)
                    updates.push(inputs[y].value)
                }
                llistaboards.update(id,updates);
                updates = [];
                edit = true
            }
            
        })
    }
}
