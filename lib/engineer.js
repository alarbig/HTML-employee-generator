class Engineer {
    constructor (name, email, id, github){
        this.name = name;
        this.email = email;
        this.id = id;
        this.github = github;
        
    }

    getName(){
        return this.name
    }
    getEmail(){
        return this.email
    }
    getId(){
        return this.id
    }
    getGithub(){
        return this.github
    }
    getRole(){
        return 'Engineer'
    }
}

module.exports = Engineer;