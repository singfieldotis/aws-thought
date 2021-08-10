// Load the AWS SDK for Node.js
const AWS = require('aws-sdk'); // This package is responsible for the API that allows the application to communicate with the web service.

const { v4: uuidv4 } = require('uuid');

// Set the region
AWS.config.update({region: 'us-east-2'});