const jwt = require("jsonwebtoken");

const keys = require("../config/keys");

module.exports = (req, res, next) => {
  const token = req.header("x-auth-token");
  if (!token) {
    res.status(401).json({ message: "Access Denied" });
  }

  try {
    const decoded = jwt.verify(token, keys.jwt);
    console.log(decoded);
    req.user = decoded.user;
    next();
  } catch (error) {
    console.error(error);
    res.status(401).json({ message: "Access Denied" });
  }
};
