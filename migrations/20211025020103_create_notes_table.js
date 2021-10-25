
exports.up = function(knex) {
    return knex.schema.createTable("notes", (table) => {
        table.increments().index();
    
        table.text("title").notNullable();
    
        table.text("message");
      });
};

exports.down = function(knex) {
    return knex.schema.dropTable("notes");
};
