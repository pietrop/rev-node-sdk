require('dotenv').config()
const createRequestOptionsHeader = require('./util-options-header.js');

var reqOption = createRequestOptionsHeader({
    clientApiKey:'Some client key', 
    userApiKey: 'some API keys',
    url: 'REV URL ',
    // Optional, only when constructing request to retrieve an order
    orderNumber: 'TCABCSDS',
    // type of request
    // 'getMedia', 'getTranscription', 'getOrdersStatus', 'getOrder'
    // order status if default if others not specified.
    type: 'getTranscription'
})

console.log(reqOption);