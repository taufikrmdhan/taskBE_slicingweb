const fs = require("fs");
const path = require("path");

const remove = (req, res) => {

  fs.unlink('./public/1663825517118.jpg' ,(err) => {
    if (err) {
      res.status(500).send({
        message: "Could not delete the file. " + err,
      });
    }

    res.status(200).send({
      message: "File is deleted.",
    });
  });
};

module.exports = remove