require('dotenv').config()
const request = require('request');
const fs = require('fs');


const credentials =  `Rev ${process.env.CLIENT_API_KEY}:${process.env.USER_API_KEY}`;



// 2. Submitting a local file to POST /inputs - part 1
var headers = {
    'Authorization': credentials,
    'Content-Type': 'video/mp4',
    // file name needs to be interpolated.
    // link to supported file types
    'content-disposition': 'attachment; filename="legovideo.mp4"'
};

var dataString = '/legovideo.mp4';

var options = {
    url: 'https://api-sandbox.rev.com/api/v1/orders',
    method: 'POST',
    headers: headers,
    // body:   dataString
    formData : {
        "image" : fs.createReadStream(dataString)
    }
};

//// Part 2


// 2. Submitting a local file to POST /inputs - part 2 ????
// var headers = {
//     'Authorization': credentials,
//     'Content-Type': 'application/json'
// };

// var dataString = {
//     "caption_options": {
//        "inputs": [
//           {
//               "video_length_seconds": 6,
//              "uri": "urn:rev:inputmedia:RXVwbG9hZHMvMjAxOC0wNi0zMC8zNmJmMTdmMS0wMGRhLTQ5ZTAtYjVkMi0yNjlmMjY2N2QxOGMvbGVnb3ZpZGVvLm1wNA"
//           }
//        ],
//        "output_file_formats": [
//           "SubRip"
//        ]
//     }
//  };

// var options = {
//     url: 'https://api-sandbox.rev.com/api/v1/inputs',
//     method: 'POST',
//     headers: headers,
//     body: JSON.stringify(dataString)
// };