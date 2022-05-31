/*
? @document-start
======================
| MAIN PROGRAM LOGIC |
==================================================================================================================================

? @author:                 William J. Horn
? @document-name:          index.js
? @document-created:       05/30/2022
? @document-modified:      05/30/2022

==================================================================================================================================

? @document-info
==================
| ABOUT DOCUMENT |
==================================================================================================================================

[Coming soon]

==================================================================================================================================
*/

/* --------------- */
/* Require Modules */
/* --------------- */
const inquirer = require('inquirer');
const generatePage = require('./src/generatePage');
const renderPage = require('./src/renderHTML');
const employeeTypes = require('./lib');

/* ----------------- */
/* Utility Functions */
/* ----------------- */
const getEmployeeDataAsync = async () => {;
    const employeeList = [];

    while (true) {
        // prompt the user for role selection
        const response = await inquirer.prompt({
            type: 'list',
            name: 'role',
            message: 'Please select a role you would like to add:',
            choices: ['Engineer', 'Manager', 'Intern', 'quit']
        });

        // get the role the user selected and exit the loop if the user quit
        const employeeRole = response.role;
        if (employeeRole === 'quit') break;

        // get questions for chosen employee role
        const employeeConstructor = employeeTypes[employeeRole];
        const employeeData = await inquirer.prompt((new employeeConstructor).getIntroQuestions());

        console.log(`\nCreated new ${employeeRole} for ${employeeData.name}!\n`);

        // add new employee to the render queue
        employeeList.push({
            role: employeeRole,
            ...employeeData
        });

    }

    return employeeList;
}

/* ------------ */
/* Init Program */
/* ------------ */
getEmployeeDataAsync()
    .then(generatePage)
    .then(renderPage);
