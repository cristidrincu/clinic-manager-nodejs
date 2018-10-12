const User = require('../configuration/db-instances').entities.User;
const Role = require('../configuration/db-instances').entities.Role;

module.exports = (() => {

  const getUsers = () => {
    return User.findAll({
      include: [
        {
          model: Role
        }
      ]
    });
  };

  return {
    getUsers
  }

})();