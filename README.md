New framework - API

Requirements

Node version 14
node -v check version
npm installed
npm init to start new application
Setup

git clone git@github.com:Polarisone/API--week-11.git

npm i (client) to install a specific client needed for the framework
npm i mocha
npm i chai


Check client pkg version on packaje.json file
Reference client on "test"  line on package.json file

Optimize framework by using Helper Method

How to run all tests

npm test

Good practices:Have a main file with your API client so code can be updated easily if such client is replaced

Main file will require client
All other test files will reference it through a js file

Learn more about Mocha here:https://mochajs.org/

learn more about axios here:https://axios-http.com/

learn more about chai here:https://www.chaijs.com/

