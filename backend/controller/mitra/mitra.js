
const model = require("../../models").sequelize;

exports.setProposalMitra = (async (req, res) => {
	
	let currentDate = new Date();

	let date = currentDate.getDate();
	let month = currentDate.getMonth(); //Be careful! January is 0 not 1
	let year = currentDate.getFullYear();

	let dateString = date + "-" +(month + 1) + "-" + year;

	  const sql =
	    "INSERT INTO mitra (nama_mitra, no_ktp, tempat_lahir, tanggal_lahir, jenis_kelamin, pendidikan_terakhir, alamat, no_rumah, rt, rw, kelurahan, kecamatan, kode_pos, kabupaten_kota, provinsi, status_rumah, no_telp, no_hp, no_npwp_mitra) VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?) ";
	  const [[result]] = await model.query(sql, {
	    replacements: [
	      req.body.nama_ktp_calon_mitra,
	      req.body.no_ktp_calon_mitra,
	      req.body.tempat_lahir_calon_mitra,
	      req.body.tanggal_lahir_calon_mitra,
	      req.body.jenis_kelamin,
	      req.body.pendidikan_terakhir,
	      req.body.alamat_calon_mitra,
	      req.body.no_rumah_calon_mitra,
	      req.body.rt_calon_mitra,
	      req.body.rw_calon_mitra,
	      req.body.kelurahan_calon_mitra,
	      req.body.kecamatan_calon_mitra,
	      req.body.kode_pos_calon_mitra,
	      req.body.kabupaten_kota_calon_mitra,
	      req.body.provinsi_calon_mitra,
	      req.body.status_rumah,
	      req.body.no_telp_rumah_calon_mitra,
	      req.body.no_hp_calon_mitra,
	      req.body.no_ktp_calon_mitra,
	      // dateString,
	      // dateString
	    ],
	    type: model.QueryTypes.INSERT
	  })
})


exports.setProposalSuamiIstriMitra = (async (req, res) => {
	
	let currentDate = new Date();

	let date = currentDate.getDate();
	let month = currentDate.getMonth(); //Be careful! January is 0 not 1
	let year = currentDate.getFullYear();

	let dateString = date + "-" +(month + 1) + "-" + year;

	  const sql =
	    // "INSERT INTO mitra (nama_mitra, no_ktp, tempat_lahir, tanggal_lahir, jenis_kelamin, pendidikan_terakhir, alamat, no_rumah, rt, rw, kelurahan, kecamatan, kode_pos, kabupaten_kota, provinsi, status_rumah, no_telp, no_hp, no_npwp_mitra) VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?) ";
	    "    UPDATE mitra SET nama_suami_istri=value1, column2 = value2...., columnN = valueN WHERE [condition]; ";
	  const [[result]] = await model.query(sql, {
	    replacements: [
	      req.body.nama_ktp_calon_mitra,
	      req.body.no_ktp_calon_mitra,
	      req.body.tempat_lahir_calon_mitra,
	      req.body.tanggal_lahir_calon_mitra,
	      req.body.jenis_kelamin,
	      req.body.pendidikan_terakhir,
	      req.body.alamat_calon_mitra,
	      req.body.no_rumah_calon_mitra,
	      req.body.rt_calon_mitra,
	      req.body.rw_calon_mitra,
	      req.body.kelurahan_calon_mitra,
	      req.body.kecamatan_calon_mitra,
	      req.body.kode_pos_calon_mitra,
	      req.body.kabupaten_kota_calon_mitra,
	      req.body.provinsi_calon_mitra,
	      req.body.status_rumah,
	      req.body.no_telp_rumah_calon_mitra,
	      req.body.no_hp_calon_mitra,
	      req.body.no_ktp_calon_mitra,
	      // dateString,
	      // dateString
	    ],
	    type: model.QueryTypes.INSERT
	  })
})