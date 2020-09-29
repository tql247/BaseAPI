// for secure issue
const {hashPassword} = require('../../../utils/helper')

module.exports = async (knex) => {
    await knex('migration_name').del();
    await knex('migration_name').insert([
      {
        username: 'doikhongnhulamo',
        password: await hashPassword('doikhongnhulamo')
      },
      {
        username: 'wibu',
        password: await hashPassword('linh')
      },
    ]);
  
    return;
};