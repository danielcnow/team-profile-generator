module.exports = class Manager {

    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.officenumber = this.officenumber
    }

    getName() {    
        return this.name;
    }

    getId() {    
        return this.id;
    }

    getEmail() {    
        return this.email;
    }

    getOfficeNumber() {    
        return this.officenumber;
    }

    getRole() {
        return "Manager";
    }

}