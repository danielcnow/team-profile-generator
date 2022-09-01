const Employee = require("./Employee");

module.exports = class Manager extends Employee{

    constructor(name, id, email, officenumber) {
        super(name, id, email);
        this.officenumber = this.officenumber
    }

    getOfficeNumber() {    
        return this.officenumber;
    }

    getRole() {
        return "Manager";
    }

}