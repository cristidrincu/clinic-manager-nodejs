const SequelizeORM = require('sequelize');
const databaseConfiguration = require('./config').development;
const sequelizeConn = new SequelizeORM(databaseConfiguration.database.connection.name, databaseConfiguration.database.connection.user, databaseConfiguration.database.connection.password, {
    host: databaseConfiguration.database.connection.host,
    dialect: databaseConfiguration.database.client,
    logging: false
});
const GenerateEntities = require('../models');
const UsersGenerator = require('../contextual-data/scripts/generate_users');
const RolesGenerator = require('../contextual-data/scripts/generate_roles');
const _ = require('underscore');

module.exports = {
    connectToDBInstance: function () {
        var usersArr = UsersGenerator.init();
        var rolesArr = RolesGenerator.init(usersArr);

        var bulkCreateUsersPromise, bulkCreateRolesPromise, bulkCreateUserRolesPromise;
        try {
            sequelizeConn.authenticate().then(() => {
                console.log('Connection has been established successfully.');
                GenerateEntities.createUser(sequelizeConn, SequelizeORM).then(User => {
                   bulkCreateUsersPromise = User.sync({force: true}).then(() => {
                       return User.bulkCreate(usersArr);
                   }).catch(error => {
                       console.log(error.message);
                   });
                });

                GenerateEntities.createRole(sequelizeConn, SequelizeORM).then(Role => {
                    bulkCreateRolesPromise = Role.sync({force: true}).then(() => {
                        return Role.bulkCreate(rolesArr);
                   }).catch(error => {
                       console.log(error.message);
                   });
                });

                Promise.all([bulkCreateUsersPromise, bulkCreateRolesPromise, bulkCreateUserRolesPromise]).then(() => {
                    console.log('All promises for bulk creation of users and roles have fulfilled successfully!');
                }).catch(err => {
                    console.log(err.message);
                });
            });
        } catch (err) {
            console.log('Unable to connect to the database:', err.message);
        }
    }
};
