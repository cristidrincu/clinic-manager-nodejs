module.exports = {
  createUser(sequelizeConn, SequelizeORM) {
    return sequelizeConn.define('users', {
      id: {
        type: SequelizeORM.UUID,
        defaultValue: SequelizeORM.UUIDV4,
        primaryKey: true,
        notNull: true
      },
      department_id: {
        type: SequelizeORM.UUID,
        defaultValue: SequelizeORM.UUIDV4,
        allowNull: true
      },
      user_specialisation_id: {
        type: SequelizeORM.UUID,
        defaultValue: SequelizeORM.UUIDV4,
        allowNull: true
      },
      user_type_id: {
        type: SequelizeORM.UUID,
        defaultValue: SequelizeORM.UUIDV4,
        allowNull: true
      },
      user_role_id: {
        type: SequelizeORM.UUID,
        defaultValue: SequelizeORM.UUIDV4,
        allowNull: true
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
      experience: {
        type: SequelizeORM.INTEGER,
        allowNull: true
      }
    }, {
      indexes: [
        {
          unique: true,
          fields: ['id', 'user_type_id', 'user_role_id']
        }
      ]
    });
  }
};
