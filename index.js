const inquirer = require(inquirer);
const fs = require('fs')

inquirer.prompt (
    [
        {
            type:'input',
            message:"What's the project title?",
            name: 'title',
            
            validate: (value)=>{if (value){return true}else {return "I need a value to continue"}}
        },
        {
            type:'input',
            message:"How do you install or download?",
            name: 'installation',
            
            validate: (value)=>{if (value){return true}else {return "I need a value to continue"}}
        },
        {
            type:'input',
            message:"Are there any instructions to follow?",
            name: 'instructions',
            
            validate: (value)=>{if (value){return true}else {return "I need a value to continue"}}
        },
        {
            type:'list',
            message:"What software do you use",
            name: 'software',
            choices: "Awesome",
            validate: (value)=>{if (value){return true}else {return "I need a value to continue"}}
        },
        {
            type:'input',
            message:"GitHub Username",
            name: 'Git',
            
            validate: (value)=>{if (value){return true}else {return "I need a value to continue"}}
        },
        {
            type:'input',
            message:"E-mail",
            name: 'email',
            
            validate: (value)=>{if (value){return true}else {return "I need a value to continue"}}
        },
        {
            type:'input',
            message:"What use does your project have?",
            name: 'usage',
            
            validate: (value)=>{if (value){return true}else {return "I need a value to continue"}}
        },
        {
            type:'input',
            message:"What's the project title?",
            name: 'license',
            
            validate: (value)=>{if (value){return true}else {return "I need a value to continue"}}
        },
    ]
)