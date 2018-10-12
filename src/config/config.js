let NodeAppDBConfig = require('../configuration/config');

module.exports = {
  "development": {
    "username": NodeAppDBConfig.development.database.connection.user,
    "password": NodeAppDBConfig.development.database.connection.password,
    "database": NodeAppDBConfig.development.database.connection.name,
    "host": NodeAppDBConfig.development.database.connection.host,
    "dialect": "mysql"
  }
};
