require('dotenv').config()
const request = require('request');


const credentials =  `Rev ${process.env.CLIENT_API_KEY}:${process.env.USER_API_KEY}`;

var headers = {
    'Authorization': credentials,
    'Content-Type': 'application/json'
};

// Step 1: Authenticate and Send Your First Request
https://www.rev.com/api/quick-start/authenticate
var options = {
    url: 'https://api-sandbox.rev.com/api/v1/orders',
    headers: headers
};

// Request callback
function callback(error, response, body) {
    if (!error && response.statusCode == 200) {
        console.log(response.statusCode, response.statusMessage,' request successful')
        // console.log(JSON.stringify(JSON.parse(body),null,2))
        console.log(body)
    }
    else if(!error && response.statusCode == 201) {
        console.log(response.statusCode, response.statusMessage,' created resource');
        console.log(body);
        // when creating order -  Now we’re ready for the second step — taking the URI and using it with POST /orders.
        console.log(response.headers.location)
        fs.writeFileSync('response201.json', JSON.stringify(response,null,2))
    }
    else{
       var errorMessage = `Error: ${response.statusCode} ${response.statusMessage}`;
       console.error(errorMessage);
       console.error(error);
    }
}

// making the request 
request(options, callback);

