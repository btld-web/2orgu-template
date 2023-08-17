import * as fs from 'fs';
import inquirer from 'inquirer';

let questions = [
  {
    type: 'list',
    name: 'prefix',
    message: 'What type of component?',
    choices: [
      'tile-',
      'list-',
      'grid-',
      'form-',
      'filter-',
      'nav- (Tab, Header, Expand, ...)',
      'mixed-'
    ]
  },
  {
    type: 'input',
    name: 'postfix',
    message: "Whats the postfix name of your component?",
  }
]

inquirer
  .prompt(questions)
  .then((answers) => {
    console.log(answers)
  })
