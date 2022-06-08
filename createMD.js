const fs = require('fs');



function createMD({ title, tests, description, packages, useage, license, gitHub, email, contribute, authors, guidelines }) {
  // console.log(response);
  fs.writeFileSync("README.md", '')
  // console.log(description, packages, useage, license, gitHub, email, contribute, guidelines);
  fs.appendFileSync("README.md", `# ${title} `)
  fs.appendFileSync("README.md", `\n\n## Table of Contents 📑: \n\n [Description](#Descrition)🪧 \n\n [licenses](#licenses)🔐 \n\n [contactMe](#contactMe) 📬`);
  fs.appendFileSync("README.md", `\n\n## #Descrition: \n ${description} \n \n Instillation💾: `);
  fs.appendFileSync("README.md", `\n\n### Packages📦: \n ${packages}`);
  fs.appendFileSync("README.md", `\n\n### Useage🔩: \n ${useage}`);
  fs.appendFileSync("README.md", `\n\n### Tests🧪: \n ${tests}`);
  fs.appendFileSync("README.md", `\n\n## #Licenses🔐: \n \n [](https://img.shields.io/badge/license-${license}-blue)`);
  fs.appendFileSync("README.md", `\n\n## Questions⁉️:\n\n #contactMe \n If you have any questions, or would like to see more of my work, you can find my GitHub Profile  [here](https://github.com/${gitHub})\n or reach out directly to my [email](email${email})\n`);
  if (authors === "N/A") {
    return
  } else {
    fs.appendFileSync("README.md", `\n\n## #Authors📚: \n \n ${authors}`);
  }
  if (contribute === "N/A") {
    return
  } else {
    fs.appendFileSync("README.md", `\n\n## How to contribute🧑🏿‍🤝‍🧑🏽: \n ${contribute}`);
    fs.appendFileSync("README.md", `\n\n## Guidelines📐: \n ${guidelines}`);
  }

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