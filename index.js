const accountSid = 'AC55092f1b3d28240e50d20dffe3bee453'; 
const authToken = '14c585bf9666c9250113f3f9bd39c88a'; 
const client = require('twilio')(accountSid, authToken); 
const http = require('http');
const express = require('express');
const MessagingResponse = require('twilio').twiml.MessagingResponse;
const bodyParser = require('body-parser');

 
client.messages 
      .create({ 
         body: 'hello world', 
         from: '+15202639561',       
         to: '+14087224568' 
       }) 
      .then(message => console.log(message.sid)) 
      .done();



