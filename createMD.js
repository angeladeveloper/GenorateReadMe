const fs = require('fs');



function createMD({ description, packages, useage, license, gitHub, email, contribute, guidelines }) {
  // console.log(response);
  fs.writeFileSync("README.md", '')
  // console.log(description, packages, useage, license, gitHub, email, contribute, guidelines);
  fs.appendFileSync("README.md", `# Title `)
  fs.appendFileSync("README.md", `\n\n## Table of Contents: \n\n [Description](#Descrition) \n\n [licenses](#licenses)`);
  fs.appendFileSync("README.md", `\n\n## #Descrition: \n ${description} \n \n Instillation: `);
  fs.appendFileSync("README.md", `\n\n### Packages: \n ${packages}`);
  fs.appendFileSync("README.md", `\n\n### Useage: \n ${useage}`);
  fs.appendFileSync("README.md", `\n\n## #Licenses: \n \n ${license}`);
  fs.appendFileSync("README.md", `\n\n## How to contribute: \n ${contribute}`);
  fs.appendFileSync("README.md", `\n\n## Guidelines: \n ${guidelines}`);
  fs.appendFileSync("README.md", `\n\n## Questions: \n If you have any questions, or would like to see more of my work, you can find my GitHub Profile  [here](https://github.com/${gitHub})\n or reach out directly to my [email](email${email})\n [Description](#Descrition)`);
}



// description: 'Desctption to come',
//   packages: 'NONE',
//   useage: 'Instructions to come',
//   license: 'MIT',
//   gitHub: 'N/A',
//   contribute: 'N/A',
//   guidelines: 'N/A',
//   tests: 'NO'


module.exports = createMD


  // const description = response.description
  // const packages = response.packages
  // const useage = response.useage
  // const license = response.license
  // const gitHub = response.gitHub
  // const email = response.email
  // const contribute = response.contribute
  // const guidelines = response.guidelines