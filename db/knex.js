var environment = process.env.NODE_ENV || 'development';
var config = require('../knexfile.js')[environment];

module.exports = {
  knex: require('knex')(config),
};
