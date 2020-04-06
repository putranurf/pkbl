'use strict';
module.exports = (sequelize, DataTypes) => {
  const pk_mast_acl = sequelize.define('pk_mast_acl', {
    user_role: DataTypes.STRING,
    created_at: 'TIMESTAMP',
    updated_at: 'TIMESTAMP',
  }, {
    underscored: true,
  });
  pk_mast_acl.associate = function(models) {
    // associations can be defined here
  };
  return pk_mast_acl;
};