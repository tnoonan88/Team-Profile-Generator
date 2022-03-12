const fs = require('fs');
const inquirer = require('inquirer');

const Employee = require('./lib/Employee.js');
const Engineer = require('./lib/Engineer.js');
const Intern = require('./lib/Intern.js');
const Manager = require('./lib/Manager.js');

// import generate HTML function

const employeeArr = [];

function userInfo() {
    inquirer.prompt([
        {
            type: 'input',
            message: 'Enter Employee Name: ',
            name: 'name',
        },
        {
            type: 'input',
            message: 'Enter Email: ',
            name: 'email',
        },
        {
            type: 'input',
            message: 'Enter Employee Id: ',
            name: 'id',
        },
        {
            type: 'list',
            message: 'Select Role: ',
            name: 'role',
            choices: ["Manager", "Engineer", "Intern"]
        },
    ])
    .then(answers => {
            if (answers.role === 'Manager') {
                inquirer.prompt([
                    {
                        type: 'input',
                        name: 'office',
                        message:'Enter office number:',                        
                    }
                ])
                .then(response => {
                    console.log(response.office);
                    const ManagerTeam = new Manager (answers.name, answers.email, answers.id, answers.role, response.office)
                    employeeArr.push(ManagerTeam);
                    addOption()
                });
            }
            
            else if (answers.role === 'Engineer' ) {
                inquirer.prompt([
                    {
                        type: 'input',
                        name: 'gitHub',
                        message:'Enter Github name:',
                    }
                ])

                .then(response => {
                    console.log(response.gitHub);
                    const EngineerTeam = new Engineer (answers.name, answers.email, answers.id, answers.role, response.gitHub)
                    employeeArr.push(EngineerTeam);
                    addOption()
                });
            
            }
            
            else if (answers.role === 'Intern') {
                inquirer.prompt([
                    {
                        type: 'input',
                        name: 'school',
                        message:'Enter School name:', 
                    }
                ])
                .then(response => {
                    console.log(response.school);
                    const internTeam = new Intern (answers.name,  answers.email, answers.id, answers.role, response.school)
                    employeeArr.push(internTeam);
                    addOption()
                })
            }

            else {
                const employeeTeam = new Employee (answers.name, answers.email, answers.id, answers.role);
                employeeArr.push(employeeTeam);
                addOption()
            };

            function addOption() {
                inquirer.prompt([
                    {
                        type:'confirm',
                        name: 'addMore',
                        message:'Would you like to add another Employee?'
                    }
                ])
                .then(res => {
                    if (res.addMore === true){
                        userInfo(employeeArr);
                    }
                    
                    else {
                        // if user is done adding employees, generate HTML
                    }
                });
            };
        });
};


userInfo();