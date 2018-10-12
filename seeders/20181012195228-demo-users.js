const moment = require('moment');
const uuidv4 = require('uuid/v4');

'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('users', [{
        id: uuidv4(),
        firstName: 'Cristian',
        lastName: 'Drincu',
        age: 37,
        sex: 'male',
        department: 'N/A',
        specialization: 'Software engineer',
        experience: 120,
        createdAt: moment().format('YYYY-MM-DD hh:mm'),
        updatedAt: moment().format('YYYY-MM-DD hh:mm')
      }], {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('users', null, {});
  }
};
