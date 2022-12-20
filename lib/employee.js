class Employee {
    constructor (title, name, email, id){
        this.title = title;
        this.name = name;
        this.email = email;
        this.id = id;
        
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
        return 'Employee'
    }
}

module.exports = Employee;