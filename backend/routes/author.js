const express = require("express");
const router = express.Router();
const API_author = require("../controllers/author.controller");

//Router
//Create Product
router.post("/", API_author.createAuthor);

//Update Product
router.put("/:id", API_author.updateAuthor);

//Delete Product
router.delete("/:id", API_author.deleteAuthor);

//Get All author
router.get("/", API_author.getAllAuthor);

//Get author with ID
router.get("/editauthor/:id", API_author.getauthortwithID);

//Find author with name of author
router.get("/findauthor/:nameauthor", API_author.findauthorwithName);

module.exports = router;
