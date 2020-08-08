const mytest1 = require('./detail/00_mytest1.js');

exports.seed = async function (knex) {
  await mytest1(knex);

  return;
};
