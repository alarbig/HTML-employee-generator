class Engineer {
    constructor (title, name, id, email){
        this.title = title;
        this.name = name;
        this.id = id;
        this.email = email;
    }
    getTitle(){
        return this.title
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
    getRole(){
        return 'Engineer'
    }
}

module.exports = Engineer;