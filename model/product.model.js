const mongoose = require("mongoose");

const ProductSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    category: {
        type: Number,
        required: true
    },
    stock: {
        type: Number
    },
    sold: {
        type: Number
    }
}
);


const ProductModel = mongoose.model( "Product" , ProductSchema );

module.exports = ProductModel