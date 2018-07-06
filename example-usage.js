require('dotenv').config();
/**
 *  Get your orders on Rev.com, to check the status they are at,
 *  and get order number to retrieve individual once
*/
const getOrders = require('./index.js').getOrders;
getOrders({
    clientApiKey: process.env.CLIENT_API_KEY,
    userApiKey: process.env.USER_API_KEY,
    url: process.env.URL
},(result)=>{
    console.log('/------------------/');
    console.log('GET ORDERS:: ',JSON.stringify(result,null,2))
});

/**
 * Using order number, get the rev transcript json
 */
const getTranscriptJson = require('./index.js').getTranscriptJson;

getTranscriptJson({
    clientApiKey: process.env.CLIENT_API_KEY,
    userApiKey: process.env.USER_API_KEY,
    url: process.env.URL,
    orderNumber: 'TC0681559423' 
},(result)=>{
    console.log('/------------------/');
    console.log('GET TRANSCRIPT JSON:: ',JSON.stringify(result,null,2))
});

/**
* Convert Rev json transcript to autoEdit json transcript
*/
const convertRevTranscription = require('./index.js').convertRevTranscription;
const revTranscriptExample = require('./src/example-outputs/rev-transcript.json');

var autoEditTranscriptJson = convertRevTranscription(revTranscriptExample);
console.log('/------------------/');
console.log('CONVERT EXAMPLE REV JSON TO AUTOEDIT JSON:: ',JSON.stringify(autoEditTranscriptJson,null,2));

/**
 * Get Media, 
 * Retrieves the media file, video or audio, associated with the transcription order 
 */
const getMedia = require('./src/get-media/index.js');

getMedia({
    clientApiKey: process.env.CLIENT_API_KEY,
    userApiKey: process.env.USER_API_KEY,
    url: process.env.URL,
    orderNumber: 'TC0681559423' 
    // TODO: add path to where to save file?
},(result)=>{
    // TODO: should return path to file
    console.log(JSON.stringify(result,null,2))
});