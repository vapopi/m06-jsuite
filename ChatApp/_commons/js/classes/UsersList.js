export class UsersList {

    usuaris;
    
    constructor() {
        this.usuaris = [];
        this.obtenirDades().then((data) => this.usuaris = data);
    
    }
    
    async obtenirDades() {
        // Obtenir dades sense firebase
        // return 'https://biblioteca-9f853-default-rtdb.europe-west1.firebasedatabase.app/usuaris.json';

        // Obtenir dades amb firebase
        let data1;
    
        try {
            data1 = await fetch('https://jsuite04-default-rtdb.firebaseio.com/usuaris.json')
            data1 = await data1.json();
            return data1;
        }catch {
            console.log("... la hemos")
            return "null"
        }
    }
}