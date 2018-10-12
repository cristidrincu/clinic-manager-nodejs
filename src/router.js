const UsersController = require('./controllers/users');

module.exports = app => {
  app.get('/', (req, res) => {
    res.status(200).send('Server is up and running!');
  });

  app.get('/users', UsersController.findUsers);
};
