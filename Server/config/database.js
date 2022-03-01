const mongoose = require('mongoose');
const findOrCreate = require('mongoose-findorcreate');
const bcrypt = require("bcrypt")
mongoose.connect('mongodb://localhost:27017/passport');

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
      },
      email: {
        type: String,
        required: true,
        unique: true,
      },
      password: {
        type: String,
        required: true,
      },
      mobile: {
         type: String,
         require: true
      },
    },

    {
        timestamps: true
    }
);

userSchema.plugin(findOrCreate);
//create a model for the schema
const userModel = mongoose.model('User', userSchema);    //database store users

module.exports = userModel;