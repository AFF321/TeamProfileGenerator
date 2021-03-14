const inquirer = require('inquirer');
const fs = require ('fs')
const Employee = require('./lib/Employee')
const Manager = require('./lib/Manager')
const Engineer = require('./lib/Engineer')
const Intern = require('./lib/Intern')
let id = 1
const generateMHTMl = (answers) =>
`
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-BmbxuPwQa2lc/FVzBcNJ7UAyJxM6wuqIj61tLrc4wSX0szH/Ev+nYRRuWlolflfl" crossorigin="anonymous">
    <title>My team</title>
</head>
<body>
    <header style="text-align: center; height: 200px; padding-top: 60px;color: blanchedalmond; background-color: rebeccapurple;"class="danger"><h1> My 
        Team</h1></header>

        
    <div class="row justify-content-around">


        <div class="col-12 col-sm-2 col-lg-2" style="">
            <div class="card border-dark mb-3" style="max-width: 18rem;">
                <div style="background-color:lightblue;" class="card-header">
                <h4>${answers.name}</h4>
              
                <h4>Manager</h4>
                
            </div>
                <div class=" card-body text-dark">
                <p class="card-text">${id}</p>
                <p class="card-text">Email:${answers.email}</p>
                <p class="card-text">Office number:${answers.number}</p>
          </div>
            </div>
            </div>

`









function capOff(){

}

inquirer
   .prompt([
     {
        type:'input',
        name: 'name',
        message:'what is your name?',
          },
     {
        type:'input',
        name: 'email',
        message:'what is your email?',
    },
    {
        type:'input',
        name: 'number',
        message:'what is your phone number?',
    },
                       
    ])
        .then((answers) =>{
            id ++
            const makeHtml =generateMHTMl(answers)
           fs.writeFile ('index.html',makeHtml,(err)=>
           err? console.log(err) : console.log("manager section successfully made!")) 
            restart()  
        })
 function restart(){       
inquirer
.prompt([
    {
        type:'confirm',
        name: 'restart',
        message:'do you want to add another member?',
                
    },
    ])
    .then((answers) =>{
    if (answers.restart == true){
    askroles()
    }
    else{

        const cap =capOff()
      fs.appendFile  ('index.html',`\n
      </div>
      </body>
      </html>
      `,(err) =>
      err? console.log (err) :console.log("capped off, have a good day!"))
    }
    })
}
function askroles(){
inquirer
.prompt([
{
    type:'checkbox',
    name: 'role',
    message:'what is your role?',
    choices:['Engineer','Intern'
]
}])
.then((answers)=>{
    if (answers.role == "Engineer"){
        engineer()
    }
    else if(answers.role == "Intern"){
        intern()
    }
})    
}


function engineer(){
    inquirer
    .prompt([
    {
        type:'input',
        name: 'name',
        message:'what is your name?',
        },
        {
        type:'input',
        name: 'email',
        message:'what is your email?',
        },
        {
        type:'input',
        name: 'github',
         message:'what is your github?',
    },   
    
    ])
    .then((answers)=> {
        id++
        fs.appendFile  ('index.html',`\n
        <div class="col-12 col-sm-2 col-lg-2" style="">
        <div class="card border-dark mb-3" style="max-width: 18rem;">
            <div style="background-color:lightblue;" class="card-header">
            <h4>${answers.name}</h4>
          
            <h4>Engineer</h4>
            
        </div>
            <div class=" card-body text-dark">
            <p class="card-text">${id}</p>
            <p class="card-text">Email:${answers.email}</p>
            <p class="card-text">github:${answers.github}</p>
      </div>
        </div>
        </div>
        `,(err) =>
        err? console.log (err) :console.log("added engineer!"))
        restart()  
    })        
}
function intern(){
inquirer
.prompt([
{
type:'input',
    name: 'name',
    message:'what is your name?',
    },
    {
    type:'input',
    name: 'email',
    message:'what is your email?',
    },
    {
    type:'input',
    name: 'school',
    message:'what is your school?',
    },  
]) 
    .then((answers)=> {
        id++
        fs.appendFile  ('index.html',`\n
        <div class="col-12 col-sm-2 col-lg-2" style="">
        <div class="card border-dark mb-3" style="max-width: 18rem;">
            <div style="background-color:lightblue;" class="card-header">
            <h4>${answers.name}</h4>
          
            <h4>Intern</h4>
            
        </div>
            <div class=" card-body text-dark">
            <p class="card-text">${id}</p>
            <p class="card-text">Email:${answers.email}</p>
           <p class="card-text">School:${answers.school}></p>
      </div>
        </div>
        </div>
        `,(err) =>
        err? console.log (err) :console.log("added Intern!"))
        restart()
    })}


