const express = require("express");
const router = express.Router();
const API_product  = require("../controllers/product.controller");


//Router
//Create Product
router.post("/", API_product.createProduct);

//Update Product
router.put("/:id", API_product.updateProduct);

//Delete Product
router.delete("/:id", API_product.deleteProduct);

//Get One Product
router.get("/find/:id", API_product.findoneProduct);

//Get All Product
router.get("/", API_product.getAllProduct);

module.exports = router;