const inquirer = require("inquirer");
const fs = require('fs');

inquirer.prompt(
    [
        {
            type: 'input',
            message: "What's the project title?",
            name: 'title',

            validate: (value) => { if (value) { return true } else { return "I need a value to continue" } }
        },
        {
            type: 'input',
            message: "Enter in Description of your Project",
            name: 'description',

            validate: (value) => { if (value) { return true } else { return "I need a value to continue" } }
        },
        {
            type: 'input',
            message: "What are the installation instructions",
            name: 'installation',

            validate: (value) => { if (value) { return true } else { return "I need a value to continue" } }
        },
        {
            type: 'input',
            message: "What are the usages?",
            name: 'usage',

            validate: (value) => { if (value) { return true } else { return "I need a value to continue" } }
        },
        {
            type: 'list',
            message: "What License are you using",
            name: 'license',
            choices: ["MIT", "Apache", "GPL", "GitHub", "NA"],
            validate: (value) => { if (value) { return true } else { return "I need a value to continue" } }
        },
        {
            type: 'input',
            message: "Provide testing instruction",
            name: 'test',

            validate: (value) => { if (value) { return true } else { return "I need a value to continue" } }
        },
        {
            type: 'input',
            message: "GitHub Username",
            name: 'git',

            validate: (value) => { if (value) { return true } else { return "I need a value to continue" } }
        },

        {
            type: 'input',
            message: "E-mail",
            name: 'email',

            validate: (value) => { if (value) { return true } else { return "I need a value to continue" } }
        },

        {
            type: 'input',
            message: "Enter any credits, or inspirations",
            name: 'credit',

            validate: (value) => { if (value) { return true } else { return "I need a value to continue" } }
        },
    ]
).then(({
    title,
    installation,
    description,
    usage,
    test,
    git,
    email,
    credit,
    license,
}) => {
    const expr = license;
    switch (expr) {
        case 'GPL':{
            var label = "![license](https://img.shields.io/badge/license-GPL-brightgreen)";
            console.log("GPL")
            break;}
            
        case 'MIT':{
            var label = "![license](https://img.shields.io/badge/license-MIT-green)";
            console.log("MIT")
            break;}
        
        case 'Apache':{
            var label = "![license](https://img.shields.io/badge/license-Apache-blue)";
            console.log("Apache")
            break;}
            
        case 'GitHub':{
            var label = '![license](https://img.shields.io/badge/license-GitHub-brightgreen)';
            console.log("GitHub")
            break;}
        case 'NA':
            console.log("Not applicable");
            break;
    };

    const template = ` # ${title}
### License
${license} ${label}
* [Installation](#Installation)
* [Usage](#usage)
* [Test](#test)
* [Credits](#credits)
<hr>

## __Description__
${description}

## __Installation__
${installation}

## __usage__
${usage}

## __Test__
${test}

## __Credits__
${credit}

* GitHub: [https://${git}](https://${git})

* E-mail: [${email}](${email})`;
    writeUpReadMe(title, template)
}
)

function writeUpReadMe(filename, template) {
    console.log(filename)
    fs.writeFile(`./${filename.toLowerCase().split(' ').join('')}.md`, template, (err) => {
        if (err) {
            console.log(err)
        }
        console.log("Your README has is generated")
    })
};
