const generateHtml = (managerArr, engineerArr, internArr) => {
    return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="./dist/style.css">
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/css/bootstrap.min.css">
        <script src="https://cdn.jsdelivr.net/npm/jquery@3.5.1/dist/jquery.slim.min.js"></script>
        <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js"></script>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/js/bootstrap.bundle.min.js"></script>
        <title>My Team</title>
    </head>
    <body>
        <div class="jumbotron text-center bg-danger text-white">
            <h1 id="header">My Team</h1>
        </div>
          <div class="row"
              ${generateManager(managerArr)}
              ${generateEngineer(engineerArr)}
              ${generateIntern(internArr)}
          </div>
    </body>
    </html>
    `
};
    

// card generators:
const generateManager = (managerArr) => {
    const managerCards = managerArr.map(manager => {
        return `
<div class="card">
  <div class="card-body">
    <h5 class="card-title">${manager.name}</h5>
    <h6 class="card-subtitle mb-2 text-muted">${manager.getRole()}</h6>
    <p class="card-text">ID: ${manager.id}<br> Office: ${manager.officeNum}</p>
    <a href="mailto:${manager.email}" class="card-link">Email: ${manager.email}</a>
  </div>
</div>
        `
    });
        return managerCards.join('');
};

const generateEngineer = (engineerArr) => {
    const engineerCards = engineerArr.map(engineer => {
        return `
<div class="card">
  <div class="card-body">
    <h5 class="card-title">${engineer.name}</h5>
    <h6 class="card-subtitle mb-2 text-muted">${engineer.getRole()}</h6>
    <p class="card-text">ID: ${engineer.id}</p>
    <a href="https://github.com/${engineer.gitHub}" class="card-link">GitHub: ${engineer.gitHub}</a><br>
    <a href="mailto:${engineer.email}" class="card-link">Email: ${engineer.email}</a><br>
  </div>
</div>
        `
    });
        return engineerCards.join('');
};

const generateIntern = (internArr) => {
    const internCards = internArr.map(intern => {
        return `
<div class="card">
  <div class="card-body">
    <h5 class="card-title">${intern.name}</h5>
    <h6 class="card-subtitle mb-2 text-muted">${intern.getRole()}</h6>
    <p class="card-text">ID: ${intern.id}<br> School: ${intern.school}</p>
    <a href="mailto:${intern.email}" class="card-link">Email: ${intern.email}</a>
  </div>
</div>
        `    });
        return internCards.join('');
};

module.exports = generateHtml;