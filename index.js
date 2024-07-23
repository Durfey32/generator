import fs from 'fs'
import inquirer from 'inquirer'



inquirer
    .prompt([
        {
            type: 'input',
            message: "What is your name?",
            name: 'name'
        }
    ])
    .then((prompt) => {

        const data = 
        `<!DOCTYPE html>
        <html lang="en">

        <head>
            <meta charset="UTF-8">
            <title></title>
        </head>

        <body>
            <h1>${prompt.name}</h1>

    
        </body>
        </html>`

        fs.writeFile('index.html', data, (err) =>
            err ? console.error(err) : console.log('Success!'));
        
        }   
    );   
    