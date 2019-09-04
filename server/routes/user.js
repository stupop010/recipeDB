const express = require("express");
const { check, validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const router = express.Router();

const User = require("../models/user");
const keys = require("../config/keys");

// @route    POST api/users
// @desc     Register user
// @access   Public
router.post(
  "/",
  [
    check("username")
      .not()
      .isEmpty(),
    check("email").isEmail(),
    check("password")
      .not()
      .isEmpty()
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.array() });
    }

    let { email, username, password } = req.body;

    try {
      // Check if user already exists
      const user = await User.findOne({
        where: {
          email: email
        }
      });
      if (user) return res.json({ errors: [{ msg: "User already exists" }] });

      // Hash the password
      const salt = await bcrypt.genSalt(10);
      password = await bcrypt.hash(password, salt);

      // Save to database
      const newUser = await User.create({
        email,
        username,
        password
      });

      // JWT sign and send as response
      const payload = {
        user: {
          id: newUser.dataValues.id
        }
      };
      jwt.sign(payload, keys.jwt, { expiresIn: 360000 }, (err, token) => {
        if (err) throw err;
        res.json({ token });
      });
    } catch (error) {
      console.error(error);
      res.status(500).send("Server Error");
    }
  }
);

module.exports = router;
