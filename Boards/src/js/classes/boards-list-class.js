export class ListaBoards{

    board;

    constructor(){
        this.getLocalStorage();

    }

    postBlog(blog){
        this.board.push(blog);
        this.setLocalStorage();

    }

    lastIndex(){
        return this.board.at(-1).id;

    }

    setLocalStorage(){
        localStorage.setItem('board', JSON.stringify(this.board))

    }

    getLocalStorage(){
        this.board = (localStorage.getItem('board'))
        ? JSON.parse(localStorage.getItem('board'))
        :[];
        
    }
}