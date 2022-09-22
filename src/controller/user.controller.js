const userModel = require('../model/user.model');
const { success, failed } = require('../helper/response');

const userController = {
  insert: (req, res) => {
    const {
      nama, email, password, phone,
    } = req.body;
    userModel
      .insert(nama, email, password, phone)
      .then((result) => {
        success(res, null, 'success', 'success insert data');
      })
      .catch((err) => {
        failed(res, err, 'failed', 'failed insert data');
      });
  },
  list: (req, res) => {
    const limit = parseInt(req.query.limit) || 3;
    const page = parseInt(req.query.page) || 1;
    const offset = (page - 1) * limit;
    userModel
      .list(limit, offset)
      .then((result) => {
        success(res, result, 'success', 'success get data');
      })
      .catch((err) => {
        failed(res, err, 'failed', 'failed get data');
      });
  },
  listUserById: (req, res) => {
    const { id_user } = req.params;
    userModel
      .listUserById(id_user)
      .then((result) => {
        success(res, result, 'success', 'success get data by Id');
      })
      .catch((err) => {
        failed(res, err, 'failed', 'failed get data by Id');
      });
  },
  update: (req, res) => {
    const { password } = req.body;
    const {id_user} = req.params;
    const image = req.file.filename;
    userModel
      .update(id_user, password, image)
      .then((result) => {
        if (result.rowCount == 1) {
          success(res, result, 'success', 'success update data');
        } else {
          failed(res, err, 'failed', 'failed update data');
        }
      })
      .catch((err) => {
        res.json(err);
      });
  },
  destroy: (req, res) => {
    const { id_user } = req.params;
    userModel
      .destroy(id_user)
      .then((result) => {
        success(res, result, 'success', 'success delete data');
      })
      .catch((err) => {
        failed(res, err, 'failed', 'failed delete data');
      });
  },
};
module.exports = userController;
