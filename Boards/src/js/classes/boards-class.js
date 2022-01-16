export class Board{
    constructor (id,title,description, date_from,date_to, author_id, ticket_id, created){
        this.id = id;
        this.title = title;
        this.description = description;
        this.date_from = date_from;
        this.date_to = date_to;
        this.author_id = author_id;
        this.ticket_id = ticket_id;
        this.created = created;
    }
}