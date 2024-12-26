const express = require('express');
const router = express.Router();
const orderController = require('../controllers/orderController');

// Route to create a new order
router.post('/create-order', orderController.createOrder);

// Route to get all orders
router.get("/orders", orderController.getAllOrder);

// Route to get rts orders
router.get("/orders/rts", orderController.getRTSOrders)

// Route to get orders by division
router.get("/orders/division/:divison", orderController.getOrderByDivision);

// Route to get orders by sub division
router.get("/orders/sub-division/:sub_divison", orderController.getOrderBySubDivision);

// Route to get orders by customer name
router.get("/orders/customer-name/customer_name", orderController.getOrdersByCustomerName);

// Route to get orders by phone number
router.get("/orders/phone-number/:phoneNumber", orderController.getOrdersByPhoneNumber);

// Route to get a single order by ID
router.get("/orders/id/:id", orderController.getOrderById);

// Route to update order status by ID
router.put("/orders/:id/status", orderController.updateOrderStatus)

module.exports = router;

