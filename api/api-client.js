"use strict";
const baseUrl = 'https://api.chucknorris.io/'
const axios = require("axios");



class Random {
    async get(route, token = false){
        let response;

        if(!token){
            console.log('this is getting executed')
            response = await axios.post(baseUrl + route);
        }
        else{
            console.log('this is NOT getting executed')
            response = await axios.post(baseUrl + route, token);
        } 

        return response;
    }

    async post(body, token = false){
        let response;
        
        if(!token){
            response = await axios.post(baseUrl + route, body);
        }
        else{
            response = await axios.post(baseUrl + route, body, token);
        } 

        return response;
    }

}
module.exports = new Random();