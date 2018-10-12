const UserService = require('../services/user');

module.exports = {
  findUsers(req, res) {
    return UserService.getUsers()
    .then(users => res.status(200).json(users))
    .catch(error => res.status(404).json({message: `An error has occurred: ${error.message}`}));
  }
};