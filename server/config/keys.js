if (process.env.NODE_ENV === "production") {
  console.log(process.env);
} else {
  module.exports = require("./dev");
}
