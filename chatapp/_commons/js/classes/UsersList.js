export class UsersList {

    usuaris;
    
    constructor() {
        this.usuaris = [];
        this.obtenirDades().then((data) => this.usuaris = data);
    
    }
    
    async obtenirDades() {
        return 'https://biblioteca-9f853-default-rtdb.europe-west1.firebasedatabase.app/usuaris.json';
    }
}