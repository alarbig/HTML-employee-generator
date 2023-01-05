const Manager = require('./lib/manager')
const Employee = require('./lib/employee')
const Intern = require('./lib/intern')
const Engineer = require('./lib/engineer')
const fs = require('fs')
const inquirer = require('inquirer')
const generateHTML = require('./src/generateHTML')


const team = []

const managerAdd = () =>{
    return inquirer.prompt(
        [
    {
        type: 'input', 
        message:'What is the managers name?',
        name: 'name',
    },
    {
        type: 'input', 
        message:'What is their email address?',
        name: 'email',
    }, 
    {
        type: 'input', 
        message:'What is the managers ID #?',
        name: 'id', 
    }, 
    {
        type: 'input', 
        message:'What is their phone number?',
        name: 'phone',
    }
])

.then(managerData => {
    const newManager = new Manager(
        managerData.name,
        managerData.email,
        managerData.id, 
        managerData.phone
    )
    team.push(newManager)
    addEmployee()
})

}

const generateEngineer = () => {
    return inquirer.prompt(
        [ {
        type: 'input', 
        message:'What is the employees name?',
        name: 'name',
        }, 
        {
            type: 'input', 
            message:'Please enter their email address: ',
            name: 'email',
        },
        {type: 'input', 
        message:'Please enter their employee ID: ',
        name: 'id',
        },
        {
        type: 'input', 
        message:'What is this users Github account name?',
        name: 'github',
            }
    ])

    .then(employeeData => {
        const engineer = new Engineer(
            
            employeeData.name, 
            employeeData.email, 
            employeeData.id,
            employeeData.github
        )
            team.push(engineer)
            addEmployee()
    })


}

const generateIntern = () => {
    return inquirer.prompt(
        [ {
        type: 'input', 
        message:'What is the employees name?',
        name: 'name',
        }, 
        {
            type: 'input', 
            message:'Please enter their email address: ',
            name: 'email',
        },
        {type: 'input', 
        message:'Please enter their employee ID: ',
        name: 'id',
        },
        {
        type: 'input', 
        message:'What school are they attending?',
        name: 'school',
            }
    ])

    .then(employeeData => {
        const intern = new Intern(
            
            employeeData.name, 
            employeeData.email, 
            employeeData.id,
            employeeData.school
        )
            team.push(intern)
            
            addEmployee()
    })
}

const chooseEmployee = () =>{
    inquirer.prompt([
        {
            type:'list', 
            message:'Is this an engineer or an intern?',
            name:'employeeType', 
            choices:['Intern', 'Engineer']
        }
    ]).then(function (answer){
        if (answer.employeeType === 'Intern'){
            generateIntern();
        } else {
            generateEngineer();
        }
    })
}

function addEmployee(){

    inquirer.prompt([
        {
            type:'list',
            message: 'Would you like to add an employee?',
            name: 'choice', 
            choices: ['yes', 'no']
        }
    ]).then(function (answer){
        if (answer.choice === 'yes'){
            chooseEmployee()
        } else {
            createHtml();
        }
    })

}

function createHtml() {
    const pageHtml = generateHTML(team)
    console.log(pageHtml)
    fs.writeFile('./dist/index.html', pageHtml, err =>{
        if (err) throw new Error('Something went wrong...', err)
    })
}

function init() {
    managerAdd()
}

init();

module.exports = managerAdd;
