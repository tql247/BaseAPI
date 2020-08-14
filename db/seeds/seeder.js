const mytest1 = require('./detail/00_mytest1.js');
const user = require('./detail/01_user.js');

exports.seed = async function (knex) {
  await mytest1(knex);
  await user(knex);

  return;
};
