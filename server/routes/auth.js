const express = require("express");
const { check, validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const router = express.Router();

const User = require("../models/user");
const keys = require("../config/keys");
const isAuth = require("../middleware/isAuth");

// @route GET api/auth
// @desc get user data
// @access Private
router.get("/", isAuth, async (req, res) => {
  try {
    const user = await User.findOne({
      attributes: ["id", "email"],
      where: { id: req.user.id }
    });
    res.json(user.dataValues);
  } catch (error) {
    console.error(error);
    res.status(500).send("Server Error");
  }
});

// @route    POST api/auth
// @desc     Authenticate user & get token
// @access   Public
router.post(
  "/",
  [
    check("email", "Must be a valid email").isEmail(),
    check("password").exists()
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.array() });
    }

    const { email, password } = req.body;
    try {
      // Find user
      let user = await User.findOne({
        where: {
          email
        }
      });

      if (!user)
        return res
          .status(400)
          .json({ errors: [{ msg: "Invalid Credentials" }] });

      // Check password for a match
      const match = await bcrypt.compare(password, user.dataValues.password);

      if (!match)
        return res
          .status(400)
          .json({ errors: [{ msg: "Invalid Credentials" }] });

      // JWT sign and send as response
      const payload = {
        user: {
          id: user.dataValues.id
        }
      };
      jwt.sign(payload, keys.jwt, { expiresIn: 360000 }, (err, token) => {
        if (err) throw err;
        res.json({ token });
      });
    } catch (error) {
      console.log(error);
      res.status(500).send("Server Error");
    }
  }
);

module.exports = router;
