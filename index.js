const Manager = require('./lib/manager')
const Employee = require('./lib/employee')
const Intern = require('./lib/intern')
const Engineer = require('./lib/engineer')
const fs = require('fs')
const inquirer = require('inquirer')
const generateHTML = require('./src/generateHTML')


const team = []

// function starterQuestion(starter) {
//     return inquirer.prompt(
//         [{
//         type: 'input', 
//         message: 'Would you like to add a manager or employee?',
//         name:  'managerOrEmployee'
//     }])
//     .then ((val) => {
//     if (val.starter === 'manager'){
//         managerAdd();
//     } else if (val.employeeAdd === 'employee'){
//         employeeAdd();
//     }})
// }

// const starterQuestion = (starter) =>{
//     return inquirer.prompt(
//             if (starter === 'manager') {
//                 return managerAdd
//             }
        
//     )
// }

const managerAdd = () =>{
    return inquirer.prompt(
        [{
            type: 'input', 
            message:'What is this Managers title?',
            name: 'title',
        },
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
    // console.log(managerData);
    const newManager = new Manager(
        managerData.title,
        managerData.name,
        managerData.email,
        managerData.id, 
        managerData.phone
    )
    team.push(newManager)
    console.log(team)
    employeeAdd() // this function runs the next set of questions and pushes the data into an array
    createHtml(team)
    console.log('thisisteamData',team)
})

}

const employeeAdd = () => {
    return inquirer.prompt(
        [{
        type: 'input', 
        message:'What type of employee is this? Engineer or intern?',
        name: 'title',
        }, 
        {
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
    ])

    .then(employeeData => {
        const newEmployee = new Employee(
            employeeData.title,
            employeeData.name, 
            employeeData.email, 
            employeeData.id,
        )
            team.push(newEmployee)
            console.log(team)
    })
}

// function writeToFile(fileName, data) {
//     fs.writeFile('./index.html', data, err => {
//         err ? console.error(err) : console.log('Success! Your data was entered successfully!')
//     })
// }

function createHtml() {
    const pageHtml = generateHTML(team)
    console.log(pageHtml)
    fs.writeFile('./dist/index.html', pageHtml, err =>{
        if (err) throw new Error('Something went wrong...', err)
    })
}

function init() {
    managerAdd()
    // .then (employeeAdd())
    //     .then(input => {
    //         return generateHTML(input);
    //     })
    //     .then(html => {
    //         writeToFile('./index.html', html);
    //     })
}

init();

module.exports = managerAdd;
