export class GroupsList {

    constructor() {
        this.obtenirDades();
        this.loadLocalStorage();
    }

    autoincrementId() {
        let id = this.groups.length+6;
        return id;
    }

    addGroup(group) {
        this.groups.push(group);
        this.saveLocalStorage();
    }

    async setGroup(id, group) {

        try {
            const res = await fetch('https://jsuite04-default-rtdb.firebaseio.com/grups/'+ id +'.json',
        {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(group)
        })
        }
            catch (error) {
        }
    }

    async delGroup(id)
    {
        try {
            const res = await fetch('https://jsuite04-default-rtdb.firebaseio.com/grups/'+ id +'.json',
        {
            method: 'DELETE',
        })
        }
            catch (error) {
        }
    }

    saveLocalStorage() {
        localStorage.setItem('groups',JSON.stringify(this.groups));
    }

    loadLocalStorage() {
        this.groups = ( localStorage.getItem('groups') )
                        ? JSON.parse( localStorage.getItem('groups') )
                        : [];
    }

    removeGroup(id){
        for(let i = 0; i < this.groups.length; i++){
            if(this.groups[i].id == id){
                this.groups.splice(i,1);
                this.saveLocalStorage();
                break;
            }
        }
    }

    editGroup(id, nou){
        
        for(let i = 0; i < this.groups.length; i++){
            if(this.groups[i].id == id){
                this.groups[i].name = nou;
                this.saveLocalStorage();
                break;
            }
        }
    }

    findGroup(llista, id){
        // LOCALSTORAGE
/*         for(let i = 0; i < this.groups.length; i++){
            if(this.groups[i].id == id){
                alert("ID: " + this.groups[i].id + "\n" + "Nom del grup: " + this.groups[i].name + "\n" + "Parent id: " + this.groups[i].parent_id);
                break;
            }
        } */

        const data = llista.obtenirDades();
        data.then(
            function(value) {
                const newArr = value.filter((a) => a);
                for(let i = 0; i < newArr.length; i++){
                    if(newArr[i].id == id){
                        alert("ID: " + newArr[i].id + "\n" + "Nom del grup: " + newArr[i].name + "\n" + "Parent id: " + newArr[i].parent_id);
                        break;
                    }
                }
            }
        )
    }

    // Obtenir dades amb firebase
    async obtenirDades() {

        let data1;
        try {
            for(let i = 0; i < 4; i++){
                data1 = await fetch('https://jsuite04-default-rtdb.firebaseio.com/grups.json')
            }
            data1 = await data1.json();
            return data1;
        }catch {
            console.log("... la hemos")
            return "null"
        }
    }
}