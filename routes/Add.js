const express = require("express");
const router = express.Router();
const multer = require("multer");
const { connection } = require("../database/sql");

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./public/images/");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + file.originalname);
  },
});

var upload = multer({ storage });

router.post("/", upload.single("blogImage"), (req, res, next) => {
  const Content = req.query.content;
  const Image = req.file.filename;
  const blog = {
    Content: Content,
    Image: Image,
  };

  connection.query("INSERT INTO blogs SET ?", blog, (err, result) => {
    if (err) throw err;
    else {
      console.log("Data Added");
      res.redirect("https://blogs-front-end.vercel.app/");
    }
  });
});

module.exports = router;
