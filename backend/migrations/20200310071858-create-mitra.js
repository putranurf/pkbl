'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('mitra', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nama_mitra: {
        type: Sequelize.STRING
      },
      jenis_kelamin: {
        type: Sequelize.STRING
      },
      no_ktp: {
        type: Sequelize.INTEGER
      },
      tempat_lahir: {
        type: Sequelize.STRING
      },
      alamat: {
        type: Sequelize.STRING
      },
      tanggal_lahir: {
        type: Sequelize.DATE
      },
      no_rumah: {
        type: Sequelize.INTEGER
      },
      rt: {
        type: Sequelize.STRING
      },
      rw: {
        type: Sequelize.STRING
      },
      kelurahan: {
        type: Sequelize.STRING
      },
      kecamatan: {
        type: Sequelize.STRING
      },
      kabupaten_kota: {
        type: Sequelize.STRING
      },
      provinsi: {
        type: Sequelize.STRING
      },
      kode_pos: {
        type: Sequelize.INTEGER
      },
      no_telp: {
        type: Sequelize.STRING
      },
      no_hp: {
        type: Sequelize.STRING
      },
      pendidikan_terakhir: {
        type: Sequelize.STRING
      },
      status_rumah: {
        type: Sequelize.STRING
      },
      no_npwp_mitra: {
        type: Sequelize.STRING
      },
      nama_suami_istri: {
        type: Sequelize.STRING
      },
      jenis_kelamin_suami_istri: {
        type: Sequelize.STRING
      },
      alamat_suami_istri: {
        type: Sequelize.STRING
      },
      no_rumah_suami_istri: {
        type: Sequelize.INTEGER
      },
      rt_suami_istri: {
        type: Sequelize.STRING
      },
      rw_suami_istri: {
        type: Sequelize.STRING
      },
      kelurahan_suami_istri: {
        type: Sequelize.STRING
      },
      kecamatan_suami_istri: {
        type: Sequelize.STRING
      },
      kabupaten_kota_suami_istri: {
        type: Sequelize.STRING
      },
      provinsi_suami_istri: {
        type: Sequelize.STRING
      },
      kode_pos_suami_istri: {
        type: Sequelize.INTEGER
      },
      no_telp_suami_istri: {
        type: Sequelize.INTEGER
      },
      no_hp_suami_istri: {
        type: Sequelize.INTEGER
      },
      status_suami_istri: {
        type: Sequelize.STRING
      },
      bentuk_usaha: {
        type: Sequelize.STRING
      },
      no_siup_usaha: {
        type: Sequelize.STRING
      },
      no_npwp_usaha: {
        type: Sequelize.STRING
      },
      mulai_usaha: {
        type: Sequelize.DATE
      },
      nama_usaha: {
        type: Sequelize.STRING
      },
      jenis_usaha: {
        type: Sequelize.STRING
      },
      sektor_usaha: {
        type: Sequelize.STRING
      },
      alamat_usaha: {
        type: Sequelize.STRING
      },
      no_rumah_usaha: {
        type: Sequelize.INTEGER
      },
      rt_usaha: {
        type: Sequelize.STRING
      },
      rw_usaha: {
        type: Sequelize.STRING
      },
      kelurahan_usaha: {
        type: Sequelize.STRING
      },
      kecamatan_usaha: {
        type: Sequelize.STRING
      },
      kode_pos_usaha: {
        type: Sequelize.INTEGER
      },
      kabupaten_kota_Usaha: {
        type: Sequelize.STRING
      },
      provinsi_usaha: {
        type: Sequelize.STRING
      },
      no_telp_usaha: {
        type: Sequelize.STRING
      },
      no_hp_usaha: {
        type: Sequelize.STRING
      },
      status_tempat_usaha: {
        type: Sequelize.STRING
      },
      masa_laku_sewa_usaha: {
        type: Sequelize.DATE
      },
      nama_bank_usaha: {
        type: Sequelize.STRING
      },
      no_rekening_usaha: {
        type: Sequelize.INTEGER
      },
      atas_nama_usaha: {
        type: Sequelize.STRING
      },
      jumlah_sdm_usaha: {
        type: Sequelize.INTEGER
      },
      jumlah_aset_usaha: {
        type: Sequelize.INTEGER
      },
      jumlah_omzet_usaha: {
        type: Sequelize.INTEGER
      },
      jaminan_tanah_bangunan: {
        type: Sequelize.STRING
      },
      atas_nama_tanah_bangunan: {
        type: Sequelize.STRING
      },
      no_sertifikat_tanah_bangunan: {
        type: Sequelize.STRING
      },
      alamat_tanah_bangunan: {
        type: Sequelize.STRING
      },
      luas_tanah_bangunan: {
        type: Sequelize.INTEGER
      },
      harga_tanah_bangunan: {
        type: Sequelize.INTEGER
      },
      jaminan_kendaraan: {
        type: Sequelize.STRING
      },
      no_bpkb_kendaraan: {
        type: Sequelize.INTEGER
      },
      rencana_pinjaman_modal_kerja: {
        type: Sequelize.INTEGER
      },
      pinjaman_modal_kerja_dibutuhkan: {
        type: Sequelize.INTEGER
      },
      rencana_pinjaman_modal_investasi: {
        type: Sequelize.INTEGER
      },
      pinjaman_modal_investasi_yang_dibutuhkan: {
        type: Sequelize.INTEGER
      },
      rencana_pinjaman_modal_khusus: {
        type: Sequelize.INTEGER
      },
      pinjaman_modal_khusus_yang_dibutuhkan: {
        type: Sequelize.INTEGER
      },
      jumlah_pinjaman_yang_dibutuhkan: {
        type: Sequelize.INTEGER
      },
      uang_kas_keuangan: {
        type: Sequelize.INTEGER
      },
      uang_bank_tabungan: {
        type: Sequelize.INTEGER
      },
      piutang_keuangan: {
        type: Sequelize.INTEGER
      },
      hutang_bank: {
        type: Sequelize.INTEGER
      },
      nilai_peralatan_usaha: {
        type: Sequelize.INTEGER
      },
      nilai_omzet_per_bulan: {
        type: Sequelize.INTEGER
      },
      biaya_operasional_per_bulan: {
        type: Sequelize.INTEGER
      },
      biaya_non_operasional: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: true,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: true,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('mitra');
  }
};