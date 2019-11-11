const express = require("express");
const router = express.Router();

const isAuth = require("../middleware/isAuth");
const upload = require("../middleware/multer.js");

router.get("/:filename", (req, res) => {
  const { filename } = req.params;

  res.sendFile(
    `/Users/stu/Desktop/Projects/recipeDB/server/uploads/${filename}`
  );
});

router.post("/", isAuth, upload.single("seletedFile"), (req, res) => {
  res.json({ filename: req.file.filename });
});

module.exports = router;
