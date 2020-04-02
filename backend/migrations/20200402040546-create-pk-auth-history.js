'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('pk_auth_history', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      id_pk_auth_verify: {
        type: Sequelize.STRING
      },
      username_lama: {
        type: Sequelize.STRING
      },
      password_lama: {
        type: Sequelize.STRING
      },
      email_lama: {
        type: Sequelize.STRING
      },
      verify_by_admin: {
        type: Sequelize.BOOLEAN
      },
      resend_verify: {
        type: Sequelize.BOOLEAN
      },
      keterangan: {
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
    return queryInterface.dropTable('pk_auth_history');
  }
};