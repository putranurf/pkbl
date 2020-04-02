'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('pk_auth_verify', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      username: {
        type: Sequelize.STRING
      },
      password: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING
      },
      verify: {
        type: Sequelize.BOOLEAN
      },
      created_at: {
        allowNull: true,
        type:'TIMESTAMP'
      },
      updated_at: {
        allowNull: true,
        type: 'TIMESTAMP'
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('pk_auth_verify');
  }
};