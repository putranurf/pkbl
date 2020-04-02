'use strict';
module.exports = (sequelize, DataTypes) => {
  const pk_auth_history = sequelize.define('pk_auth_history', {
    id_pk_auth_verify: DataTypes.STRING,
    username_lama: DataTypes.STRING,
    password_lama: DataTypes.STRING,
    email_lama: DataTypes.STRING,
    verify_by_admin: DataTypes.BOOLEAN,
    resend_verify: DataTypes.BOOLEAN,
    keterangan: DataTypes.STRING,
    created_at: 'TIMESTAMP',
    updated_at: 'TIMESTAMP'
  }, {
    underscored: true,
  });
  pk_auth_history.associate = function(models) {
    // associations can be defined here
  };
  return pk_auth_history;
};