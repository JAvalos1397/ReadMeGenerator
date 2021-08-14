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
            message:"What License where you using",
            name: 'License',
            choices: ["MIT License","Apache","GNU","ISC","Rust", "NA"],
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
            message:"Enter any credits, or inspirations",
            name: 'Acknowledgments',
            
            validate: (value)=>{if (value){return true}else {return "I need a value to continue"}}
        },
    ]
).then(({
    title,
    installation,
    instructions,
    license,
    git,
    linkdein,
    email
}) => {
const template =` # ${title}

* [Installation](#Installation)
* [Usage](#usage)
* [contribution] (#contribution)
* [credits](#credits)
* [License](#license)
# Installation
${installation}

## Usage
${usage}

## Contribution
${contribution}

## Instructions
${instructions}

## Credits
${credits}

## License
${license}

# Contact
* GitHub: ${git}
*Linkdin: ${linkdein}
*E-mail: ${email}`;
writeUpReadMe(title,template)
}
)

function wrtieUpReadMe(filename,template){
    fs.writefile(`./${filename.toLowerCase().split(' ').join('')}.md`,template,(err)=>{
    if(err){
        console.log(err)
    }
    console.log("Your README has is generated")
})
}