exports.up = function(knex) {
    // define your columns
    // Example
      return knex.schema.createTable('migration_name', (table) => {
          table.increments('id');
          table.string('username', 255).notNullable();
          table.string('password', 255).notNullable();
      });
  };
  
  
  exports.down = function(knex) {
    // action when drop your table
    // Example:
      return knex.schema.dropTable('migration_name');
  };