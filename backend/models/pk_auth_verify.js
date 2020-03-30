'use strict';
module.exports = (sequelize, DataTypes) => {
  const pk_auth_verify = sequelize.define('pk_auth_verify', {
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    email: DataTypes.STRING,
    verify: DataTypes.BOOLEAN,
    created_at: 'TIMESTAMP',
    updated_at: 'TIMESTAMP',
  }, {
    underscored: true,
  });
  pk_auth_verify.associate = function(models) {
    // associations can be defined here
  };
  return pk_auth_verify;
};