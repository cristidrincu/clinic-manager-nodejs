module.exports = {
    createRole(sequelizeConn, SequelizeORM) {
        var Role = sequelizeConn.define('roles', {
            role_id: {
                type: SequelizeORM.UUID,
                defaultValue: SequelizeORM.UUIDV4,
                primaryKey: true,
                notNull: true
            },
            roleType: {
                type: SequelizeORM.STRING
            }
        });

        return Role;
    }
};
