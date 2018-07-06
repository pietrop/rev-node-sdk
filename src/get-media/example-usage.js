require('dotenv').config();
const getMedia = require('./index.js');

getMedia({
    clientApiKey: process.env.CLIENT_API_KEY,
    userApiKey: process.env.USER_API_KEY,
    url: process.env.URL,
    orderNumber: 'TC0681559423' 
    // TODO: add path to where to save file?
},(result)=>{
    // TODO: should return path to file
    console.log('example usage ',JSON.stringify(result,null,2))
});