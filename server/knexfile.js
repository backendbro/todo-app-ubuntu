// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */

module.exports = {


  development: {
    client: 'postgresql',
    connection: {
      database: 'todo_app',
      user: 'postgres',
      password: 'islam123',
      host:'localhost',
      port:5432
    },
    migrations: {
      tableName: __dirname + '/migrations'
    }
  },

  production: {
    client: 'postgresql',
    connection: {
      database: 'todo_app',
      user: 'postgres',
      password: 'islam123',
      host:'localhost',
      port:5432
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: __dirname + '/migrations'
    }
  }

//   development: {
//   client: 'pg',
//   connection: {
//     database: 'todo_app',
//     user: 'postgres',
//     password: 'islam123',
//     host:'localhost',
//     port:5432
//   },
//   migrations: {
//     directory: __dirname + '/migrations',
//   }
// }

};
