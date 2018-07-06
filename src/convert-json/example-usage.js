const convertRevTranscription = require('./index.js');
const revTranscriptExample = require('../example-outputs/rev-transcript.json');
var autoEditTranscriptJson = convertRevTranscription(revTranscriptExample);
console.log(JSON.stringify(autoEditTranscriptJson,null,2));