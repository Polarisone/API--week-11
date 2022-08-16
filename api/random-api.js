"use strict";
const client = require('./api-client');



class Random {
    async getRandomJoke(token){
        const response = await client.get('jokes/random', token);

        return response;
    }

    async getJokeById(){
        const response = await client.get('jokes/random', token);

        return response;
    }
    async getJokeByName(){
    const response = await client.get('jokes/random', token);

    return response;
    }
}
module.exports = new Random();
