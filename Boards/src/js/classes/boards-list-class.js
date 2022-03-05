export class LlistaBoards{

//    board;

//    constructor(B0ard){
//        this.board = B0ard;
        
//    }

    constructor(){
        this.getLocalStorage();

    }

    postBlog(blog){
        this.board.push(blog);
        this.setLocalStorage();

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

    filtraBoards(text){
    let torna= this.board.filter((element) => {
        if (element.title.match(new RegExp(text,"i"))
        || element.descripcio.match(new RegExp(text,"i"))) 
        return true;
        })
        
        return torna;
    }

    async setBoard(board,id)
    {
        try{
            const res = await fetch('https://jsuite04-default-rtdb.firebaseio.com/boards/'+ id + '.json',
            {
                method:'PUT',
                headers:{
                    'Content-Type': 'application/json'
                },

                body:JSON.stringify(board),
                
            })
            
        }catch(error){
            console.log("Error")
        }
    }

    async delBoard(id) {
        try{
            const res= await fetch('https://jsuite04-default-rtdb.firebaseio.com/boards/'+ id +'.json',
            {
                method:'DELETE',
            })
        }catch(error){

        }
    }
}