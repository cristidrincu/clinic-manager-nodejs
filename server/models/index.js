const UserModel = require('./user');
const RoleModel = require('./role');

module.exports = {
    createUser: (sequelizeConn, SequelizeORM) => {
        return new Promise(resolve => {
            resolve(UserModel.createUser(sequelizeConn, SequelizeORM));
        });
    },
    createRole: (sequelizeConn, SequelizeORM) => {
        return new Promise(resolve => {
            resolve(RoleModel.createRole(sequelizeConn, SequelizeORM));
        });
    }
};
