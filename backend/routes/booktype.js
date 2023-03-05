const express = require("express");
const router = express.Router();
const API_booktype = require("../controllers/booktype.controller");

//Router
//Create Product
router.post("/", API_booktype.createBookType);

//Update Product
router.put("/:id", API_booktype.updateBookType);

//Delete Product
router.delete("/:id", API_booktype.deleteBookType);

//Get All author
router.get("/", API_booktype.getAllBookType);

//Get author with ID
router.get("/editbooktype/:id", API_booktype.getbooktypewithID);

//Find author with name of author
router.get("/findbooktype/:namebooktype", API_booktype.findbooktypewithName);

module.exports = router;
