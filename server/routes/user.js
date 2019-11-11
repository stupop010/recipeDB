const express = require("express");
const { check, validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const path = require("path");

const router = express.Router();

const User = require("../models/user");
const keys = require("../config/keys");

const isAuth = require("../middleware/isAuth");

const upload = require("../middleware/multer");

// @route    POST api/users
// @desc     Register user
// @access   Public
router.post(
  "/",
  [
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

    let { email, password } = req.body;

    try {
      // Check if user already exists
      const user = await User.findOne({
        where: {
          email: email
        }
      });
      if (user)
        return res
          .status(400)
          .json({ errors: [{ msg: "Email already used" }] });

      // Hash the password
      const salt = await bcrypt.genSalt(10);
      password = await bcrypt.hash(password, salt);

      // Save to database
      const newUser = await User.create({
        email,
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

router.patch("/", isAuth, upload.single("seletedFile"), async (req, res) => {
  try {
    const { name, email, displayName } = req.body;

    const { id } = req.user;

    if (name) await User.update({ name }, { where: { id } });
    if (email) await User.update({ email }, { where: { id } });
    if (displayName) await User.update({ displayName }, { where: { id } });
    if (req.file) {
      const {
        fieldname,
        originalname,
        encoding,
        mimetype,
        destination,
        filename,
        path,
        size
      } = req.file;
      await User.update(
        {
          fieldname,
          originalname,
          encoding,
          mimetype,
          destination,
          filename,
          path,
          size
        },
        {
          where: {
            id
          }
        }
      );
    }
    const user = await User.findOne({
      attributes: ["id", "email", "filename", "name", "displayName"],
      where: { id }
    });
    res.json(user.dataValues);
  } catch (err) {
    console.error(err);
  }
});

module.exports = router;
