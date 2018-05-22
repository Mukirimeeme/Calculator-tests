var data = require('../data.js');

Feature('calc', {retries: 0});

Before ((I, steps, data)  => { // or Background
    steps.testEnvironment(data.url);

});


Scenario('Verify that the page loads',(I,steps,landingPage) => {
    landingPage.verifyPageLoaded();
});

Scenario('Get a subtraction of two numbers',(I,steps,landingPage, data) =>{
    landingPage.verifyPageLoaded();
    landingPage.searchforcalculator();
    landingPage.subtwonumbers();

});

Scenario('Get a sum of two numbers',(I,steps,landingPage, data) =>{
    landingPage.verifyPageLoaded();
    landingPage.searchforcalculator();
    landingPage.addthreenumbers();

});

Scenario('Clear the inputs',(I,steps,landingPage, data) =>{
    landingPage.verifyPageLoaded();
    landingPage.searchforcalculator();
    landingPage.clearall();

});

Scenario('Do multiplication',(I,steps,landingPage, data) =>{
    landingPage.verifyPageLoaded();
    landingPage.searchforcalculator();
    landingPage.multfournumber();

});

Scenario('Do Division',(I,steps,landingPage, data) =>{
    landingPage.verifyPageLoaded();
    landingPage.searchforcalculator();
    landingPage.dividenumbers();

});

