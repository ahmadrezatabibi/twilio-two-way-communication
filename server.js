
const accountSid = 'AC55092f1b3d28240e50d20dffe3bee453'; 
const authToken = '14c585bf9666c9250113f3f9bd39c88a'; 
const client = require('twilio')(accountSid, authToken); 
const http = require('http');
const express = require('express');
const MessagingResponse = require('twilio').twiml.MessagingResponse;
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.post('/sms', (req, res) => {
  const twiml = new MessagingResponse();

  if (req.body.Body == 'hello') {
    twiml.message('Hi!');
  } else if (req.body.Body == 'bye') {
    twiml.message('Goodbye');
  } else {
    twiml.message(
      'No Body param match, Twilio sends this in the request to your server.'
    );
  }

  res.writeHead(200, { 'Content-Type': 'text/xml' });
  res.end(twiml.toString());
});

http.createServer(app).listen(1337, () => {
  console.log('Express server listening on port 1337');
});