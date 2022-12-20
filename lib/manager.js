const Employee = require('./employee')


class Manager extends Employee {
    constructor (title, name, email, id, phone){
        super (title, name, email, id)
        this.phone = phone
    }
    getOfficeNumber() {
        return this.phone
    }
    getRole(){
        return 'Manager'
    }
} 

module.exports = Manager;