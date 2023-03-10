const express = require("express");
const router = express.Router();
const API_order = require("../controllers/order.controller");

//Router
//Create Order
router.post("/", API_order.createOrder);

//Get All Order
router.get("/", API_order.getAllOrder);

//Update Order
router.put("/infoUser/:id", API_order.updateOrder);


//Get Data Order with ID send
router.get("/detailorder/:id", API_order.getDataOrderWithID);

//Get Data Order with ID user
router.get("/infoUser/:id", API_order.getDataOrderWithIDUser);



// //Get One Product
// router.get("/find/:id", API_product.findoneProduct);

// //Find Product With Name Product
// router.get("/findProduct/:nameproduct", API_product.findproductwithName);

// //Get All Product
// router.get("/", API_product.getAllProduct);

// //Get Product With Limit Document
// router.get("/limit", API_product.getProductLimit);

// //Get Category Product with name
// router.get("/categoryBook/:name", API_product.getcategoryProduct);

// //Get Product with ID
// router.get("/editBook/:id", API_product.getproductwithID);

// //Get product withd id anywhere
// router.get("/:id", API_product.getwithID);

module.exports = router;
