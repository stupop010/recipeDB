const express = require("express");
const cors = require("cors");

const sequelize = require("./utils/database");
const User = require("./models/user");
const UserFavourtieItem = require("./models/userFavouriteItem");
const Avatar = require("./models/avatar");

const app = express();

app.use(cors());

app.use(express.json({ extended: false }));

// Routes
app.use("/api/user", require("./routes/user"));
app.use("/api/auth", require("./routes/auth"));
app.use("/api/data", require("./routes/data"));
app.use("/api/favourites", require("./routes/favourites"));
app.use("/api/profile", require("./routes/profile"));

const PORT = process.env.PORT || 5080;

UserFavourtieItem.belongsTo(User);
User.hasMany(UserFavourtieItem);
// UserFavourtieItem.belongsToMany()

sequelize
  // .sync({ force: true })
  .sync()
  .then(result => {
    app.listen(PORT, () => {
      console.log(`app running on port ${PORT}`);
    });
  })
  .catch(err => console.log(err));
