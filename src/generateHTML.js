const Employee = require("../lib/employee");
const Engineer = require("../lib/engineer");
const Manager = require('../lib/manager')
const htmlArray = []
function generateManager(manager) {
    for (let i = 0; i < manager.length; i++) {
        if (manager[i].getRole() === 'Manager'){
            const card = `
            <div class = 'main-page'>
                <div class="card" style="width: 18rem;">
                    <img class="card-img-top" src="..." alt="Card image cap">
                    <div class="card-body">
                      <h5 class="card-title">${manager[i].title}</h5>
                      <p class="card-text">${manager[i].name}</p>
                      <p class="card-text">${manager[i].email}</p>
                      <p class="card-text">${manager[i].id}</p>
                      <p class="card-text">${manager[i].phone}</p>
                    </div>
                  </div>
                </div>`
                htmlArray.push(card)
        }
    }
    // for (let i = 0; i < employee.length; i++) {
    //     if (employee[i].getRole() === 'intern'){
    //         return `
    //         //     <div class = 'main-page'>
    //         //         <div class="card" style="width: 18rem;">
    //         //             <img class="card-img-top" src="..." alt="Card image cap">
    //         //             <div class="card-body">
    //         //               <h5 class="card-title">Intern</h5>
    //         //               <p class="card-text">${intern.name}</p>
    //         //               <p class="card-text">${intern.email}</p>
    //         //             </div>
    //         //           </div>
    //         //         </div>`
    //     }
        
    // }

const template = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Employee</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
    <link rel="stylesheet" href="style.css">
</head>
<body>
<div class = 'main-page'>
    ${htmlArray}
    </div>
</body>
</html>`

return template

}


// function generateIntern(intern){
//     return `
//     <div class = 'main-page'>
//         <div class="card" style="width: 18rem;">
//             <img class="card-img-top" src="..." alt="Card image cap">
//             <div class="card-body">
//               <h5 class="card-title">Intern</h5>
//               <p class="card-text">${intern.name}</p>
//               <p class="card-text">${intern.email}</p>
//             </div>
//           </div>
//         </div>`
// }

// function generateEngineer(engineer){
//     return `
//     <div class = 'main-page'>
//         <div class="card" style="width: 18rem;">
//             <img class="card-img-top" src="..." alt="Card image cap">
//             <div class="card-body">
//               <h5 class="card-title">Engineer</h5>
//               <p class="card-text">${engineer.name}</p>
//               <p class="card-text">${engineer.email}</p>
//             </div>
//           </div>
//         </div>`
// }

// function generateHTML(team) { }
  
// }
module.exports = generateManager;
// module.exports = generateIntern;
// module.exports = generateEngineer;
// module.exports = generateHTML;
