const express = require('express');
const router = express.Router();
const orderController = require('../controllers/orderController');

// Route to create a new order
router.post('/create-order', orderController.createOrder);

// Route to get all orders
router.get("/orders", orderController.getAllOrder);

// Route to get orders by division
router.get("/orders/:divison", orderController.getOrderByDivision);

// Route to get orders by sub division
router.get("/orders/:sub_divison", orderController.getOrderBySubDivision);

// Route to get orders by customer name
router.get("/orders/customer_name", orderController.getOrdersByCustomerName);

// Route to get orders by phone number
router.get("/orders/:phoneNumber", orderController.getOrdersByPhoneNumber);

// Route to get a single order by ID
router.get("/orders/:id", orderController.getOrderById);

module.exports = router;

