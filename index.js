import fs from 'fs'
import inquirer from 'inquirer'

let name;

const data = 
`<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <title></title>
</head>

<body>
    <h1>${name}</h1>
    
</body>
</html>`

inquirer
    .prompt([
        {
            type: 'input',
            message: "What is your name?",
            name: 'name'
        }
    ])
    .then((prompt) => {

        name = prompt.name;

        fs.writeFile('index.html', data, (err) =>
            err ? console.error(err) : console.log('Success!'))
        
        }   
    );   
    