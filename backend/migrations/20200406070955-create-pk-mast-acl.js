'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('pk_mast_acl', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      user_role: {
        type: Sequelize.STRING
      },
      created_at: {
        allowNull: true,
        type: 'TIMESTAMP'
      },
      updated_at: {
        allowNull: true,
        type: 'TIMESTAMP'
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('pk_mast_acl');
  }
};