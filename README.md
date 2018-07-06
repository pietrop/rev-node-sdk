# `rev-node-skd`

A few functions to connect to the [Rev transcription API](https://www.rev.com/api/).

See [Rev quick start for an overview of the API](https://www.rev.com/api/quick-start/introduction) and [documentation](https://www.rev.com/api/docs) for more details.


## Setup

_stack - optional_

_How to build and run the code/app_

### for dev 
- git clone
- cd into folder
- npm install

- get Rev.com sandbox API keys, 
- add to `.env` file. 
    - `.env` not present in repo by default as it's excluded by `.gitignore` to avoid committing credentials accidentally.
 
### for production 

 - npm install -save  <!-- TBC -->

 - credentials can be passed to the functions as you see more appropriate. 

## Usage

require in your code, see `example-usage.js` for more detailed example.
 

## System Architecture

_High level overview of system architecture_


see code structure in `index.js ` and `src` folder

## Development env

 _How to run the development environment_

_Coding style convention ref optional, eg which linter to use_

_Linting, github pre-push hook - optional_

- node
- npm 
 

## Build

_How to run build_

No Build needed

## Tests

_How to carry out tests_

Mimimal tests with Jest

`npm test`

## Deployment

_How to deploy the code/app into test/staging/production_

No deployment, it's node module


## Rev.com API 

### Implemented functions from the API
- [X] Get your orders on Rev.com, to check the status they are at, to get order number to retrieve individual once.
- [X] Using order number, get the rev transcript json
- [X] Using order number, get the associated media, eg mp4 file
- [X] Convert Rev json transcript to autoEdit json transcription spec 

### Not implemented
- [ ] send media to Rev for transcription  - local file
- [ ] send media to Rev for transcription  - URI
- [ ] send media to Rev for transcription  - S3 bucket
- [ ] ...others...


## Contributing  
Feel free to get in touch, raise a github issue. Pull requests welcome.

<!-- https://curl.trillworks.com/#node 
-->

<!-- 
- Retrieve completed files
    - list them up 

- retrieve using ID
- retrieve transcription json. 
-->


<!-- 
- Create `Transcription` in Rev.com 
- with time-codes
- Edit in Rev studio if needed. 
- make note of order number for specific transcription 
- use autoEdit to retrieve transcription using order number. 
 -->


 <!-- 
 Notes, integration with autoEdit:"

 - Settings 
    - add Rev to settings
    - Client API key
    - User API key
    - Rev API Url

 - New Transcription 
    - add Rev option 
        - Order number input 
        - No need for language choice 
        - Keep name + description 


- Interactive transcription generator
    - add module in transcriber module in index
        - and in sub-module

  -->