const express = require("express");

const sequelize = require("./utils/database");
// const User = require("./models/user");

const app = express();

app.use(express.json({ extended: false }));

// Routes
app.use("/api/user", require("./routes/user"));
app.use("/api/auth", require("./routes/auth"));

const PORT = process.env.PORT || 5080;

sequelize
  .sync()
  .then(result => {
    app.listen(PORT, () => {
      console.log(`app running on port ${PORT}`);
    });
  })
  .catch(err => console.log(err));
