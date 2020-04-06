'use strict';
module.exports = (sequelize, DataTypes) => {
  const pk_trans_acl = sequelize.define('pk_trans_acl', {
    id_auth_verify: DataTypes.INTEGER,
    id_mast_role: DataTypes.INTEGER,
    created_at: 'TIMESTAMP',
    updated_at: 'TIMESTAMP',
  }, {
    underscored: true,
  });
  pk_trans_acl.associate = function(models) {
    // associations can be defined here
  };
  return pk_trans_acl;
};