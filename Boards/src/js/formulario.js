import {Board} from "./classes/boards-class";
import {LlistaBoards} from "./classes/boards-list-class"

let afegir = new LlistaBoards()
console.log("1")

export function CreaHTMLFormulariAfegir(){
    let html = `
    <div class="formulari">
        <div class="formulari__panell">
            <div class="formulari__capcalera">
                <h1>Boards</h1>
            </div>
            <div>
                <button class="btn btn-success" id='buttn_list'>Llistar</button>
                <button class="btn btn-primary" id='buttn_filter'>Filtrar</button>
                <button class="btn btn-danger" id="buttn_add">Afegir</button>
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
            <div hidden id='Filtra'>
                <input placeholder='Titol' id="buscador" type="text" >
                <button class="btn btn-primary" id='filtraBuscar'>Filtrar</button>
            </div>
            <h1 hidden id='List'>MOSTRAR RESULTADOS</h1>
        </div>
    </div>
    `
    
    var div = document.createElement("div");
    var div2 = document.createElement("div");
    document.body.appendChild(div);
    var html3 = ``
    div.innerHTML=html;
    document.body.appendChild(div);

    div.innerHTML= afegir.creaTaula(html,llistaboards);

    var enviar = document.getElementById('guardar')
    var cont = 1;
    var titulos = document.getElementsByClassName("oculto")
    var añadir = document.getElementById('añadir')
    var update = document.getElementsByClassName('update')
    var borrar = document.getElementsByClassName('delete')
    var mostrar = document.getElementsByClassName('mostrar')
    var buttn_add = document.getElementById('buttn_add')
    var boolAñadir = false;
    var tabla_lista = document.getElementById('tabla');
    var buttn_list = document.getElementById('buttn_list')
    var List = document.getElementById('List')
    var bool_listar = false

    var buttn_filter = document.getElementById('buttn_filter')
    var Filtra = document.getElementById('Filtra')
    var bool_filtrar = false
    var filtraBuscar = document.getElementById('filtraBuscar');
    var inputBuscador = document.getElementById("buscador")

    var edit = true;
    var moreOptions = false;
    var updates = [];

    enviar.addEventListener('click', event =>{

        var title = document.getElementById('title')
        var descripcio = document.getElementById('descripcio')
        
        var opcion = document.getElementById('incidencia')

        if (title.value == '' || descripcio.value==''){
            window.alert("Tots els camps són necessaris")  

        }

        else{
        
            var llista = parseInt(llistaboards.lastIndex()) + 1

            var boards = new Board(llista,title.value,descripcio.value,"2000","2001",cont,opcion.value,"2000");
            afegir.setBoard(boards,llista).then

            tabla_lista.remove();

            var html3 = afegir.crearTabla(llistaboards);
            var div3 = document.getElementById('prueba')
            
            div3.innerHTML=html3

        }
    })

    buttn_add.addEventListener('click',event=>{
        if(!boolAñadir)
        {
            añadir.removeAttribute('hidden')
            boolAñadir=true
        }else
        {
            añadir.setAttribute('hidden',true)
            boolAñadir=false
        }
        
    })

    buttn_list.addEventListener('click',event=>{
        if(!bool_listar)
        {
            tabla_lista.removeAttribute('hidden')
            List.removeAttribute('hidden')
            bool_listar=true
        }else
        {
            tabla_lista.setAttribute('hidden',true)
            List.setAttribute('hidden',true)
            bool_listar=false
        }
    })

    buttn_filter.addEventListener('click',event=>{
        if(!bool_filtrar){
            Filtra.removeAttribute('hidden')
            tabla_lista.removeAttribute('hidden')
            List.removeAttribute('hidden')
            bool_filtrar=true

        }
        else{
            Filtra.setAttribute('hidden',true)
            tabla_lista.setAttribute('hidden',true)
            List.setAttribute('hidden',true)
            bool_filtrar=false
        }
    })

    filtraBuscar.addEventListener('click',event=>{
        var nuevaLista = listaboards.filtrAutors(inputBuscador.value);
        var html2 = `<table id="tabla2" class="tareas">
            <tr>
                <td>id</td>
                <td>title</td>
                <td>descripcio</td>
                <td>created</td>
                <td>Opcion</td>
                <td class="ocultoT" hidden>author_id</td>
                <td class="ocultoT" hidden>ticket_id</td>
            <tr>`
        var tabla2 = document.getElementById('tabla2');
        
        if(inputBuscador.value == "")
        {
            tabla_lista.removeAttribute("hidden")
            tabla2.setAttribute("hidden",true)
        }else
        {
            document.body.appendChild(div2);
            tabla_lista.setAttribute("hidden",true)            
            
            nuevaLista.forEach((v,i,array)=>{
               
               html2 += `<tr>
               <td class='form2id' id='${listaboards.getId(i)}'>${v.id}</td>
               <th><input class="ocultar_input filtrarTitulo" id="Titulo${listaboards.getId(i)}" type="text" readonly value=${v.title}></th>
               <th><input class="ocultar_input" id="descripcio${listaboards.getId(i)}" type="text" readonly value=${v.descripcio}></th>
               
               <th>${v.created}</th>
               <td><button class="delete"><i class='far fa-trash-alt'/></button><button class="update"><i class="material-icons"/></button><button class="mostrar"><i class='fas fa-eye-slash'/></button></td>
               <th hidden class="ocultos">${v.author_id}</th>
               <th hidden class="ocultos">${v.ticket_id}</th>
           </tr>`
                
            div2.innerHTML=html2;
            })
            
        }
    })

    for(var x=0;x<borrar.length;x++){
        borrar[x].addEventListener('click', event =>{
            const id = event.target.parentNode.parentNode.parentNode.getElementsByClassName('form2id')[0].innerHTML
            const table = event.target.parentNode.parentNode.parentNode
            anyadir.delBoard(id);
            //listaboards.delete(id,table)
            
        })
    }

    for(var x = 0;x<update.length;x++){
        update[x].addEventListener("click", event =>{
            var inputs = event.target.parentNode.parentNode.parentNode.getElementsByTagName("input");
            var id = event.target.parentNode.parentNode.parentNode.getElementsByClassName('form2id')[0].innerHTML

            if(edit){
                for (var y = 0;y<inputs.length;y++){
                    inputs[y].removeAttribute("readonly") 

                }

                edit = false

            }else{
                for (var y = 0;y<inputs.length;y++){
                    inputs[y].setAttribute("readonly", "true");
                    updates.push(inputs[y].value)
                }
                listaboards.update(id,updates);
                updates = [];
                edit = true
            }
        })
    }

    for(var x = 0; x<mostrar.length;x++){
        mostrar[x].addEventListener("click",event =>{
            var prueba = event.target.parentNode.parentNode.parentNode.getElementsByClassName("ocultos");
            
            if(!moreOptions){
                for(var y=0;y<prueba.length;y++){
                    prueba[y].removeAttribute("hidden")
                    titulos[y].removeAttribute("hidden")
                    moreOptions=true

                }
            }
            else{
                for(var y=0;y<prueba.length;y++)
                {
                    prueba[y].setAttribute("hidden",true)
                    titulos[y].setAttribute("hidden",true)
                    moreOptions=false

                }
            }
        })
    }
}