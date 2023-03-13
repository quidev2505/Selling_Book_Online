const StoreModel = require("../models/Store");

module.exports = class API {
  //Create Product
  static async createStore(req, res) {
    const storeInput = new StoreModel({
      id_product : req.body.id_product,
      sellquantity: req.body.sellquantity,  //Số lượng sản phẩm bán ra
    });

    try {
      const createNewStore = await storeInput.save();
      res.status(200).json(createNewStore);
    } catch (err) {
      // console.log(err)
      res.status(501).json(err);
    }
  }

  //Update Product
  static async updateStore(req, res) {
    const id_product = req.params.id;
    try {
      const updateStore = await StoreModel.findByIdAndUpdate(
        id_product,
        {
          sellquantity: req.body.sellquantity
        },
        { new: true }
      );
      res.status(200).json(updateStore);
    } catch (err) {
      res.status(501).json(err);
    }
  }


  //Get Store with ID
  static async getStorewithID(req, res){
    const id_product = req.params.id;
    try{
      const dataStore = await StoreModel.findById(id_product);
      res.status(200).json(dataStore);
    }catch(err){
      res.status(501).json(err);
    }
  }

  //Get All Product
  static async getAllProduct(req, res) {
    try {
      const arrayProduct = await ProductModel.find();
      res.status(200).json(arrayProduct);
    } catch (err) {
      res.status(501).json(err);
    }
  }


};
