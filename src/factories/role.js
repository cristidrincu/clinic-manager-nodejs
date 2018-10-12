const Role = require('../models/role');

module.exports = (() => {
  const build = (db, sequelize) => {
    let instance = __createInstance(db, sequelize);
    return __getInstance(instance, db, sequelize);
  };
  const __createInstance = (db, sequelize) => {
    return Role.createRole(db, sequelize);
  };
  const __getInstance = (instance, db, sequelize) => {
    if (!instance) {
      return __createInstance(db, sequelize);
    }
    return instance;
  };

  return {
    build: build
  }
})();