require('dotenv').config();
const getTranscriptJson = require('./index.js');

getTranscriptJson({
    clientApiKey: process.env.CLIENT_API_KEY,
    userApiKey: process.env.USER_API_KEY,
    url: process.env.URL,
    orderNumber: 'TC0681559423'
}, (result) => {
    console.log(JSON.stringify(result, null, 2))
});