const axios = require('axios');
const { expect } = require('chai');
const jokesApi = require('../api/random-api');

describe('Chuck norries', async function () {
    it('should get a new joke upon new request',async function () {
       const joke1 = await jokesApi.getRandomJoke('randomToken');
       const joke2 = await jokesApi.getRandomJoke();

       //Verify Status Codes
       expect(joke1.status).to.equal(200);
       expect(joke2.status).to.equal(200);

       // verify user get different joke upon every request
       expect(joke1.dat.value).not.to.equal(joke2.data.value);
    });
});