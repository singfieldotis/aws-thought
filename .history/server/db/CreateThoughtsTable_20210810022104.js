const AWS = require('aws-sdk');

AWS.config.update({
  region: "us-east-2",
  endpoint: "http://localhost:8000"
});

