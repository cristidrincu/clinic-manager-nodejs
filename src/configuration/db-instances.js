const SequelizeORM = require('sequelize');
const databaseConfiguration = require('./config').development;
const sequelizeConn = new SequelizeORM(databaseConfiguration.database.connection.name, databaseConfiguration.database.connection.user, databaseConfiguration.database.connection.password, {
  host: databaseConfiguration.database.connection.host,
  dialect: databaseConfiguration.database.client,
  logging: false
});

const UserFactory = require('../factories/user');
const RoleFactory = require('../factories/role');

module.exports = {
  entities: {
    User: UserFactory.build(sequelizeConn, SequelizeORM),
    Role: RoleFactory.build(sequelizeConn, SequelizeORM)
  },
  setupModelRelations() {
    this.entities.User.hasOne(this.entities.Role, { foreignKey: 'user_id' });
    this.entities.Role.belongsTo(this.entities.User, { foreignKey: 'user_role_id' });
  },
  connectToDBInstance: function () {
    try {
      sequelizeConn.authenticate().then(() => {
        console.log('Connection has been established successfully.');
        const User = UserFactory.build(sequelizeConn, SequelizeORM);
        const Role = RoleFactory.build(sequelizeConn, SequelizeORM);

        Promise.all([
          User.sync({ force: false }),
          Role.sync({ force: false }),
        ]).then(() => {
          this.setupModelRelations();
        })
      });
    } catch (error) {
      console.log('Unable to connect to the database:', error.message);
    }
  }
};
