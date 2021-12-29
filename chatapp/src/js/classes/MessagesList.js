export class MessagesList {

    constructor() { 
        this.loadLocalStorage();
    }

    addMessage(message) {
        this.messages.push(message);
        this.saveLocalStorage();
    }

    saveLocalStorage() {
        localStorage.setItem('messages',JSON.stringify(this.messages));
    }

    loadLocalStorage() {
        this.messages = ( localStorage.getItem('messages') )
                        ? JSON.parse( localStorage.getItem('messages') )
                        : [];
    }

    autoincrementId() {
        
        let id = this.messages.length;
        return id;
    }
}