const mongoose = require('mongoose');
const { removeUserAssociations } = require('../middlewares/UserMiddleware');

const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
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
  address: String,
  phoneNumber: String,
});
userSchema.pre('remove', async function (next) {
    try {
      // Call the middleware function to remove associations
      await removeUserAssociations(this._id);
  
      next();
    } catch (error) {
      next(error);
    }
  });

const User = mongoose.model('User', userSchema);

module.exports = User;
