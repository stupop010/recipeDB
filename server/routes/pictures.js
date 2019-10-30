const express = require("express");
const router = express.Router();

router.get("/:filename", (req, res) => {
  const { filename } = req.params;

  res.sendFile(
    `/Users/stu/Desktop/Projects/recipeDB/server/uploads/${filename}`
  );
});

module.exports = router;
