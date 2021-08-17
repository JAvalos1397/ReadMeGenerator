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
            name: 'introduction',

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
            message: "What are your requirements guidelines?",
            name: 'requirements',

            validate: (value) => { if (value) { return true } else { return "I need a value to continue" } }
        },
        {
            type: 'list',
            message: "What License where you using",
            name: 'license',
            choices: ["MIT", "Apache", "GPL", "GitHub", "NA"],
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
    introduction,
    instructions,
    requirements,  
    git,
    email,
    credit,
    license,
}) => {
    const label = license;
    switch(label){
        case 'GPL':
            return "![license](https://img.shields.io/badge/license-GPL-brightgreen)";
        
        case 'MIT':
            return "![license](https://img.shields.io/badge/license-MIT-green)";
        
        case 'Apache':
            return "![license](https://img.shields.io/badge/license-Apache-blue)";
        
        case 'NA':
        console.log("Not applicable");
        break;
    }
    
    const template = ` # ${title}
## License
${license}
${label}
* [Installation](#Installation)
* [Usage](#usage)
* [requirements](#requirements)
* [credits](#credits)
* [License](#license)
<hr>

## Introduction
${introduction}

## Installation
${installation}

## Requirements
${requirements}

## Instructions
${instructions}

## Credits
${credit}

* GitHub: [GitHub](https://${git})

* E-mail: [email](${email})`;
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
// writeUpReadMe("tacos","##Tacos")