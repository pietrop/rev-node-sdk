require('dotenv').config();
const request = require('request');

function getOrders(options, cb){
    const credentials =  `Rev ${options.clientApiKey}:${options.userApiKey}`;

    var headers = {
        'Authorization': credentials,
        'Content-Type': 'application/json'
    };

    // Step 1: Authenticate and Send Your First Request
    // https://www.rev.com/api/quick-start/authenticate
    var options = {
        url: `${options.url}`,
        headers: headers
    };

    // Request callback
    function callback(error, response, body) {
        if (!error && response.statusCode == 200) {
            console.log(response.statusCode, response.statusMessage,' request successful')
            // console.log(JSON.stringify(JSON.parse(body),null,2))
            // console.log(body)
            if(cb){
                cb(JSON.parse(body));
            }
        }
        else{
        var errorMessage = `Error: ${response.statusCode} ${response.statusMessage}`;
        console.error(errorMessage);
        console.error(error);
        }
    }

    // making the request 
    request(options, callback);
}
module.exports = getOrders;