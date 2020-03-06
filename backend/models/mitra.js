'use strict';
module.exports = (sequelize, DataTypes) => {
  const Mitra = sequelize.define('mitra', {
    nama_mitra: DataTypes.STRING,
    no_ktp: DataTypes.STRING,
    tempat_lahir: DataTypes.STRING,
    tanggal_lahir: DataTypes.STRING,
    jenis_kelamin: DataTypes.STRING,
    pendidikan_terakhir: DataTypes.STRING,
    alamat: DataTypes.STRING,
    no_rumah: DataTypes.STRING,
    rt: DataTypes.STRING,
    rw: DataTypes.STRING,
    kelurahan: DataTypes.STRING,
    kecamatan: DataTypes.STRING,
    kode_pos: DataTypes.STRING,
    kabupaten_kota: DataTypes.STRING,
    provinsi: DataTypes.STRING,
    status_rumah: DataTypes.STRING,
    no_telp: DataTypes.INTEGER,
    no_hp: DataTypes.INTEGER,
    no_npwp: DataTypes.STRING
  }, {});
  Mitra.associate = function(models) {
    // associations can be defined here
  };
  return Mitra;
};