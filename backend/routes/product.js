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

//Find Product With Name Product
router.get("/findProduct/:nameproduct", API_product.findproductwithName);

//Get All Product
router.get("/", API_product.getAllProduct);

//Get Product With Limit Document
router.get("/limit", API_product.getProductLimit);

//Get Category Product with name
router.get("/categoryBook/:name", API_product.getcategoryProduct);

module.exports = router;