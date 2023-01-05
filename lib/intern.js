class Intern {
    constructor (name, email, id, school){
        this.name = name;
        this.id = id;
        this.email = email;
        this.school = school;
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
    getSchool(){
        return this.school
    }
    getRole(){
        return 'Intern'
    }
}

module.exports = Intern;