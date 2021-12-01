const generateManager = manager => {
    return `
    <div>
        <h2>Manager</h2>
        <h3>${manager.name}</h3>
        <p> ID: ${manager.empID}</p>
        <p> Email:${manager.email}</p>
        <p> Office Number: ${manager.officePhone}</p>
    </div>
    `;
}

const generateEngineer = engineer => {
    return `
    <div>
        <h2>Engineer</h2>
        <h3>${engineer.name}</h3>
        <p> ID: ${engineer.empID}</p>
        <p> Email: ${engineer.email}</p>
        <p> Github: <a href="https://github.com/${engineer.github}">${engineer.github}</a></p>
    </div>
    `;
}

const generateIntern = intern => {
    return `
    <div>
        <h2>Intern</h2>
        <h3>${intern.name}</h3>
        <p> ID: ${intern.empID}</p>
        <p> Email:${intern.email}</p>
        <p> School: ${intern.school}</p>
    </div>
    `;
}



const createHTML = data =>{
    let cardArr = []

    for (let i = 0; i < data.length; i++){
        const employee = data[i];
        const role = employee.getTitle(); 

        // call manager function
        if (role === 'Manager') {
            const mgrCard = generateManager(employee);

            cardArr.push(mgrCard);
            
        }
        if (role === 'Engineer') {
            const engCard = generateEngineer(employee);

            cardArr.push(engCard);
        }
        if (role === 'Intern') {
            const intCard = generateIntern(employee);

            cardArr.push(intCard);
        }
    
        
        // if(data[i].getTitle() === "Manager"){
            // teamCards.push(`<h1>Manager: ${data[i].getName()}</h1>`)
            // teamCards.push(`<h1>Role: ${data[i].getTitle()}</h1>`)
            // teamCards.push(`<h1>Employee ID: ${data[i].getEmpID()}</h1>`)
            // teamCards.push(`<h1>Email: ${data[i].getEmail()}</h1>`)
            // teamCards.push(`<h1>Office Phone: ${data[i].getOfficePhone()}</h1>`)
        // }
        // if(data[i].getTitle() === "Engineer"){
            // teamCards.push(`<h1>Engineer: ${data[i].getName()}</h1>`)
        // }
    }

    const teamCards = cardArr.join('')
    const cardElements = createPage(teamCards);
        return cardElements;
}

const createPage = teamCards => {
    return `
    <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Document</title>
        </head>
        <body>
            ${teamCards}
        </body>
        </html>
    `
}

module.exports = createHTML;