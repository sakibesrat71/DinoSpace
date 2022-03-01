const express = require("express");
const {registerUser} = require("../Controller/DinerController");
const router = express.Router();

router.route("/").post(registerUser);
// router.post("/login", authUser);
// router.route("/profile").post(protect, updateUserProfile);

module.exports = router;