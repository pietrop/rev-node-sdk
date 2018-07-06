const convertRevTranscription = require('./src/convert-json/index.js');
const getOrders = require('./src/get-orders/index.js');
const getTranscriptJson = require('./src/get-transcript-json/index.js');
const getMedia = require('./src/get-media/index.js');

module.exports.convertRevTranscription = convertRevTranscription;
module.exports.getOrders = getOrders;
module.exports.getTranscriptJson = getTranscriptJson;
module.exports.getMedia = getMedia;