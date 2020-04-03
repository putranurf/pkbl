const nodemailer = require('nodemailer');
const model = require("../../models").sequelize;
const auth = require('../../models').pk_auth_verify
const bcrypt = require('bcrypt');
const saltRounds = 10;
const crypto = require('crypto'); 
const jwt = require('jwt-simple');
const moment = require('moment');

var rand
var mailOptions
var host
var link

exports.lupaPassword = (async (req, res) => {
  let sql2 = ` SELECT * FROM pk_auth_verify WHERE email= :email `
  let checkEmail = await model.query (sql2, {
    replacements: { email: req.body.email }, 
    type: model.QueryTypes.SELECT
  }).then(email => {         
    if (email == '') {
      let title = "Gagal";        
      let text = "Kirim Verifikasi Email Gagal. Email yang dimasukan Sudah Belum Terdaftar";        
      res.status(400).send({ title: title, text: text })
    } else {       
      let transporter = nodemailer.createTransport({
        // sendmail: true,
        // newline: 'unix',
        // path: '/usr/sbin/sendmail'
        // host: "smtp.mailtrap.io",
        // port: 2525,
        host: "localhost",
        port: 1025
        // auth: {
        //   user: "321678e0259fa3a32",
        //   pass: "a7d329c08d6281"
        // }
      })
      let payload = {
          id: email[0].id,    
          email: email[0].email
      };
      let date    = new Date(email[0].created_at);
      let year    = date.getFullYear();
      let month   = date.getMonth()+1;
      let day     = date.getDate();
      let hours   = date.getHours();
      let minutes = date.getMinutes();
      let seconds = date.getSeconds();
      if (day < 10) {
        day = '0' + day;
      }
      if (month < 10) {
        month = '0' + month;
      }
      let secret = email[0].password + '-' + (year+'-' + month + '-'+day +' '+ hours+'-' + minutes + '-'+seconds);
      let token = jwt.encode(payload, secret);
      link = "http://localhost:8080/pages/reset/"+ payload.id + '/' + token + "";
      mailOptions = {
        from: req.body.from || "putranf@gmail.com",
        to: req.body.to || "putranf@gmail.com",
        subject: "PKBL Online -- PULIHKAN EMAIL ANDA --",
        // text: "Hello,<br> Please Click on the link to verify your email.<br><a href="+link+">Click here to verify</a>",
        // html: "<html data-editor-version='2' class='sg-campaigns' xmlns='http://www.w3.org/1999/xhtml'><head> <meta http-equiv='Content-Type' content='text/html; charset=utf-8'> <meta name='viewport' content='width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1'> <meta http-equiv='X-UA-Compatible' content='IE=Edge'> <style type='text/css'> body, p, div{font-family: inherit; font-size: 14px;}body{color: #000000;}body a{color: #1188E6; text-decoration: none;}p{margin: 0; padding: 0;}table.wrapper{width:100% !important; table-layout: fixed; -webkit-font-smoothing: antialiased; -webkit-text-size-adjust: 100%; -moz-text-size-adjust: 100%; -ms-text-size-adjust: 100%;}img.max-width{max-width: 100% !important;}.column.of-2{width: 50%;}.column.of-3{width: 33.333%;}.column.of-4{width: 25%;}@media screen and (max-width:480px){.preheader .rightColumnContent, .footer .rightColumnContent{text-align: left !important;}.preheader .rightColumnContent div, .preheader .rightColumnContent span, .footer .rightColumnContent div, .footer .rightColumnContent span{text-align: left !important;}.preheader .rightColumnContent, .preheader .leftColumnContent{font-size: 80% !important; padding: 5px 0;}table.wrapper-mobile{width: 100% !important; table-layout: fixed;}img.max-width{height: auto !important; max-width: 100% !important;}a.bulletproof-button{display: block !important; width: auto !important; font-size: 80%; padding-left: 0 !important; padding-right: 0 !important;}.columns{width: 100% !important;}.column{display: block !important; width: 100% !important; padding-left: 0 !important; padding-right: 0 !important; margin-left: 0 !important; margin-right: 0 !important;}}</style> <link href='https://fonts.googleapis.com/css?family=Muli&display=swap' rel='stylesheet'><style>body{font-family: 'Muli', sans-serif;}</style> </head> <body> <center class='wrapper' data-link-color='#1188E6' data-body-style='font-size:14px; font-family:inherit; color:#000000; background-color:#FFFFFF;'> <div class='webkit'> <table cellpadding='0' cellspacing='0' border='0' width='100%' class='wrapper' bgcolor='#FFFFFF'> <tbody><tr> <td valign='top' bgcolor='#FFFFFF' width='100%'> <table width='100%' role='content-container' class='outer' align='center' cellpadding='0' cellspacing='0' border='0'> <tbody><tr> <td width='100%'> <table width='100%' cellpadding='0' cellspacing='0' border='0'> <tbody><tr> <td><!--[if mso]> <center> <table><tr><td width='600'><![endif]--> <table width='100%' cellpadding='0' cellspacing='0' border='0' style='width:100%; max-width:600px;' align='center'> <tbody><tr> <td role='modules-container' style='padding:0px 0px 0px 0px; color:#000000; text-align:left;' bgcolor='#FFFFFF' width='100%' align='left'><table class='module preheader preheader-hide' role='module' data-type='preheader' border='0' cellpadding='0' cellspacing='0' width='100%' style='display: none !important; mso-hide: all; visibility: hidden; opacity: 0; color: transparent; height: 0; width: 0;'> <tbody><tr> <td role='module-content'> <p></p></td></tr></tbody></table><table border='0' cellpadding='0' cellspacing='0' align='center' width='100%' role='module' data-type='columns' style='padding:30px 20px 30px 20px;' bgcolor='#f6f6f6'> <tbody> <tr role='module-content'> <td height='100%' valign='top'> <table class='column' width='540' style='width:540px; border-spacing:0; border-collapse:collapse; margin:0px 10px 0px 10px;' cellpadding='0' cellspacing='0' align='left' border='0' bgcolor=''> <tbody> <tr> <td style='padding:0px;margin:0px;border-spacing:0;'><table class='wrapper' role='module' data-type='image' border='0' cellpadding='0' cellspacing='0' width='100%' style='table-layout: fixed;' data-muid='72aac1ba-9036-4a77-b9d5-9a60d9b05cba'> <tbody> <tr> <td style='font-size:6px; line-height:10px; padding:0px 0px 0px 0px;' valign='top' align='center'> <img class='max-width' border='0' style='display:block; color:#000000; text-decoration:none; font-family:Helvetica, arial, sans-serif; font-size:16px;' width='29' alt='' data-proportionally-constrained='true' data-responsive='false' src='http://cdn.mcauto-images-production.sendgrid.net/954c252fedab403f/9200c1c9-b1bd-47ed-993c-ee2950a0f239/29x27.png' height='27'> </td></tr></tbody> </table><table class='module' role='module' data-type='spacer' border='0' cellpadding='0' cellspacing='0' width='100%' style='table-layout: fixed;' data-muid='331cde94-eb45-45dc-8852-b7dbeb9101d7'> <tbody> <tr> <td style='padding:0px 0px 20px 0px;' role='module-content' bgcolor=''> </td></tr></tbody> </table><table class='wrapper' role='module' data-type='image' border='0' cellpadding='0' cellspacing='0' width='100%' style='table-layout: fixed;' data-muid='d8508015-a2cb-488c-9877-d46adf313282'> <tbody> <tr> <td style='font-size:6px; line-height:10px; padding:0px 0px 0px 0px;' valign='top' align='center'> <img class='max-width' border='0' style='display:block; color:#000000; text-decoration:none; font-family:Helvetica, arial, sans-serif; font-size:16px;' width='95' alt='' data-proportionally-constrained='true' data-responsive='false' src='http://cdn.mcauto-images-production.sendgrid.net/954c252fedab403f/61156dfa-7b7f-4020-85f8-a586addf4288/95x33.png' height='33'> </td></tr></tbody> </table><table class='module' role='module' data-type='spacer' border='0' cellpadding='0' cellspacing='0' width='100%' style='table-layout: fixed;' data-muid='27716fe9-ee64-4a64-94f9-a4f28bc172a0'> <tbody> <tr> <td style='padding:0px 0px 30px 0px;' role='module-content' bgcolor=''> </td></tr></tbody> </table><table class='module' role='module' data-type='text' border='0' cellpadding='0' cellspacing='0' width='100%' style='table-layout: fixed;' data-muid='948e3f3f-5214-4721-a90e-625a47b1c957' data-mc-module-version='2019-10-22'> <tbody> <tr> <td style='padding:50px 30px 18px 30px; line-height:36px; text-align:inherit; background-color:#ffffff;' height='100%' valign='top' bgcolor='#ffffff' role='module-content'><div><div style='font-family: inherit; text-align: center'><span style='font-size: 25px'>Aktifkan Akun PKBL Online Anda&nbsp;</span></div><div></div></div></td></tr></tbody> </table><table class='module' role='module' data-type='text' border='0' cellpadding='0' cellspacing='0' width='100%' style='table-layout: fixed;' data-muid='a10dcb57-ad22-4f4d-b765-1d427dfddb4e' data-mc-module-version='2019-10-22'> <tbody> <tr> <td style='padding:18px 30px 18px 30px; line-height:22px; text-align:inherit; background-color:#ffffff;' height='100%' valign='top' bgcolor='#ffffff' role='module-content'><div><div style='font-family: inherit; text-align: center'><span style='font-size: 18px'>Harap Verifikasi Alamat Email Anda agar dapat <b>Login</b> ke dalam Aplikasi PKBL Online</span><span style='font-size: 18px'>.</span></div><div style='font-family: inherit; text-align: center'><span style='color: #ffbe00; font-size: 18px'></span></div><div></div></div></td></tr></tbody> </table><table class='module' role='module' data-type='spacer' border='0' cellpadding='0' cellspacing='0' width='100%' style='table-layout: fixed;' data-muid='7770fdab-634a-4f62-a277-1c66b2646d8d'> <tbody> <tr> <td style='padding:0px 0px 20px 0px;' role='module-content' bgcolor='#ffffff'> </td></tr></tbody> </table><table border='0' cellpadding='0' cellspacing='0' class='module' data-role='module-button' data-type='button' role='module' style='table-layout:fixed;' width='100%' data-muid='d050540f-4672-4f31-80d9-b395dc08abe1'> <tbody> <tr> <td align='center' bgcolor='#ffffff' class='outer-td' style='padding:0px 0px 0px 0px;'> <table border='0' cellpadding='0' cellspacing='0' class='wrapper-mobile' style='text-align:center;'> <tbody> <tr> <td align='center' bgcolor='#ffbe00' class='inner-td' style='border-radius:6px; font-size:16px; text-align:center; background-color:inherit;'> <a href='"+link+"' style='background-color:#ffbe00; border:1px solid #ffbe00; border-color:#ffbe00; border-radius:0px; border-width:1px; color:#000000; display:inline-block; font-size:14px; font-weight:normal; letter-spacing:0px; line-height:normal; padding:12px 40px 12px 40px; text-align:center; text-decoration:none; border-style:solid; font-family:inherit;'>Verifikasi Email Anda Sekarang</a> </td></tr></tbody> </table> </td></tr></tbody> </table><table class='module' role='module' data-type='spacer' border='0' cellpadding='0' cellspacing='0' width='100%' style='table-layout: fixed;' data-muid='7770fdab-634a-4f62-a277-1c66b2646d8d.1'> <tbody> <tr> <td style='padding:0px 0px 50px 0px;' role='module-content' bgcolor='#ffffff'> </td></tr></tbody> </table><table class='module' role='module' data-type='text' border='0' cellpadding='0' cellspacing='0' width='100%' style='table-layout: fixed;' data-muid='a265ebb9-ab9c-43e8-9009-54d6151b1600' data-mc-module-version='2019-10-22'> </table><table border='0' cellpadding='0' cellspacing='0' class='module' data-role='module-button' data-type='button' role='module' style='table-layout:fixed;' width='100%' data-muid='d050540f-4672-4f31-80d9-b395dc08abe1.1'> </table><table class='module' role='module' data-type='spacer' border='0' cellpadding='0' cellspacing='0' width='100%' style='table-layout: fixed;' data-muid='c37cc5b7-79f4-4ac8-b825-9645974c984e'> <tbody> <tr> <td style='padding:0px 0px 30px 0px;' role='module-content' bgcolor='6E6E6E'> </td></tr></tbody> </table></td></tr></tbody> </table> </td></tr></tbody> </table> <tbody> <tr> <td align='center' bgcolor='' class='outer-td' style='padding:0px 0px 20px 0px;'> <table border='0' cellpadding='0' cellspacing='0' class='wrapper-mobile' style='text-align:center;'> <tbody> <tr> <td align='center' bgcolor='#f5f8fd' class='inner-td' style='border-radius:6px; font-size:16px; text-align:center; background-color:inherit;'><a href='https://sendgrid.com/' style='background-color:#f5f8fd; border:1px solid #f5f8fd; border-color:#f5f8fd; border-radius:25px; border-width:1px; color:#a8b9d5; display:inline-block; font-size:10px; font-weight:normal; letter-spacing:0px; line-height:normal; padding:5px 18px 5px 18px; text-align:center; text-decoration:none; border-style:solid; font-family:helvetica,sans-serif;' target='_blank'>♥ POWERED BY PT PINDAD (PERSERO)</a></td></tr></tbody> </table> </td></tr></tbody> </table></td></tr></tbody></table> </td></tr></tbody></table> </td></tr></tbody></table> </td></tr></tbody></table> </div></center> </body></html>" // html body
        html: "<html data-editor-version='2' class='sg-campaigns' xmlns='http://www.w3.org/1999/xhtml'><head><meta http-equiv='Content-Type' content='text/html; charset=utf-8'><meta name='viewport' content='width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1'><meta http-equiv='X-UA-Compatible' content='IE=Edge'><style type='text/css'>body,p,div{font-family:inherit;font-size:14px}body{color:#000}body a{color:#1188E6;text-decoration:none}p{margin:0;padding:0}table.wrapper{width:100% !important;table-layout:fixed;-webkit-font-smoothing:antialiased;-webkit-text-size-adjust:100%;-moz-text-size-adjust:100%;-ms-text-size-adjust:100%}img.max-width{max-width:100% !important}.column.of-2{width:50%}.column.of-3{width:33.333%}.column.of-4{width:25%}@media screen and (max-width:480px){.preheader .rightColumnContent, .footer .rightColumnContent{text-align:left !important}.preheader .rightColumnContent div, .preheader .rightColumnContent span, .footer .rightColumnContent div, .footer .rightColumnContent span{text-align:left !important}.preheader .rightColumnContent, .preheader .leftColumnContent{font-size:80% !important;padding:5px 0}table.wrapper-mobile{width:100% !important;table-layout:fixed}img.max-width{height:auto !important;max-width:100% !important}a.bulletproof-button{display:block !important;width:auto !important;font-size:80%;padding-left:0 !important;padding-right:0 !important}.columns{width:100% !important}.column{display:block !important;width:100% !important;padding-left:0 !important;padding-right:0 !important;margin-left:0 !important;margin-right:0 !important}}</style><link href='https://fonts.googleapis.com/css?family=Muli&display=swap' rel='stylesheet'><style>body{font-family:'Muli',sans-serif}</style></head><body><center class='wrapper' data-link-color='#1188E6' data-body-style='font-size:14px; font-family:inherit; color:#000000; background-color:#FFFFFF;'><div class='webkit'><table cellpadding='0' cellspacing='0' border='0' width='100%' class='wrapper' bgcolor='#FFFFFF'><tbody><tr><td valign='top' bgcolor='#FFFFFF' width='100%'><table width='100%' role='content-container' class='outer' align='center' cellpadding='0' cellspacing='0' border='0'><tbody><tr><td width='100%'><table width='100%' cellpadding='0' cellspacing='0' border='0'><tbody><tr><td> <!--[if mso]><center><table><tr><td width='600'><![endif]--><table width='100%' cellpadding='0' cellspacing='0' border='0' style='width:100%; max-width:600px;' align='center'><tbody><tr><td role='modules-container' style='padding:0px 0px 0px 0px; color:#000000; text-align:left;' bgcolor='#FFFFFF' width='100%' align='left'><table class='module preheader preheader-hide' role='module' data-type='preheader' border='0' cellpadding='0' cellspacing='0' width='100%' style='display: none !important; mso-hide: all; visibility: hidden; opacity: 0; color: transparent; height: 0; width: 0;'><tbody><tr><td role='module-content'><p></p></td></tr></tbody></table><table border='0' cellpadding='0' cellspacing='0' align='center' width='100%' role='module' data-type='columns' style='padding:30px 20px 30px 20px;' bgcolor='#f6f6f6'><tbody><tr role='module-content'><td height='100%' valign='top'><table class='column' width='540' style='width:540px; border-spacing:0; border-collapse:collapse; margin:0px 10px 0px 10px;' cellpadding='0' cellspacing='0' align='left' border='0' bgcolor=''><tbody><tr><td style='padding:0px;margin:0px;border-spacing:0;'><table class='wrapper' role='module' data-type='image' border='0' cellpadding='0' cellspacing='0' width='100%' style='table-layout: fixed;' data-muid='72aac1ba-9036-4a77-b9d5-9a60d9b05cba'><tbody><tr><td style='font-size:6px; line-height:10px; padding:0px 0px 0px 0px;' valign='top' align='center'> <img class='max-width' border='0' style='display:block; color:#000000; text-decoration:none; font-family:Helvetica, arial, sans-serif; font-size:16px;' width='120' alt='' data-proportionally-constrained='true' data-responsive='false' src='http://localhost:8080/logo_png.png'></td></tr></tbody></table><table class='module' role='module' data-type='spacer' border='0' cellpadding='0' cellspacing='0' width='100%' style='table-layout: fixed;' data-muid='331cde94-eb45-45dc-8852-b7dbeb9101d7'><tbody><tr><td style='padding:0px 0px 20px 0px;' role='module-content' bgcolor=''></td></tr></tbody></table><table class='wrapper' role='module' data-type='image' border='0' cellpadding='0' cellspacing='0' width='100%' style='table-layout: fixed;' data-muid='d8508015-a2cb-488c-9877-d46adf313282'><tbody><tr><td style='font-size:6px; line-height:10px; padding:0px 0px 0px 0px;' valign='top' align='center'> ></td></tr></tbody></table><table class='module' role='module' data-type='spacer' border='0' cellpadding='0' cellspacing='0' width='100%' style='table-layout: fixed;' data-muid='27716fe9-ee64-4a64-94f9-a4f28bc172a0'><tbody><tr><td style='padding:0px 0px 30px 0px;' role='module-content' bgcolor=''></td></tr></tbody></table><table class='module' role='module' data-type='text' border='0' cellpadding='0' cellspacing='0' width='100%' style='table-layout: fixed;' data-muid='948e3f3f-5214-4721-a90e-625a47b1c957' data-mc-module-version='2019-10-22'><tbody><tr><td style='padding:50px 30px 18px 30px; line-height:36px; text-align:inherit; background-color:#ffffff;' height='100%' valign='top' bgcolor='#ffffff' role='module-content'><div><div style='font-family: inherit; text-align: center'><span style='font-size: 25px'><b>Pulihkan Password Akun PKBL Online Anda</b></span></div><div></div></div></td></tr></tbody></table><table class='module' role='module<span>' data-type='text' border='0' cellpadding='0' cellspacing='0' width='100%' style='table-layout: fixed;' data-muid='a10dcb57-ad22-4f4d-b765-1d427dfddb4e' data-mc-module-version='2019-10-22'><tbody><tr><td style='padding:18px 30px 18px 30px; line-height:22px; text-align:inherit; background-color:#ffffff;' height='100%' valign='top' bgcolor='#ffffff' role='module-content'><div><div style='font-family: inherit; text-align: center'><span style='font-size: 18px'></span></div><div style='font-family: inherit; text-align: center'><span style='color: #ffbe00; font-size: 18px'></span></div><div></div></div></td></tr></tbody></table><table class='module' role='module' data-type='spacer' border='0' cellpadding='0' cellspacing='0' width='100%' style='table-layout: fixed;' data-muid='7770fdab-634a-4f62-a277-1c66b2646d8d'><tbody><tr><td style='padding:0px 0px 20px 0px;' role='module-content' bgcolor='#ffffff'></td></tr></tbody></table><table border='0' cellpadding='0' cellspacing='0' class='module' data-role='module-button' data-type='button' role='module' style='table-layout:fixed;' width='100%' data-muid='d050540f-4672-4f31-80d9-b395dc08abe1'><tbody><tr><td align='center' bgcolor='#ffffff' class='outer-td' style='padding:0px 0px 0px 0px;'><table border='0' cellpadding='0' cellspacing='0' class='wrapper-mobile' style='text-align:center;'><tbody><tr><td align='center' bgcolor='#ffbe00' class='inner-td' style='border-radius:6px; font-size:16px; text-align:center; background-color:inherit;'> <a href='"+link+"' style='background-color:#ffbe00; border:1px solid #ffbe00; border-color:#ffbe00; border-radius:0px; border-width:1px; color:#000000; display:inline-block; font-size:14px; font-weight:normal; letter-spacing:0px; line-height:normal; padding:12px 40px 12px 40px; text-align:center; text-decoration:none; border-style:solid; font-family:inherit;'><b>KLIK DISINI</b></a></td></tr></tbody></table></td></tr></tbody></table><table class='module' role='module' data-type='spacer' border='0' cellpadding='0' cellspacing='0' width='100%' style='table-layout: fixed;' data-muid='7770fdab-634a-4f62-a277-1c66b2646d8d.1'><tbody><tr><td style='padding:0px 0px 50px 0px;' role='module-content' bgcolor='#ffffff'></td></tr></tbody></table><table class='module' role='module' data-type='text' border='0' cellpadding='0' cellspacing='0' width='100%' style='table-layout: fixed;' data-muid='a265ebb9-ab9c-43e8-9009-54d6151b1600' data-mc-module-version='2019-10-22'></table><table border='0' cellpadding='0' cellspacing='0' class='module' data-role='module-button' data-type='button' role='module' style='table-layout:fixed;' width='100%' data-muid='d050540f-4672-4f31-80d9-b395dc08abe1.1'></table><table class='module' role='module' data-type='spacer' border='0' cellpadding='0' cellspacing='0' width='100%' style='table-layout: fixed;' data-muid='c37cc5b7-79f4-4ac8-b825-9645974c984e'><tbody><tr><td style='padding:0px 0px 30px 0px;' role='module-content' bgcolor='6E6E6E'></td></tr></tbody></table></td></tr></tbody></table></td></tr></tbody></table><tbody><tr><td align='center' bgcolor='' class='outer-td' style='padding:0px 0px 20px 0px;'><table border='0' cellpadding='0' cellspacing='0' class='wrapper-mobile' style='text-align:center;'><tbody><tr><td align='center' bgcolor='#f5f8fd' class='inner-td' style='border-radius:6px; font-size:16px; text-align:center; background-color:inherit;'><a href='#' style='background-color:#f5f8fd; border:1px solid #f5f8fd; border-color:#f5f8fd; border-radius:25px; border-width:1px; color:#a8b9d5; display:inline-block; font-size:10px; font-weight:normal; letter-spacing:0px; line-height:normal; padding:5px 18px 5px 18px; text-align:center; text-decoration:none; border-style:solid; font-family:helvetica,sans-serif;'>♥ POWERED BY PT PINDAD (PERSERO)</a></td></tr></tbody></table></td></tr></tbody></table></td></tr></tbody></table></td></tr></tbody></table></td></tr></tbody></table></td></tr></tbody></table></div></center></body></html>" // html body
      }
      let info = transporter.sendMail(mailOptions);
      console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
      res.json(nodemailer.getTestMessageUrl(info));
    }
  }).catch(error => {
    console.log(error)          
  })
})


