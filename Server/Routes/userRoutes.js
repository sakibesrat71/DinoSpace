const express = require("express");
const {registerUser, authUser} = require("../Controller/DinerController");
const router = express.Router();

router.route("/registration").post(registerUser);
router.route("/login").post(authUser);
// router.post("/login", authUser);
// router.route("/profile").post(protect, updateUserProfile);

module.exports = router;