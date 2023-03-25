const OrderModel = require("../models/Order");

module.exports = class API {
  //Create Product
  static async createOrder(req, res) {
    const orderInput = new OrderModel({
      iduser: req.body.iduser,
      username: req.body.username,
      email: req.body.email,
      phonenumber: req.body.phonenumber,
      address: req.body.address,
      payment: req.body.payment,
      detail_cart: req.body.detail_cart,
      statusOrder: req.body.statusOrder,
      totalOrder: req.body.totalOrder,
      timecreateOrder: new Date().toLocaleString('en-GB', {
                  hour12: false,
                }),
    });
    try {
      const createNewOrder = await orderInput.save();
      res.status(200).json(createNewOrder);
    } catch (err) {
      console.log(err);
      res.status(501).json(err);
    }
  }

  //Update Product
  static async updateOrder(req, res) {
    const id_order = req.params.id;
    try {
      const updateOrder = await OrderModel.findByIdAndUpdate(
        id_order,
        {
          $set: req.body,
        },
        { new: true }
      );
      res.status(200).json(updateOrder);
    } catch (err) {
      res.status(501).json(err);
    }
  }

  //Update Order Admin
  static async updateOrderAdmin(req, res) {
    const id_order = req.params.id;
    try {
      const updateOrder = await OrderModel.findByIdAndUpdate(
        id_order,
        {
          statusOrder: req.body,
        },
        { new: true }
      );
      res.status(200).json(updateOrder);
    } catch (err) {
      res.status(501).json(err);
    }
  }

  //Get dataOrder with ID
  static async getDataOrderWithID(req, res) {
    const id_order = req.params.id;
    console.log(id_order);
    try {
      const dataOrder = await OrderModel.findById(id_order);
      res.status(200).json(dataOrder);
    } catch (err) {
      console.log(err);
      res.status(501).json(err);
    }
  }

  //Get dataOrder with ID
  static async getDataOrderWithIDUser(req, res) {
    const id_user = req.params.id;
    try {
      const dataOrder = await OrderModel.find({ iduser: id_user });
      res.status(200).json(dataOrder);
    } catch (err) {
      console.log(err);
      res.status(501).json(err);
    }
  }

  //Get dataOrder with order
  static async getDataOrderWithIDOrder(req, res) {
    const id_order = req.params.id;
    try {
      const dataOrder = await OrderModel.find({ _id: id_order });
      res.status(200).json(dataOrder);
    } catch (err) {
      console.log(err);
      res.status(501).json(err);
    }
  }

  //Delete Product
  //   static async deleteOrder(req, res) {
  //     const id_product = req.params.id;
  //     try {
  //       await ProductModel.findByIdAndDelete(id_product);
  //       res.status(200).json("Sản phẩm đã xóa thành công!");
  //     } catch (err) {
  //       res.status(501).json(err);
  //     }
  //   }

  //Get One Product
  //   static async findoneProduct(req, res) {
  //     const id_product = req.params.id;
  //     try {
  //       const ProductResult = await ProductModel.findById(id_product);
  //       res.status(201).json(ProductResult);
  //     } catch (err) {
  //       res.status(501).json(err);
  //     }
  //   }

  //Get Product With Name
  //   static async findproductwithName(req, res) {
  //     try {
  //       const name_product = await req.params.nameproduct;
  //       const ProductData = await ProductModel.find({
  //         $or: [
  //           { title: { $regex: `${name_product}`, $options: "i" } },
  //           { description: { $regex: `${name_product}`, $options: "i" } },
  //         ],
  //       });

  //       res.status(201).json(ProductData);
  //     } catch (err) {
  //       res.status(501).json(err);
  //     }
  //   }

  //Get All Product
  static async getAllOrder(req, res) {
    try {
      const arrayOrder = await OrderModel.find();
      res.status(200).json(arrayOrder);
    } catch (err) {
      res.status(501).json(err);
    }
  }

  //Get Product With Limit Collection
  //   static async getProductLimit(req, res) {
  //     try {
  //       const arrayProduct = await ProductModel.find().limit(12);
  //       res.status(200).json(arrayProduct);
  //     } catch (err) {
  //       res.status(501).json(err);
  //     }
  //   }

  //Get Product Category
  //   static async getcategoryProduct(req, res) {
  //     try {
  //       var arrayProduct;
  //       if (req.params.name === "Tất Cả Sách") {
  //         arrayProduct = await ProductModel.find({});
  //       } else {
  //         let arrayResultCategory = await CategoryModel.find();
  //         var check_duplicated = 0;
  //         arrayResultCategory.forEach((item, index) => {
  //           if (item.category_name === req.params.name) {
  //             check_duplicated++;
  //           }
  //         });

  //         if (check_duplicated == 0) {
  //           arrayProduct = await ProductModel.find({ bookType: req.params.name });
  //         } else {
  //           arrayProduct = await ProductModel.find({
  //             categories: req.params.name,
  //           });
  //         }
  //       }

  //       res.status(200).json(arrayProduct);
  //     } catch (err) {
  //       res.status(501).json(err);
  //     }
  //   }

  //Get Product With id
  //   static async getproductwithID(req, res) {
  //     try {
  //       const result = await ProductModel.findOne({ _id: req.params.id });
  //       res.status(201).json(result);
  //     } catch (err) {
  //       res.status(501).json(err);
  //     }
  //   }

  //Get product with id
  //   static async getwithID(req, res) {
  //     try {
  //       const result = await ProductModel.findOne({ _id: req.params.id });
  //       res.status(201).json(result);
  //     } catch (err) {
  //       res.status(501).json(err);
  //     }
  //   }

  //Find Order with id
  static async findorderwithID(req, res) {
    try {
      const id_order = await req.params.id;
      const OrderData = await OrderModel.find({
        phonenumber: { $regex: `${id_order}`, $options: "i" },
      });

      res.status(201).json(OrderData);
    } catch (err) {
      res.status(501).json(err);
    }
  }


  //Get order with status order
  static async getorderwithstatusorder(req, res){
    try{
      const statusInput = req.params.name;
      const dataOrder = await OrderModel.find({statusOrder: statusInput});
      res.status(201).json(dataOrder);
    }catch(err){
      res.stats(501).json(err);
    }
  }
};
