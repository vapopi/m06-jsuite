export class Users {

    constructor(id, username, password, email, role_id, avatar_id, status, created, last_access) {
        this.id = id;
        this.username = username;
        this.password = password;
        this.email = email;
        this.role_id = role_id;
        this.avatar_id = avatar_id;
        this.status = status;
        this.created = created;
        this.last_access = last_access;
    }
}