
const htmlArray = []
function generateManager(employees) {
    for (let i = 0; i < employees.length; i++) { 
        if (employees[i].getRole() === 'Manager'){
            const card = `
            <div class = 'main-page manager'>
                <div class="card" style="width: 18rem;">
                    <div class="card-body" class = 'manager'>
                    <h5 class="card-title">Manager</h5>
                      <p class="card-text">${employees[i].name}</p>
                      <p class="card-text">${employees[i].email}</p>
                      <p class="card-text">Employee ID: ${employees[i].id}</p>
                      <p class="card-text">Phone number: ${employees[i].phone}</p>
                    </div>
                  </div>
                </div>`
                htmlArray.push(card)
        } else if (employees[i].getRole() === 'Intern'){
            const card = `
            <div class = 'main-page employee'>
                <div class="card" style="width: 18rem;">
                    <div class="card-body">
                      <h5 class="card-title">Intern</h5>
                      <p class="card-text">${employees[i].name}</p>
                      <p class="card-text">${employees[i].email}</p>
                      <p class="card-text">Employee ID: ${employees[i].id}</p>
                      <p class="card-text">School: ${employees[i].school}</p>
                    </div>
                  </div>
                </div>`
                htmlArray.push(card)
        } else if (employees[i].getRole() === 'Engineer'){
            const card = `
            <div class = 'main-page employee'>
                <div class="card" style="width: 18rem;">
                    <div class="card-body">
                      <h5 class="card-title">Engineer</h5>
                      <p class="card-text">${employees[i].name}</p>
                      <p class="card-text">${employees[i].email}</p>
                      <p class="card-text">Employee ID: ${employees[i].id}</p>
                      <p class="card-text">Github: ${employees[i].github}</p>
                    </div>
                  </div>
                </div>`
                htmlArray.push(card)
        }
        
    } 
    
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
module.exports = generateManager;
