require('dotenv').config()
const request = require('request');

const credentials =  `Rev ${process.env.CLIENT_API_KEY}:${process.env.USER_API_KEY}`;

// 1. Submitting an order using a public URL or URI - S3 bucket 
var dataString = {
    "caption_options": {
       "inputs": [
          {
             "uri": "urn:s3:[public-rev]api-samples/Audio and Video Transcription with Rev.com.mp4"
          }
       ],
       "output_file_formats": [
          "SubRip"
       ]
    }
 };

 var headers = {
    'Authorization': credentials,
    'Content-Type': 'application/json'
};


 var options = {
    url: 'https://api-sandbox.rev.com/api/v1/orders',
    method: 'POST',
    headers: headers,
    body:   JSON.stringify(dataString)
};

 // Request callback
function callback(error, response, body) {
    if (!error && response.statusCode == 200) {
        console.log(response.statusCode, response.statusMessage,' request successful')
        // console.log(JSON.stringify(JSON.parse(body),null,2))
        console.log(body,null,2)
    }
    else if(!error && response.statusCode == 201) {
       // -->>>>><<<<<------
        console.log(response.statusCode, response.statusMessage,' created resource');
        console.log(body);
        // when creating order -  Now we’re ready for the second step — taking the URI and using it with POST /orders.
        console.log(response.headers.location)
    }
    else{
    //    var errorMessage = `Error: ${response.statusCode} ${response.statusMessage}`;
    //    console.error(errorMessage);
       console.error(error);
    }
}

// making the request 
request(options, callback);