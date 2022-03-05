import {Board} from "./classes/boards-class";
import {LlistaBoards} from "./classes/boards-list-class"

let afegir = new LlistaBoards()

export function CreaHTMLFormulariAfegir(llistaboards){
    let html = `
    <div class="formulari">
        <div class="formulari__panell">
            <div class="formulari__capcalera">
                <h1>Boards</h1>
            </div>
            <div class="formulari__contingut">

                <label>Titol</label><input id='title' type="text"><br><br>
                <label>Descripció</label><br><textarea id='descripcio' type="text"></textarea><br><br>
                <label>Incidència</label>
                <select id="incidencia" name="carlist" form="carform">
                    <option value="1">A</option>
                    <option value="2">B</option>
                    <option value="3">C</option>
                    <option value="4">D</option>
                </select><br><br>
                <button class='btn btn-dark' id='guardar'>Guardar</button>
            </div>
            <table class="table" id="taulaBoards">
                        </table><br>
            <div>
                <button class="btn btn-success" id='buttn_list'>Llistar</button>
                <button class="btn btn-primary" id='buttn_filter'>Filtrar</button>
                <button class="btn btn-danger" id="buttn_add">Afegir</button>
            </div>
        </div>
    </div>
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