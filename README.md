## Table of Contents 📑:

Alot of this was written using this application

![licenses](https://img.shields.io/badge/license-OPEN-blue)

[Description](#Description)🪧
[licenses](#licenses)🔐
[contactMe](#contactMe) 📬

## #Description📜:

This is an application to help streamline the dev process. writing ReadMe can be time consuming, but with my app, you can do it straight from your command line! \n I hope that this makes it easy for people in the future to get to the real development, and less of the documentation.

ps. as most of my apps, I am fond of emojis, but I will soon add a way to disable them for other grumpies 😠

## #Instillation💾:

Just install the app and run it from your command line, it will create a .md file for you to use anywhere

### Packages📦:

Inquirer \n Colors
Inquirer - Used to prompt the user and store responses.
Colors - Used to add a little bit of color and difference to the app from the normal command line.

### Useage🔩:

![Video](/assets//ReadMe%20Generator%201-0-5.mp4)
Of application in use.

![Gif](/assets/ReadMe%20Generator%201-0-5.gif)

Just run the file in node.js, then either enter in your own responses, or use the default ones provided.

### Tests🧪:

Not yet, but I will be adding some .test files in the future.

## #Licenses🔐:

OPEN

![licenses](https://img.shields.io/badge/license-OPEN-blue)

## Guidelines📐:

Submit legible PR and I will review them. And suggestions and help is appreciated!

## Questions⁉️ 🤔:

#contactMe 📬

If you have any questions, or would like to see more of my work, you can find my GitHub Profile [here](https://github.com/angeladevelops)
or reach out directly to my [email](emailsquittenplease@gmail.com)

https://drive.google.com/file/d/1sGB2C1_qvtFaUGk_sK830nyM0RHaSJRt/view?usp=sharing

## Development

I wanted the app to print instructions in the begining. I also wanted these to stand out, so youll notice the .< bgColor and color > after strings. this can all be found on

[ColorsNPM-Docs](https://www.npmjs.com/package/colors)

```js
const wait = function (seconds) {
  return new Promise(function (resolve) {
    setTimeout(resolve, seconds * 1000);
  });
};

wait(0.5)
  .then(() => {
    console.log("Welcome to README.md Generator v1.0.5!".bgWhite.black);
    return wait(1);
  })
  .then(() => {
    console.log(
      `You will be asked a series of questions \n about the what you need a README for, \n then  let the program take care of the rest!`
        .bgWhite.black
    );
    return wait(1);
  })
  .then(() => {
    console.log(
      "The README Generator comes loaded with default responses,\n hit enter to apply any of these. \n Happy genorating!"
        .bgWhite.black
    );
    return runInquirer();
  });
```

### Example reademe

[File](/assets/genREADME.md)
