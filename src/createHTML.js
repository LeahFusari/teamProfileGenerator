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
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" 
        integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" 
        crossorigin="anonymous">
        <link rel="stylesheet" href = "./style.css"/>
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