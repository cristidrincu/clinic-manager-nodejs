module.exports = {
    createUser(sequelizeConn, SequelizeORM) {
        var User = sequelizeConn.define('users', {
            id: {
                type: SequelizeORM.UUID,
                defaultValue: SequelizeORM.UUIDV4,
                primaryKey: true,
                notNull: true
            },
            firstName: {
                type: SequelizeORM.STRING,
                allowNull: true
            },
            lastName: {
                type: SequelizeORM.STRING,
                allowNull: true
            },
            age: {
                type: SequelizeORM.INTEGER,
                allowNull: true
            },
            sex: {
                type: SequelizeORM.STRING,
                allowNull: true
            },
            department: {
                type: SequelizeORM.STRING,
                allowNull: true
            },
            specialization: {
                type: SequelizeORM.STRING,
                allowNull: true
            },
            experience: {
                type: SequelizeORM.INTEGER,
                allowNull: true
            }
        });

        return User;
    }
};
