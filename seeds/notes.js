
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('notes').del()
    .then(function () {
      // Inserts seed entries
      return knex('notes').insert([
        {title: 'title 1', message: 'message 1'},
        {title: 'title 2', message: 'message 2'},
        {title: 'title 3', message: 'message 3'},
      ]);
    });
};
