const jwt = require("jsonwebtoken");
// const db = require("../app/config/db.config.js");
const config = require("../config/jwt/config");
// const User = db.user;
// const sequelize = db.sequelize;

verifyToken = (req, res, next) => {
  let token = req.headers["x-access-token"];
  if (!token) {
    return res.status(403).send({
      auth: false,
      message: "No token provided."
    });
  }

  jwt.verify(token, config.secret, (err, decoded) => {
    if (err) {
      return res.status(500).send({
        auth: false,
        message: "Gagal untuk Authentication. Error -> " + err
      });
    }
    // req.npp = decoded.sess_npp;
    // req.kode_jabatan = decoded.sess_kode_jabatan;
    // console.log(req.npp);

    next();
  });
};

// isAdmin = (req, res, next) => {
//   const param1 = req.npp;
//   sequelize
//     .query(
//       "SELECT usr.npp, usr.group_akses, role.akses_group FROM tabel_user AS usr JOIN tabel_role_group AS role ON role.id_role_group=usr.group_akses WHERE usr.npp=$1",
//       {
//         bind: [param1],
//         plain: true,
//         logging: console.log,
//         type: sequelize.QueryTypes.SELECT
//       }
//     )
//     .then(user => {
//       /*
//       user.getRoles().then(roles => {
//         for(let i=0; i<roles.length; i++){
//           console.log(roles[i].akses_group);
//           if(roles[i].akses_group.toUpperCase() === "ADMIN"){
//             next();
//             return;
//           }
//         }
        
//         res.status(403).send("Dibutuhan Role Admin !");
//         return;
//       })
//       */
//       if (user.akses_group.toUpperCase() === "ADMIN") {
//         next();
//         return;
//       }
//       res.status(403).send("Dibutuhan Role Admin !");
//       return;
//     });
// };

// isPmOrAdmin = (req, res, next) => {
//   User.findById(req.npp).then(user => {
//     user.getRoles().then(roles => {
//       for (let i = 0; i < roles.length; i++) {
//         if (roles[i].name.toUpperCase() === "PM") {
//           next();
//           return;
//         }

//         if (roles[i].name.toUpperCase() === "ADMIN") {
//           next();
//           return;
//         }
//       }

//       res.status(403).send("Dibutuhan Role PM atau Admin !");
//     });
//   });
// };

const authJwt = {};
authJwt.verifyToken = verifyToken;
// authJwt.isAdmin = isAdmin;
// authJwt.isPmOrAdmin = isPmOrAdmin;

module.exports = authJwt;
