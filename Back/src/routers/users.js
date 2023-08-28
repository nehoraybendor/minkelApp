const express = require("express");
const bcrypt = require("bcrypt");
const { auth, authAdmin } = require("../middlewares/auth");
const { UserModel, createToken, ValidUser, ValidLogin } = require("../models/userModel");
const router = express.Router();
const fbAdmin = require("firebase-admin")
router.get("/myinfo", auth, async (req, res) => {
  try {
    let data = await UserModel.findOne({ _id: req.tokenData._id }, { password: 0 }).populate('goals');
    res.json(data);

  } catch (error) {
    console.log(err)
    res.status(500).json(err)
  }
})

// CREATE USER 
router.post("/", async (req, res) => {
  console.log(req.body);
  let validBody = ValidUser(req.body);
  if (validBody.error) {
    return res.status(400).json(validBody.error.details);
  }
  try {
    let user = new UserModel(req.body);
    await user.save();
    fbAdmin.auth().setCustomUserClaims(user.uid, { fullName: user.fullName })

    res.status(201).json({ msg: 'User created successfully', user })

  } catch (error) {
    if (error.code == 11000) {
      return res.status(409).json({ msg: "user ALredy Exist  in system", code: 11000 })
    }
    console.log(error);
    res.status(500).json(error);
  }
})


router.post("/login", async (req, res) => {
  let validBody = ValidLogin(req.body);
  if (validBody.error) {
    return res.status(400).json(validBody.error.details);
  }
  try {
    let user = await UserModel.findOne({ email: req.body.email })
    if (!user) {
      return res.status(401).json({ msg: "User or password not match,code:1" })
    }
    let passwordValid = bcrypt.compare(req.body.password, user.password)
    if (!passwordValid) {
      return res.status(401).json({ msg: "User or password not match,code 2" })
    }
    let token = createToken(user._id);
    res.json({ token: token });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
})
router.delete("/:idDel", auth, async (req, res) => {
  let idDel = req.params.idDel;
  try {
    let data = await UserModel.deleteOne({ _id: idDel });
    res.json(data);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
})
router.put("/", auth, async (req, res) => {
  let validBody = ValidUser(req.body);
  if (!validBody) {
    return res.status(400).json(validBody.error.details);
  }
  try {
    let data = await UserModel.updateOne({ _id: req.tokenData._id }, req.body)
    res.json(data);
  } catch (error) {
    return res.status(500).json(err)
  }
})

module.exports = router;