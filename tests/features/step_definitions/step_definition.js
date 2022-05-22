const World = require('../../support/World');
const argv = require("yargs").argv;
const { Given, When, Then } = require('cucumber');
const testDataFile = require('../../testData/dev');
const assert = require('assert').strict;
let yamlFiles;
let resourcePath;
let testData;
let endpoint;
let response;

Given('I have a service {string}', function(A){
    yamlFiles = World.loadingYaml();
    resourcePath = yamlFiles[A];
});

Given('I have testData {string}', function(data) {
    testData = testDataFile[data];
})

Given('I have input {string} as {string}', function(resource,value) {
    if(resource.startsWith("data_")){
       resourcePath = resourcePath.replace(resource,testData[value.slice(5,)])
    }
})

When('I submit the values', function(){
    endpoint = yamlFiles[dev] + resourcePath
    let options = {
        method :'GET',
        headers: {'Content-Type': 'application/json'}
    }
    response = World.request(endpoint,options);
})

Then('The Expected result is {int}', function(ExpResult){
    assert.deepStrictEqual(ExpResult,response.body)
})

Then('Expected status code is {int}', function(ExpResult){
    assert.deepStrictEqual(ExpResult,response.status)
})