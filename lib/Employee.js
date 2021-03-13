
function Employee(name,id,email) {
this.name =name
this.id =id
this.email =email
this.getName= () =>{
    return this.name
};
this.getId = () => {
    return this.id
}
this.getEmail = () => {
    return this.email
}
}

Employee.prototype.getRole =function(role){
if (role === "Manager"){
    role = "Manager"
}
else if (role === "Intern"){
    role = "Intern"
}
else if (role === "Engineer"){
    role = "Engineer"
}
else
role = "Employee"


return role
}
module.exports = Employee