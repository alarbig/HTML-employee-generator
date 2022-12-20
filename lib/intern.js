class Intern {
    constructor (title, name, email, id){
        this.title = title;
        this.name = name;
        this.id = id;
        this.email = email;
    }

    getTitle(){
        return this.title
    }

    getId(){
        return this.id
    }
    
    getName(){
        return this.name
    }
    getEmail(){
        return this.email
    }
    getRole(){
        return 'Intern'
    }
}

module.exports = Intern;