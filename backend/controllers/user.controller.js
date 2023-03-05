const UserModel = require("../models/User");

module.exports = class API {
  //Create Author
  static async createUser(req, res) {
    const userInput = new UserModel({
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
    });
    try {
      const createNewUser = await userInput.save();
      res.status(200).json(createNewUser);
    } catch (err) {
      res.status(501).json(err);
    }
  }

  //Update Category
  static async updateUser(req, res) {
    const id_user = req.params.id;
    try {
      const updateUser = await UserModel.findByIdAndUpdate(
        id_user,
        {
          $set: req.body,
        },
        { new: true }
      );
      res.status(200).json(updateUser);
    } catch (err) {
      res.status(501).json(err);
    }
  }

  //Delete Category
  static async deleteUser(req, res) {
    const id_user = req.params.id;
    try {
      await UserModel.findByIdAndDelete(id_user);
      res.status(200).json("Tài khoản xóa thành công!");
    } catch (err) {
      res.status(501).json(err);
    }
  }

  //Get Category With id
//   static async getauthortwithID(req, res) {
//     try {
//       const result = await AuthorModel.findOne({ _id: req.params.id });
//       res.status(201).json(result);
//     } catch (err) {
//       res.status(501).json(err);
//     }
//   }

  //Find Category with name
  static async finduserwithName(req, res) {
    try {
      const name_user = await req.params.nameuser;
      const UserData = await UserModel.find({
        username: { $regex: `${name_user}`, $options: "i" },
      });

      res.status(201).json(UserData);
    } catch (err) {
      res.status(501).json(err);
    }
  }

  //Get All Category
  static async getAllUser(req, res) {
    try {
      const arrayUser = await UserModel.find();
      res.status(200).json(arrayUser);
    } catch (err) {
      res.status(501).json(err);
    }
  }
};
