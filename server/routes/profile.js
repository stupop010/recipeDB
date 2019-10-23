const express = require("express");
const router = express.Router();
const multer = require("multer");
const upload = multer({ dest: "uploads/" });

router.post("/", upload.single("seletedFile"), (req, res) => {
  console.log(req);
});

module.exports = router;
