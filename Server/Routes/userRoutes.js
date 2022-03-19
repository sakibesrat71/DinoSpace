const express = require("express");
const {registerUser, authUser, reserveUser} = require("../Controller/DinerController");
const router = express.Router();
const {protect} = require("../Middleware/AuthMiddleware");

router.route("/registration").post(registerUser);
router.route("/login").post(authUser);
// router.post("/login", authUser);
// router.route("/profile").post(protect, updateUserProfile);
router.route('/reservation').post(protect, reserveUser)
module.exports = router;