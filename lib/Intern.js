
const Employee = require('./Employee')

function Intern() {}

Intern.prototype.getRole =function(role){

    
    role = "Intern"
    
return role
}

Intern.prototype.getSchool = function(school){
    return school
}


module.exports = Intern