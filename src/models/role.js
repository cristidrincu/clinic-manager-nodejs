module.exports = {
  createRole(sequelizeConn, SequelizeORM) {
    return sequelizeConn.define('roles', {
      id: {
        type: SequelizeORM.UUID,
        defaultValue: SequelizeORM.UUIDV4,
        primaryKey: true,
        notNull: true
      },
      user_id: {
        type: SequelizeORM.UUID,
        notNull: true
      },
      roleType: {
        type: SequelizeORM.STRING
      }
    },{
      indexes: [
        {
          unique: true,
          fields: ['id', 'user_id']
        }
      ]
    });
  }
};
