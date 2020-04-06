'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('pk_trans_acl', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      id_auth_verify: {
        type: Sequelize.INTEGER
      },
      id_mast_role: {
        type: Sequelize.INTEGER
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
    return queryInterface.dropTable('pk_trans_acl');
  }
};