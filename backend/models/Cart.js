const mongoose = require("mongoose");

const CartSchema = new mongoose.Schema(
    {
        userID: {
            type: String,
            required: true
        },
        productID:{
            type: String,
            required: true
        },
        quantity: {
            type: Number,
            required: true,
            default: 1
        },
        title: {
            type: String,
            required: true
        },
        img:{
            type: String,
            required: true
        },
        price:{
            type: Number,
            required: true
        },
        total:{
            type:Number,
            required: true
        }
    },
    {
        timeStamp: true
    }
);


module.exports = mongoose.model("Cart", CartSchema);