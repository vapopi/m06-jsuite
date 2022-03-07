export class LlistaBoards{

    board
    

    constructor(){
        this.board = [];

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

    getTitol(id){
        for(let i of this.board){
            if(i.id == id){
                return i.title;

            }
        }

        return "Titol";
    }

    getDescripcio(id){
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

    getCreat(id){
        for(let i of this.board){
            if(i.id == id){
                return i.created
            }
        }
        return "created"
    }

    update(id,updates){
        this.board[id].descripcio = updates[1]
        this.board[id].title = updates[0]
        this.setLocalStorage();

    }

    delete(id,table){
        this.board.splice(id,1);
        this.setLocalStorage();
        location.reload();
    }
}