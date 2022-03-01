const asyncHandler = require("express-async-handler")

const User = require("../config/database")


const registerUser = asyncHandler(async (req, res) => {
    const { name, email, password, cpassword, mobile } = req.body;
    res.json({
        name,
        password
    });
    const userExists = await User.findOne({ email });
  
    if (userExists) {
      res.status(404);
      throw new Error("User already exists");
    }
  
    const user = await User.create({
        name, 
        email, 
        password, 
        cpassword, 
        mobile
    });
  
    if (user) {
      res.status(201).json({
        _id: user._id,
        name: user.name,
        email: user.email,
        mobile: user.mobile,
        // token: generateToken(user._id),
      });
    } else {
      res.status(400);
      throw new Error("User not found");
    }
});

module.exports = {registerUser};