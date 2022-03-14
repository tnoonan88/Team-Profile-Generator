const generateHtml = (managerArr, engineerArr, internArr) => {
    return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet">
        <title>Document</title>
    </head>
    <body>
        <div class="jumbotron jumbotron-fluid text-center bg-blue text-white">
            <h1 id="header">My Team</h1>
        </div>
    
    ${generateManager(managerArr)}
    ${generateEngineer(engineerArr)}    
    ${generateIntern(internArr)}

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"></script>
    </body>
    </html>
    `
};

// modal generators:
const generateManager = (managerArr) => {
    const managerCards = managerArr.map(manager => {
        return `
<div class="card" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">${manager.name}</h5>
    <h6 class="card-subtitle mb-2 text-muted">${manager.getRole()}</h6>
    <p class="card-text">ID: ${manager.id}<br> Office: ${manager.officeNum}</p>
    <a href="#" class="card-link">${manager.email}</a>
  </div>
</div>
        `
    });
        return managerCards.join('');
};

const generateEngineer = (engineerArr) => {
    const engineerCards = engineerArr.map(engineer => {
        return `
<div class="card" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">${engineer.name}</h5>
    <h6 class="card-subtitle mb-2 text-muted">${engineer.getRole()}</h6>
    <p class="card-text">ID: ${engineer.id}</p>
    <a href="#" class="card-link">${engineer.email}</a>
    <a href="#" class="card-link">${engineer.gitHub}</a>
  </div>
</div>
        `
    });
        return engineerCards.join('');
};

const generateIntern = (internArr) => {
    const internCards = internArr.map(intern => {
        return `
<div class="card" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">${intern.name}</h5>
    <h6 class="card-subtitle mb-2 text-muted">${intern.getRole()}</h6>
    <p class="card-text">ID: ${intern.id}<br> School: ${intern.school}</p>
    <a href="#" class="card-link">${intern.email}</a>
  </div>
</div>
        `    });
        return internCards.join('');
};

module.exports = generateHtml;