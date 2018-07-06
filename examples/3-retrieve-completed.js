require('dotenv').config()
const request = require('request');

const credentials =  `Rev ${process.env.CLIENT_API_KEY}:${process.env.USER_API_KEY}`;

// Step 3: Retrieve Completed Files
// https://www.rev.com/api/quick-start/retrieve-files

var headers = {
    'Authorization': credentials
};

var options = {
    // interpolate order number 
    url: 'https://api-sandbox.rev.com/api/v1/orders/TC0564934184',
    headers: headers
};

// Retrieve Completed File

// var headers = {
//     // https://www.rev.com/api/attachmentsgetcontent
//     // can change the return type 
//     'Accept': 'application/json+rev-transcript',
//     'Authorization': credentials
// };

// var options = {
//     url: 'https://api-sandbox.rev.com/api/v1/attachments/KDasIWKlAwAAAAAA/content',
//     headers: headers
// };

// Request callback
function callback(error, response, body) {
    if (!error && response.statusCode == 200) {
        console.log(response.statusCode, response.statusMessage,' request successful')
        // console.log(JSON.stringify(JSON.parse(body),null,2))
        console.log(JSON.stringify(JSON.parse(body),null,2))
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