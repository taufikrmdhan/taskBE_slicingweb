// const multer = require('multer');

// //import path
// const path = require('path');
// const fs = require('fs');
// const db = require('../config/db');

// //manajemen file
// const multerDelete = multer({
//     storage: multer.diskStorage({
//         destination: (req, file, cb) => {
//             cb(null, './public');
//         },
//         filename: (req, file, cb) => {
//             const ext = path.extname(file.originalname);
//             const filename = Date.now() + '' + ext;
//             cb(null, filename);
//         }
//     }),
// });

// const deleted = (req, res, next) => {
//     const multerSingle = multerDelete.single('image');
//     multerSingle(req, res, (err) => {
//         if (err) {
//             res.json({
//                 message: 'error',
//                 error: err
//             });
//         } else {
//             next();
//         }
//     });
// }
// module.exports = deleted;