export class MessagesList {

    constructor() { 
        this.obtenirDades();
        this.loadLocalStorage();
    }

    autoincrementId() {
        
        return this.messages.length+7;
    }

    addMessage(message) {
        this.messages.push(message);
        this.saveLocalStorage();
    }

    async setMessage(id, message) {

        try {
            const res = await fetch('https://jsuite04-default-rtdb.firebaseio.com/messages/'+ id +'.json',
        {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(message)
        })
        }
            catch (error) {
        }
    }
    
    

    saveLocalStorage() {
        localStorage.setItem('messages',JSON.stringify(this.messages));
    }

    loadLocalStorage() {
        this.messages = ( localStorage.getItem('messages') )
                        ? JSON.parse( localStorage.getItem('messages') )
                        : [];
    }

    removeMessage(id){

        for(let i = 0; i < this.messages.length; i++){
            if(this.messages[i].id == id){
                this.messages.splice(i,1);
                this.saveLocalStorage();
                break;
            }
        }
    }

    editMessage(id, nou){
        
        for(let i = 0; i < this.messages.length; i++){
            if(this.messages[i].id == id){
                this.messages[i].message = nou;
                this.saveLocalStorage();
                break;
            }
        }
    }

    findMessage(llista, id){
        // LOCALSTORAGE
/*         for(let i = 0; i < this.messages.length; i++){
            if(this.messages[i].id == id){
                alert("ID: " + this.messages[i].id + "\n" + "Author id: " + this.messages[i].author_id + "\n" + "Message: " + this.messages[i].message + "\n" + "Created: " + this.messages[i].created + "\n" +  "Destinatari: " + this.messages[i].destinatari + "\n" + "Tipus: " + this.messages[i].pubpriv + "\n");
                break;
            }
        } */

        const data = llista.obtenirDades();
        data.then(
            function(value) {
                const newArr = value.filter((a) => a);
                for(let i = 0; i < newArr.length; i++){
                    if(newArr[i].id == id){
                        alert("ID: " + newArr[i].id + "\n" + "Author id: " + newArr[i].author_id + "\n" + "Message: " + newArr[i].message + "\n" + "Created: " + newArr[i].created + "\n" +  "Destinatari: " + newArr[i].destinatari + "\n" + "Tipus: " + newArr[i].pubpriv + "\n")
                        break;
                    }
                }
            }
        )
    }

    filtraMessagesPerText(llista, message)
    {
        let torna = llista.filter((element) => {
        if (element.message.match(new RegExp(message, "i")))
            return true;
        });

        return torna;
    }

    // Obtenir dades amb firebase
    async obtenirDades() {

        let data1;
        try {
            for(let i = 0; i < 4; i++){
                data1 = await fetch('https://jsuite04-default-rtdb.firebaseio.com/messages.json')
            }
            data1 = await data1.json();
            return data1;
        }catch {
            console.log("... la hemos")
            return "null"
        }
    }

    async delMessage(id)
    {
        try {
            const res = await fetch('https://jsuite04-default-rtdb.firebaseio.com/messages/'+ id +'.json',
        {
            method: 'DELETE',
        })
        }
            catch (error) {
        }
    }

}
