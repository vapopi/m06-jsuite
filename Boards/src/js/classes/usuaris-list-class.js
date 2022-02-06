export class UsuarisList {

    usuaris;

    constructor() {

        this.usuaris = this.obtenirDades();

    }
    async obtenirDades()
    {

        let users = [ {
            "id_usuari" : 0,
            "username" : "armand",
            "password" : "maletin",
            "id_role" : 0
          }, {
            "id_usuari" : 1,
            "username" : "pep",
            "password" : "maletin",
            "id_role" : 1
          }, {
            "id_usuari" : 2,
            "username" : "jordi",
            "password" : "maletin",
            "id_role" : 3
          }, {
            "id_usuari" : 3,
            "username" : "alicia",
            "password" : "maletin",
            "id_role" : 2
          }, {
            "id_usuari" : 4,
            "username" : "cristina",
            "password" : "maletin",
            "id_role" : 0
          } ]
        return users;
    }

    

}