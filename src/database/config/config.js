require('dotenv').config()
module.exports = {
  development: {
    username: "root",//process.env.DB_USERNAME,
    password: "123456",//process.env.DB_PASSWORD,
    database: "movies_db",
    host: "127.0.0.1",
    dialect: "mysql"
  },
  test: {
    username: "root",
    password: null,
    database: "database_test",
    host: "127.0.0.1",
    dialect: "mysql"
  },
  production: {
    username: "root",
    password: null,
    database: "database_production",
    host: "127.0.0.1",
    dialect: "mysql"
  }
}
