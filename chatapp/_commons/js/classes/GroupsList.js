
export class GroupsList {

    constructor() { 
        this.loadLocalStorage();
    }

    addGroup(group) {
        this.groups.push(group);
        this.saveLocalStorage();
    }

    saveLocalStorage() {
        localStorage.setItem('groups',JSON.stringify(this.groups));
    }

    loadLocalStorage() {
        this.groups = ( localStorage.getItem('groups') )
                        ? JSON.parse( localStorage.getItem('groups') )
                        : [];
    }

    autoincrementId() {
        let id = this.groups.length;
        return id;
    }
}