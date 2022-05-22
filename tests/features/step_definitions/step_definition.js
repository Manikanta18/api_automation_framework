const World = require('../../support/World');
const argv = require("yargs").argv;
const { Given, When, Then } = require('cucumber');
const testDataFile = require('../../testData/dev');
const assert = require('assert').strict;
let resourcePath;
let baseUrlFile = require('../../properties/baseURL');
let service = require('../../properties/service');
let testData;
let endpoint;
let response;
let status;

Given('I have a service {string}', function(value){
    resourcePath = service[value]
});

Given('I have testData {string}', function(data) {
    testData = testDataFile[data];
    console.log(testData);
})

Given('I have input {string} as {string}', function(resource,value) {
    if(value.startsWith("data_")){
        resourcePath = resourcePath.replace(resource,testData[value.slice(5,)])
    }
    else {
        resourcePath = resourcePath.replace(resource,value);
    }
})

When('I submit the values', async function(){
    endpoint = baseUrlFile["dev"] + resourcePath
    let options = {
        method :'GET',
        headers: {'Content-Type': 'application/json'}
    }
    console.log(endpoint,options);
    response = await World.request(endpoint,options);
})

Then('The Expected result is {string}', function(ExpResult){
    assert.deepStrictEqual(ExpResult,response.body)
})

Then('Expected status code is {int}', function(ExpResult){
    assert.deepStrictEqual(ExpResult,response.code)
})