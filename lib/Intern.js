const Employee = require('./Employee')

function Intern(name,id,email,school) {
    this.name =name
    this.id = id
    this.email = email
    this.school = school

    this.getName= () =>{
        return this.name
    };
    this.getId = () => {
        return this.id
    }
    this.getEmail = () => {
        return this.email
    }
    this.getSchool = () => {
        return this.school
    }
    this.getRole = (role) =>{
        role = "Intern"
        return role
    }
}


    

module.exports = Intern