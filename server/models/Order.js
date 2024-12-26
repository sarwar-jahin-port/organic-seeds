const mongoose = require('mongoose');
const {Schema} = mongoose;

// Location Schema
const LocationSchema = new Schema({
    division: {type: String, required: true},
    sub_division: {type: String, required: true},
    road_or_flat: {type: String, required: true},
});

// SKU Schema
const SkuSchema = new Schema({
    product_type: {type: String, enum: ['monthly', 'reqular'], required: true},
    product_name: {type: String, required: true},
    product_name_second: {type: String},
    quantity: {type: Number, required: true, min: 1}
});

// Customer information schema
const CustomerInfoSchema = new Schema({
    name: {type: String, required: true},
    phone: {type: String, required: true},
    email: {type: String, required: false},
    location: {type: [LocationSchema], required: true},
});

// Order Schema
const OrderSchema = new Schema({
    order_creation_date: {type: Date, required: true},
    skus: {type: [SkuSchema], required: true},
    customer_info: {type: CustomerInfoSchema, required: true},
    status: { type: String, enum: ['rts', 'shipped', 'delivered', 'cancelled'], default: 'rts' },
});

module.exports = mongoose.model('Order', OrderSchema, 'orders');