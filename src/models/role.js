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
        defaultValue: SequelizeORM.UUIDV4,
        allowNull: true
      },
      roleType: {
        type: SequelizeORM.STRING
      },
      createdAt: {
        type:SequelizeORM.DATE,
        defaultValue: null
      },
      updatedAt: {
        type:SequelizeORM.DATE,
        defaultValue: null
      }
    },{
      indexes: [
        {
          unique: true,
          fields: ['id']
        }
      ]
    });
  }
};
