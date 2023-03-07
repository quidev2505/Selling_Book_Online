const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema(
    {
        username: {
            type: String,
            required: true,
            unique: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
        },
        phonenumber: {
            type: Number,
            required: true,
            unique: true,
        },
        address: {
            type: String,
            required:true,
            minlength:12,
        },
        payment:{
            type: String,
            required: true,
            default: 'Thanh toán khi nhận hàng (COD)'
        },
        detail_cart:{
            type: Array,
            required: true,
        },
        statusOrder:{
            type: String,
            required: true,
            default: 'Chưa xử lý'
        },
        totalOrder: {
            type: Number,
            required: true
        }
    },
    {
        timestamps: true,
    }
);

module.exports = mongoose.model("Order", OrderSchema);
