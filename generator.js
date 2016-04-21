var jwt = require('jsonwebtoken');

// Object to Encode
var payload = {
    'username': 'gousta',
    'website': 'https://github.com/gousta',
    'project': 'gousta/nodejs-jwt-generator'
};

// Set a Secret
var secret = '123456789';

// Set Headers (optional)
var headers = {
    headers: {
        'headerKey': 'headerValue'
    }
};

var token = jwt.sign(payload, secret, headers);

console.log('    ');
console.log("Token:\n------");
console.log(token);
console.log('    ');