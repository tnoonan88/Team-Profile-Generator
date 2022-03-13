const generateHtml = (managerArr, engineerArr, internArr) => {
    return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>
        <title>Document</title>
    </head>
    <body>
    ${generateManager(managerArr)}
    ${generateEngineer(engineerArr)}    
    ${generateIntern(internArr)}
    </body>
    </html>
    `
};

const generateManager = (managerArr) => {

};

const generateEngineer = (engineerArr) => {

};

const generateIntern = (internArr) => {
    const internCards = internArr.map(intern => {
        return `${intern.name}`
    });
        return internCards.join('');
};

module.exports = generateHtml;