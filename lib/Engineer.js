module.exports = class Engineer {

    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.github = this.github
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
    
    getGithub() {    
        return this.github;
    }

    getRole() {
        return "Engineer";
    }

}