const Employee = require('./Employee')

function Manager(name,id,email,number) {
    this.name =name
    this.id = id
    this.email = email
    this.officeNumber = number

    this.getName= () =>{
        return this.name
    };
    this.getId = () => {
        return this.id
    }
    this.getEmail = () => {
        return this.email
    }
    this.getOfficeNumber = () => {
        return this.officeNumber
    }
    this.getRole = (role) =>{
        role = "Manager"
        return role
    }
}


    

module.exports = Manager