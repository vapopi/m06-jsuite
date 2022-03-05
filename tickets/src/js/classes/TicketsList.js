export class TicketsList {

    tickets;

    constructor() {

        console.log("oeoeoieoe")
        this.loadLocalStorage();
        console.log(this.tickets)
    }

    addTicket(ticket) {
        console.log(this.tickets)
        this.tickets.push(ticket);
        this.saveLocalStorage();
    }

    //localstorage guardar
    saveLocalStorage() {
        localStorage.setItem('tickets',JSON.stringify(this.tickets));
    }
    
    //localstorage cargar   
    loadLocalStorage() {
        this.tickets = ( localStorage.getItem('tickets') )
                        ? JSON.parse( localStorage.getItem('tickets') )
                        : [];
                    
        
    }

    autoincrementId() {
        return this.tickets.length;
    }
}