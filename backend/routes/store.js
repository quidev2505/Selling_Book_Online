const express = require("express");
const router = express.Router();
const API_store = require("../controllers/store.controller");

//Router
//Create Product
router.post("/", API_store.createStore);

//Update Product
router.put("/:id", API_store.updateStore);

//Get Store with ID
router.get("/:id", API_store.getStorewithID);

//Get All Product
router.get("/", API_store.getAllProduct);


module.exports = router;
