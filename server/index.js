const express = require("express");

const app = express();

const PORT = process.env.PORT || 5080;

app.listen(PORT, () => {
  console.log(`app running on port ${PORT}`);
});
