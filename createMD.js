const fs = require('fs');

function createMD({ title, install, tests, description, packages, useage, license, gitHub, email, contribute, authors, guidelines }) {
  fs.writeFileSync("README.md", '')
  fs.appendFileSync('README.md', `
  # ${title}
  \n
  ## Table of Contents 📑:
  ![licenses](https://img.shields.io/badge/license-${license}-blue)
  \n
  [Description](#Description)🪧
  [licenses](#licenses)🔐
  [contactMe](#contactMe) 📬
  ## #Description:
  \n
  ${description}
  \n
  ## #Instillation💾:
  \n
  ${install}
  ### Packages📦:
  \n
  ${packages}
  \n 
  ### Useage🔩:
  \n
  ${useage}
  \n
  ### Tests🧪:
  \n
  ${tests}
  \n
  ## #Licenses🔐:
  \n
  ${license}
  ![licenses](https://img.shields.io/badge/license-${license}-blue)
  \n
  \n
  ## Guidelines📐: 
  \n ${guidelines}
  ## Questions⁉️:
  \n
  ## #contactMe:
  \n
  If you have any questions, or would like to see more of my work, you can find my GitHub Profile [here](https://github.com/${gitHub})\n or reach out directly to my [email](email${email})\n
  `)

  if (authors === "N/A") {
  } else {
    fs.appendFileSync("README.md", `\n\n## #Authors📚: \n \n ${authors}`);
  }


}

module.exports = createMD

