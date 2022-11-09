const User = require("../models/User");
const userController = {
  //GET ALL USERS
  getAllUsers: async (req, res) => {
    try {
      // find giup tra ve tat ca file cua user
      const user = await User.find();
      res.status(200).json(user);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  //DELETE USER
  deleteUser: async (req, res) => {
    try {
      //findById la tiem kiem neu co thi dung
      //findByIdAndDelete la tiem kiem thay va xoa luon
      // const user = await User.findById(req.params.id);
      res.status(200).json("Delete successfully");
      const user = await User.findByIdAndDelete(req.params.id);
    } catch (err) {
      res.status(500).json(err);
    }
  },
};

module.exports = userController;
