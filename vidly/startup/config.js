const config = require('config');

module.exports = function () {
  if (!config.get('jwtPrivateKey')) {
    throw new Error('ERROR: jwtPrivateKey is not defined');
  } //to set environment  export vidly_jwtPrivateKey=mySecureKey
};
