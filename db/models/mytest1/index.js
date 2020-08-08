const { BaseModel } = require('@models/basemodel');
const { knex } = require('@knex');
const relation = require('./relation');
// const { generateAuthToken, findByCredentials } = require('./method');

BaseModel.knex(knex);

class Mytest1 extends BaseModel {
  static get tableName() {
    return 'mytest1';
  }

  static get relationMappings() {
    return relation(Mytest1);
  }
}

// Mytest1.findByCredentials = findByCredentials;
// Mytest1.prototype.generateAuthToken = generateAuthToken;

module.exports = {
    Mytest1,
};
