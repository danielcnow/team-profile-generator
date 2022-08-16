module.exports = class Intern {

    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.school = this.school
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
    
    getSchool() {    
        return this.school;
    }

    getRole() {
        return "Intern";
    }

}