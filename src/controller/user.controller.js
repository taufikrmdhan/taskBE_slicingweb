const userModel = require("../model/user.model");

const userController = {
  insert: (req, res) => {
    const { id_user, nama, email, password, phone } = req.body;
    userModel
      .insert(id_user, nama, email, password, phone)
      .then((result) => {
        res.json({
          message: "success insert data",
          data: result,
        });
      })
      .catch((err) => {
        res.json(err);
      });
  },
  list: (req, res) => {
    userModel
      .list()
      .then((result) => {
        res.json(result.rows);
      })
      .catch((err) => {
        res.json(err);
      });
  },
  listUserById: (req, res) => {
    const { id_user } = req.params;
    userModel
      .listUserById(id_user)
      .then((result) => {
        res.json(result.rows);
      })
      .catch((err) => {
        res.json(err);
      });
  },
  update: (req, res) => {
    const {id_user, password} = req.body;
    userModel
      .update(id_user, password)
      .then((result) => {
        if(result.rowCount == 1){
          res.json({
            message: "success update data",
            data: result,
          });
        }
        else{
            res.json({
                message: "failed update data",
            });
        }
      })
      .catch((err) => {
        res.json(err);
      });
  },
  destroy: (req, res) => {
    const { id_user } = req.body;
    userModel
      .destroy(id_user)
      .then((result) => {
        res.json({
          message: "success delete data",
          data: result.rows,
        });
      })
      .catch((err) => {
        res.json(err);
      });
  },
};
module.exports = userController;
