const Employee = require('./employee')


class Manager extends Employee {
    constructor (name, email, id, phone){
        super (name, email, id)
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