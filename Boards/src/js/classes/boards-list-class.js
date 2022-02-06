export class LlistaBoards{

    board;

    constructor(B0ard){
        this.board = B0ard;
        
    }

    lastIndex(){
        var ultI = this.board.length
        if (ultI == 0) return -1
        return this.board[ultI-1].id;

    }

    setLocalStorage(){
        localStorage.setItem('board', JSON.stringify(this.board))

    }

    getLocalStorage(){
        this.board=(localStorage.getItem('board'))
        ? JSON.parse(localStorage.getItem('board'))
        :[];
    
        return this.board;
    }

    getId(id){
        for(let i of this.board){
            if(i.id == id){
                return i.id;

            }
        }

        return "id";
    }

    getAuthorId(id){
        for(let i of this.board){
            if(i.id == id){
                return i.author_id;

            }
        }

        return "AuthorId";
    }

    getTitle(id){
        for(let i of this.board){
            if(i.id == id){
                return i.title;

            }
        }

        return "Titol";
    }

    getDescription(id){
        for(let i of this.board)
        {
            if(i.id == id)
            {
                return i.descripcio
            }
        }
       
        return "Descripció";     
    }

    getTicketId(id){
        for(let i of this.board){
            if(i.id == id){
                return i.ticket_id;

            }
        }
    }

    update(id,updates){
        this.board[id].descripcio = updates[1]
        this.board[id].title = updates[0]
        this.setLocalStorage();

    }

    getCreated(id){
        for(let i of this.board){
            if(i.id == id){
                return i.created;

            }
        }

        return "creat";
    }

    delete(id,table){
       
        let lsitem = localStorage.getItem("board");
        let conf = JSON.parse(lsitem);
       
        for (var i in conf){
            var confId = conf[i].id
            if(confId == id){   
                this.board.splice(i,1);
                this.setLocalStorage();
                break;
            }
        }

        location.reload();
    }

    filtrAutors(text){
    let torna= this.board.filter((element) => {
        if (element.title.match(new RegExp(text,"i"))
        || element.descripcio.match(new RegExp(text,"i"))) return true;
        })
        
        return torna;
    }

    async setBoard(board,id)
    {
        try{
            const res=fetch('https://jsuite04-default-rtdb.firebaseio.com/boards'+id+'.json',
            {
                method:'PUT',
                headers:{
                    'Content-Type': 'application/json'
                    
                },
                body:JSON.stringify(board),
                
                
            })

            
        }catch(error){
            console.log("error")
        }
    }

    async delBoard(id) {
        try{
            const res= await fetch('https://jsuite04-default-rtdb.firebaseio.com/boards/'+id+'.json',
            {
                method:'DELETE',
            })
        }catch(error){

        }
    }

    creaTaula(html,llistaboards){

        html += `<div id="prueba">
        <table hidden id="tabla" class="tareas">
        
        <tr>
            <td>id</td>
            <td>title</td>
            <td>descripcio</td>
            <td>created</td>
            <td>Opcion</td>
            <td class="ocultoT" hidden>author_id</td>
            <td class="ocultoT" hidden>ticket_id</td>
        <tr>`
        llistaboards.board.forEach((v,i,array)=>{
        
            html += `<tr>
                        <td class='tdid' id='${llistaboards.getId(i)}'>${v.id}</td>
                        <th><input class="ocultar_input filtrarTitulo" id="Titulo${llistaboards.getId(i)}" type="text" readonly value=${v.title}></th>
                        <th><input class="ocultar_input" id="descripcio${llistaboards.getId(i)}" type="text" readonly value=${v.descripcio}></th>
                        
                        <th>${v.created}</th>
                        <td><button class="delete"><img src="https://img.icons8.com/material-outlined/24/000000/trash--v2.png"/></button><button class="update"><img src="https://img.icons8.com/ios/24/000000/edit--v3.png"/></button><button class="mostrar"><img src="https://img.icons8.com/material-outlined/24/000000/closed-eye.png"/></button></td>
                        <th hidden class="ocultos">${v.author_id}</th>
                        <th hidden class="ocultos">${v.ticket_id}</th>
                    </tr>
                    </div>`
        })
        html += `<footer>
                    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
                </footer>`

        return html
    }

    creaTaula(llistaboards){

       let html = `<div id="prueba">
       <table id="tabla" class="tareas">
        
        <tr>
            <td>id</td>
            <td>title</td>
            <td>descripcio</td>
            <td>created</td>
            <td>Opcion</td>
            <td class="oculto" hidden>author_id</td>
            <td class="oculto" hidden>ticket_id</td>
        <tr>`

        llistaboards.board.forEach((v,i,array)=>{
        
            html += `<tr>
                        <td class='tdid' id='${llistaboards.getId(i)}'>${v.id}</td>
                        <th><input class="ocultar_input filtrarTitulo" id="Titulo${llistaboards.getId(i)}" type="text" readonly value=${v.title}></th>
                        <th><input class="ocultar_input" id="descripcio${llistaboards.getId(i)}" type="text" readonly value=${v.descripcio}></th>
                        
                        <th>${v.created}</th>
                        <td><button class="delete"><img src="https://img.icons8.com/material-outlined/24/000000/trash--v2.png"/></button><button class="update"><img src="https://img.icons8.com/ios/24/000000/edit--v3.png"/></button><button class="mostrar"><img src="https://img.icons8.com/material-outlined/24/000000/closed-eye.png"/></button></td>
                        <th hidden class="ocultos">${v.author_id}</th>
                        <th hidden class="ocultos">${v.ticket_id}</th>
                    </tr>
                    </div>`
        })
        
        return html;
    }
}