exports.pulihkanPassword = (async (req, res) => { 
  let query = ` SELECT * FROM pk_auth_verify WHERE id= :id `
  let checkSecret = await model.query (query, {
    replacements: { id: req.body.id }, 
    type: model.QueryTypes.SELECT
  }).then(async (data) => {
      console.log('masuk query insert')
      let id = req.body.id
      let password = req.body.password
      let token = req.body.token
      let date    = new Date(data[0].created_at);
      let year    = date.getFullYear();
      let month   = date.getMonth()+1;
      let day     = date.getDate();
      let hours   = date.getHours();
      let minutes = date.getMinutes();
      let seconds = date.getSeconds();
      if (day < 10) {
        day = '0' + day;
      }
      if (month < 10) {
        month = '0' + month;
      }
      let timestamp = (year+'-' + month + '-'+day +' '+ hours+'-' + minutes + '-'+seconds)
      let secret = data[0].password + '-' + timestamp ;
      let decode = jwt.decode(token, secret);
      const query2 =
        "INSERT INTO pk_auth_history (id_pk_auth_verify, password_lama, keterangan, updated_at) (SELECT id, password, 'Lupa password (Eksekusi di Halaman Login -> Lupa Password -> Pulihkan Password)', CURRENT_TIMESTAMP(0) FROM pk_auth_verify WHERE id =:id)  ";
      const result = await model.query(query2, {
        replacements: {
          id: decode.id
        },
        type: model.QueryTypes.INSERT        
      }).then(res => {
        console.log('Berhasil Insert pk_auth_history')
        bcrypt.hash(req.body.password, saltRounds, async function(err, hash) {
          const query3 =
            "UPDATE pk_auth_verify SET password =:password WHERE id=:id"
          const result = await model.query(query3, {
            replacements: {
              id: decode.id,
              password: hash
            },
            type: model.QueryTypes.INSERT            
          })
          console.log('Berhasil Update pk_auth_verify')          
        });                
      }).catch(err => {
        console.log(err)
      })
      let title = "Berhasil";        
      let text = "Password Email Anda Berhasil di Reset";        
      res.status(200).send({ title: title, text: text })
  }).catch(error => {
      console.log(error)
  })  
})
