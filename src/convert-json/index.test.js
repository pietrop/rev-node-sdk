const convertRevTranscription = require('./index.js');
const revTranscriptExample = require('../example-outputs/rev-transcript.json');

test('Convert Rev transcript json to autoEdit transcript spec', () => {
    var autoEditTranscriptJson = convertRevTranscription(revTranscriptExample);
    expect(JSON.stringify(autoEditTranscriptJson)).toBe(JSON.stringify(expectedOutput));
});


const expectedOutput = [
    {
      "id": 0,
      "speaker": "Interviewee",
      "paragraph": [
        {
          "id": 0,
          "startTime": "00:00:20,000",
          "endTime": "00:00:20,566",
          "line": [
            {
              "id": 0,
              "startTime": "00:00:20,000",
              "endTime": "00:00:20,138",
              "text": "so"
            },
            {
              "id": 1,
              "startTime": "00:00:20,222",
              "endTime": "00:00:20,566",
              "text": "this"
            }
          ]
        }
      ]
    },
    {
      "id": 1,
      "speaker": "Interviewee 2",
      "paragraph": [
        {
          "id": 1,
          "startTime": "00:00:20,000",
          "endTime": "00:00:20,566",
          "line": [
            {
              "id": 0,
              "startTime": "00:00:20,000",
              "endTime": "00:00:20,138",
              "text": "so"
            },
            {
              "id": 1,
              "startTime": "00:00:20,222",
              "endTime": "00:00:20,566",
              "text": "this"
            }
          ]
        }
      ]
    }
  ]