const getOrders = require('./index.js');

getOrders({
    clientApiKey: process.env.CLIENT_API_KEY,
    userApiKey: process.env.USER_API_KEY,
    url: process.env.URL
},(result)=>{
    console.log(JSON.stringify(result,null,2))
});

