const User = require('../models/user');

module.exports = (() => {
  const build = (db, sequelize) => {
    let instance = __createInstance(db, sequelize);
    return __getInstance(instance, db, sequelize);
  };
  const __createInstance = (db, sequelize) => {
    return User.createUser(db, sequelize);
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